# Microservices-Task

## Overview
This document provides details on testing various services after running the `docker-compose` file. These services include User, Product, Order, and Gateway Services. Each service has its own endpoints for testing purposes.


# 🧩 Microservices-Based Node.js Application

This project is a **microservices-based Node.js application** using `Docker`, `Docker Compose`, and `Kubernetes` (coming soon). It demonstrates how to containerize and orchestrate independent services like User, Product, Order, and Gateway.

---

## 📌 Project Objectives

- Develop independently scalable microservices
- Containerize each service using Docker
- Run all services together using Docker Compose
- Future-ready for Kubernetes-based deployment

---

## 🧱 Architecture Overview

<img width="1070" height="151" alt="image" src="https://github.com/user-attachments/assets/75eec358-58f6-42bb-b324-ec3b06cba581" />


> Replace with a draw.io or Mermaid diagram later!

---

## 🚀 Tech Stack

| Component       | Tech                  |
|----------------|------------------------|
| Language        | JavaScript (Node.js)  |
| API Framework   | Express.js            |
| Containerization| Docker, Docker Compose|
| Gateway         | Axios + Express       |
| Future Deploy   | Kubernetes            |

---

## 📂 Folder Structure


Microservices-Task/
│
├── Microservices/
│ ├── user-service/
│ ├── product-service/
│ ├── order-service/
│ └── gateway-services/
│
└── docker-compose.yml

- `user-service` – Handles user operations
- `product-service` – Manages product-related data
- `order-service` – Processes and manages orders
- `gateway-service` – Acts as the API Gateway routing all requests



---

## 🧰 Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Node.js & npm](https://nodejs.org/)
- VS Code or any IDE
- Git

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/swetabh65/Microservices-Task.git
cd Microservices-Task


| Service         | Port | Path                 |
| --------------- | ---- | -------------------- |
| User Service    | 3002 | `/users`             |
| Product Service | 3003 | `/products`          |
| Order Service   | 3004 | `/orders`            |
| Gateway Service | 3001 | `/` (proxy endpoint) |


---

## Services and Endpoints

### **User Service**
- **Base URL:** `http://localhost:3000`
- **Endpoints:**
  - **List Users:**  
    ```
    curl http://localhost:3000/users
    ```
    Or open in your browser: [http://localhost:3000/users](http://localhost:3000/users)

---

### **Product Service**
- **Base URL:** `http://localhost:3001`
- **Endpoints:**
  - **List Products:**  
    ```
    curl http://localhost:3001/products
    ```
    Or open in your browser: [http://localhost:3001/products](http://localhost:3001/products)

---

### **Order Service**
- **Base URL:** `http://localhost:3002`
- **Endpoints:**
  - **List Orders:**  
    ```
    curl http://localhost:3002/orders
    ```
    Or open in your browser: [http://localhost:3002/orders](http://localhost:3002/orders)

---

### **Gateway Service**
- **Base URL:** `http://localhost:3003/api`
- **Endpoints:**
  - **Users:**  
    ```
    curl http://localhost:3003/api/users
    ```
  - **Products:**  
    ```
    curl http://localhost:3003/api/products
    ```
  - **Orders:**  
    ```
    curl http://localhost:3003/api/orders
    ```

---

## Instructions
1. Start all services using the `docker-compose` file:
   ```
   docker-compose up
   ```
2. Once the services are running, use the above endpoints to verify the functionality.

🙌 Author
Swetabh Sonal
GitHub | LinkedIn
