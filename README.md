# 🍔 QuickBite - Microservices-based Food Delivery Application

QuickBite is a modular and scalable food ordering system built using **microservices architecture**, **Docker**, and **Kubernetes**. It supports **CI/CD automation** using **GitHub Actions**, and provides services for user authentication and order processing.

---

## 🚀 Features

- 🔐 User Registration and Authentication
- 🛒 Order Management
- 🧱 Microservices Architecture (User Service & Order Service)
- 🐳 Docker & Docker Compose Support
- ☸️ Kubernetes Orchestration with Minikube
- 🔄 CI/CD Pipeline via GitHub Actions
- ✅ Unit & Integration Testing with Jest

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Containerization:** Docker, Docker Compose
- **Orchestration:** Kubernetes (Minikube)
- **CI/CD:** GitHub Actions
- **Testing:** Jest, Supertest

---

## 📁 Project Structure
quickbite/
├── back-end/
│   ├── order-service/
│   │   ├── public/
│   │   ├── .env
│   │   ├── Dockerfile
│   │   ├── server.js
│   │   ├── integration.test.js
│   │   ├── orderService.test.js
│   │   ├── package.json
│   │   └── package-lock.json
│   │
│   ├── user-service/
│   │   ├── public/
│   │   ├── .env
│   │   ├── Dockerfile
│   │   ├── server.js
│   │   ├── integration.test.js
│   │   ├── userService.test.js
│   │   ├── package.json
│   │   └── package-lock.json
│   │
│   ├── tests/
│   │   ├── e2e.test.js
│   │   ├── package.json
│   │   └── package-lock.json
│
├── docker-compose.yml
├── express.json
├── extra-scrape-configs.yaml
├── .gitignore
└── README.md

---

---

## 🧱 Microservices Overview

### 🔐 User Service
Handles user registration, login, and authentication features.

### 🛒 Order Service
Manages customer orders including order creation, status updates, and history.

---

## ⚙️ Setup & Run Locally

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/apsranasuriya/Quickbite-.git
cd Quickbite-/back-end

2️⃣ Build Docker Images
docker build -t user-service ./user-service
docker build -t order-service ./order-service

3️⃣ Start with Docker Compose
docker-compose up


☸️ Kubernetes Deployment
Start Minikube
minikube start

Apply Kubernetes Configs
kubectl apply -f ./k8s/

Verify
kubectl get pods
kubectl get services

🔄 CI/CD with GitHub Actions
GitHub Actions are used for:

Running tests (Jest)

Building Docker images

Deploying on push (if enabled)

Required Secrets
DOCKER_USERNAME

DOCKER_PASSWORD


🧪 Testing
Unit and integration testing using Jest and Supertest.

Run Tests
cd order-service
npm test

cd ../user-service
npm test

cd ../tests
npm test  # For end-to-end test

Developed by
Piyumi Ranasuriya
Thanuji Dananjanie
Alvic Panganiban
Nathanael Joshua