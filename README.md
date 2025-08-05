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

<img width="1207" height="599" alt="image" src="https://github.com/user-attachments/assets/eca8966b-ab07-4251-ab13-8ca2b706c3b6" />

<img width="1435" height="292" alt="image" src="https://github.com/user-attachments/assets/28242cb0-9f94-4b0d-ac33-198d47c4421e" />

### **User Service**
- **Base URL:** `http://localhost:3000`
- **Endpoints:**
  - **List Users:**  
    ```
    curl http://localhost:3000/users
    ```
    Or open in your browser: [http://localhost:3000/users](http://localhost:3000/users)

<img width="759" height="308" alt="image" src="https://github.com/user-attachments/assets/5e365bc0-3e1f-4906-8e02-1435babcd671" />

---

### **Product Service**
- **Base URL:** `http://localhost:3001`
- **Endpoints:**
  - **List Products:**  
    ```
    curl http://localhost:3001/products
    ```
    Or open in your browser: [http://localhost:3001/products](http://localhost:3001/products)

<img width="730" height="263" alt="image" src="https://github.com/user-attachments/assets/9ffc7de8-1671-4ec8-a3e9-6077c6e98615" />

---

### **Order Service**
- **Base URL:** `http://localhost:3002`
- **Endpoints:**
  - **List Orders:**  
    ```
    curl http://localhost:3002/orders
    ```
    Or open in your browser: [http://localhost:3002/orders](http://localhost:3002/orders)

<img width="644" height="307" alt="image" src="https://github.com/user-attachments/assets/37374942-9502-4720-afe2-2d962577b32c" />

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

<img width="559" height="289" alt="image" src="https://github.com/user-attachments/assets/4eb62db2-330b-44b0-9876-c52fdbf9f828" />


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
