import os, joblib
from fastapi import FastAPI, HTTPException
from pymongo import MongoClient
from dotenv import load_dotenv
load_dotenv()
MONGO_URI = os.getenv('MONGO_URI','mongodb://localhost:27017/qwipo_db')
DB_NAME = os.getenv('DB_NAME','qwipo_db')
MODEL_PATH = os.getenv('MODEL_PATH','recommender_model.joblib')
app = FastAPI()
client = MongoClient(MONGO_URI)
db = client[DB_NAME]
_model = None
def load_model():
  global _model
  if _model is None:
    _model = joblib.load(MODEL_PATH)
  return _model
@app.get('/health')
def health():
  return {'ok':True}
@app.get('/recommend_by_retailer/{retailerId}')
def recommend_by_retailer(retailerId: str, k: int = 8):
  m = load_model()
  products = m['product_index']
  matrix = m['matrix']
  orders = list(db.orders.find({'retailerId': retailerId}))
  if not orders:
    pops = list(db.products.find().sort([('popularity', -1)]).limit(k))
    return {'productIds': [p['_id'] for p in pops]}
  from collections import Counter
  cnt = Counter()
  for o in orders:
    for it in o.get('items', []):
      cnt[it['productId']] += it.get('qty',1)
  top = [p for p,_ in cnt.most_common(3)]
  model = m['model']
  recs = []
  for t in top:
    if t not in products: continue
    idx = products.index(t)
    distances, indices = model.kneighbors(matrix[idx].reshape(1,-1), n_neighbors=k+1)
    for i in indices[0]:
      pid = products[i]
      if pid != t:
        recs.append(pid)
  from collections import Counter
  scored = Counter(recs)
  return {'productIds':[p for p,_ in scored.most_common(k)]}
