import os
import pandas as pd
from pymongo import MongoClient
from sklearn.neighbors import NearestNeighbors
import joblib
from dotenv import load_dotenv
load_dotenv()

MONGO_URI = os.getenv('MONGO_URI','mongodb://localhost:27017/qwipo_db')
DB_NAME = os.getenv('DB_NAME','qwipo_db')
MODEL_PATH = os.getenv('MODEL_PATH','recommender_model.joblib')

client = MongoClient(MONGO_URI)
db = client[DB_NAME]
orders = list(db.orders.find({}))
rows = []
for o in orders:
  rid = o.get('retailerId')
  for it in o.get('items', []):
    rows.append({'retailerId': rid, 'productId': it['productId'], 'qty': it.get('qty',1)})
if not rows:
  print('No orders found. Seed DB first.')
  exit(1)
df = pd.DataFrame(rows)
pivot = df.pivot_table(index='productId', columns='retailerId', values='qty', aggfunc='sum', fill_value=0)
model = NearestNeighbors(metric='cosine', algorithm='brute')
model.fit(pivot.values)
joblib.dump({'model': model, 'product_index': pivot.index.tolist(), 'matrix': pivot.values}, MODEL_PATH)
print('Model saved to', MODEL_PATH)
