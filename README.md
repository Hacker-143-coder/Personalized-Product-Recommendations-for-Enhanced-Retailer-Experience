# Qwipo Personalized Recommendations Prototype 🎯📦  

![Project Status](https://img.shields.io/badge/status-in%20progress-yellow)  
![License](https://img.shields.io/badge/license-MIT-blue.svg)  
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)  

An **AI-powered recommendation prototype** built for the **Qwipo B2B marketplace**, enhancing product discovery and optimizing retailer inventory with personalized suggestions.  

---

## 🎯 Problem Statement  

Retailers on B2B marketplaces like Qwipo often struggle with:  
- **Inefficient product discovery** among thousands of SKUs.  
- **Repetitive buying habits**, leading to stagnant inventory.  
- **Missed opportunities** to upsell or cross-sell relevant products.  

This directly impacts growth, profitability, and adaptability to changing market demands.  

---

## 💡 Our Solution  

We developed a **Smart Recommendation Engine** that:  
- Analyzes **retailer orders** and **product patterns**.  
- Delivers **personalized product suggestions**.  
- Integrates seamlessly with Qwipo’s **branded frontend** and **backend APIs**.  

---

## ✨ Key Features  

✅ **Personalized Recommendations** – Item-based collaborative filtering powered by scikit-learn.  
✅ **Branded UI** – React + Vite frontend styled with Qwipo’s theme and logo.  
✅ **API-First Architecture** – Node.js backend for products + FastAPI recommender service.  
✅ **Database Seeding** – Preloaded with sample products, retailers, and orders.  
✅ **Dockerized Setup** – Run everything with one `docker-compose up --build`.  

---

## 🛠️ Tech Stack  

* **Frontend** → React (Vite) + Tailwind CSS  
* **Backend** → Node.js + Express  
* **Recommender** → Python + FastAPI + scikit-learn + joblib  
* **Database** → MongoDB  
* **Containerization** → Docker & Docker Compose  

---

## ⚙️ System Architecture  

1. **Frontend (React)** → UI for retailers.  
2. **Backend (Node.js)** → REST API for product management and recommendations.  
3. **Recommender (Python)** → Trains & serves ML models.  
4. **MongoDB** → Stores products, retailers, and orders.  

*A full architecture diagram can be added here.*  

---

## 🚀 Getting Started  

### Prerequisites  
- Node.js 18+  
- Python 3.11+  
- MongoDB (or Docker)  

### Installation  

```bash
# Clone repository
git clone https://github.com/Hacker-143-coder/Personalized-Product-Recommendations-for-Enhanced-Retailer-Experience
cd qwipo-branded-package
```

#### Backend (Node.js API)  
```bash
cd qwipo-backend
npm install
npm run seed   # Insert sample data
npm run dev    # Run on http://localhost:5000
```

#### Recommender (Python FastAPI)  
```bash
cd recommender
python -m venv .venv
source .venv/bin/activate   # or .venv\Scripts\activate (Windows)
pip install -r requirements.txt
python train_and_save.py
uvicorn api:app --reload --port 8001
```

#### Frontend (React + Vite)  
```bash
cd qwipo-frontend
npm install
npm run dev   # Run on http://localhost:5173
```

---

## 🐳 Run with Docker  

Run everything (MongoDB, Backend, Frontend, Recommender) at once:  

```bash
docker-compose up --build
```

Access:  
- Frontend → http://localhost:5173  
- Backend → http://localhost:5000  
- Recommender → http://localhost:8001  

⚠️ If MongoDB is already running locally, stop it or change the compose port to `27018:27017`.  

---

## 📊 Recommendation Flow  

1. Retailer places orders → stored in MongoDB.  
2. Recommender trains collaborative filtering model.  
3. API fetches **recommended product IDs**.  
4. Backend resolves IDs → returns full product details to frontend.  

Example:  

```bash
GET http://localhost:5000/api/products/recommend/r1
```

Response:  

```json
{
  "recommendations": [
    { "_id": "p2", "name": "Surya Teja HMT Rice -25kg", "price": 1190 },
    { "_id": "p3", "name": "Apple Brand Toor Dal", "price": 1180 }
  ]
}
```

---

## 🤝 Contributing  

We welcome contributions 🚀.  
1. Fork the repo  
2. Create a new branch (`feature/your-feature`)  
3. Commit your changes  
4. Push and open a PR  

---

## 📄 License  

Distributed under the MIT License. See `LICENSE.txt` for more info.  

---

## 📧 Contact  

Project Link → [GitHub Repo](https://github.com/Hacker-143-coder/Personalized-Product-Recommendations-for-Enhanced-Retailer-Experience)  
