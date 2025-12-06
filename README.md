# ⚙️ Automotive Zone - Backend API Server

Automotive Zone Backend is a **RESTful API server** built with **Node.js, Express.js, and MongoDB** that powers the Automotive Product Management System. It handles user authentication, brand/product management, and cart operations with secure endpoints.

<!-- Core Backend Technologies -->
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.3.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<!-- Dependencies -->
[![CORS](https://img.shields.io/badge/CORS-2.8.x-FF6B6B?style=for-the-badge&logo=webpack&logoColor=white)](https://github.com/expressjs/cors)
[![Dotenv](https://img.shields.io/badge/Dotenv-16.4.x-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)](https://github.com/motdotla/dotenv)
[![SweetAlert2](https://img.shields.io/badge/SweetAlert2-11.10.x-8A2BE2?style=for-the-badge&logo=swagger&logoColor=white)](https://sweetalert2.github.io/)

---

[![Automotive Zone Backend](https://i.ibb.co/Bfs6P0L/14416.gif)](https://automotive-zone-backend.vercel.app/)

## 🔗 Live Links
**Backend API:** [https://automotive-zone-backend.vercel.app](https://automotive-zone-backend.vercel.app/)  
**Frontend Demo:** [https://automotive-zone-415211.web.app](https://automotive-zone-415211.web.app/)

---

## 🚀 API Endpoints

### **Users Management**
- `POST /users/add` - Register a new user

### **Brand Management**
- `POST /categories` - Add a new brand
- `GET /categories` - Get all brands
- `GET /categories/:name` - Get products of a specific brand

### **Products Management**
- `GET /products` - Get all products
- `GET /products/details/:id` - Get details of a specific product
- `POST /products/add` - Add a new product
- `DELETE /products/delete/:id` - Delete a product
- `PUT /products/update/:id` - Update a product

### **Cart Management**
- `GET /carts/:uid` - Get cart items of a user
- `POST /carts/add` - Add an item to the cart
- `DELETE /carts/delete/:id` - Remove an item from the cart

---

## ✨ Features

### **Core Functionality**
- 🔐 **Secure API Endpoints** with proper validation
- 🗄️ **MongoDB Database** with native driver
- 📡 **RESTful Architecture** following best practices
- 🔄 **CRUD Operations** for all entities (Users, Brands, Products, Carts)

### **Security & Performance**
- 🛡️ **CORS Enabled** for cross-origin requests
- ⚡ **Fast Response Times** with optimized queries
- 🔧 **Environment Configuration** with dotenv
- 📱 **SweetAlert2 Integration** for alerts

### **Development Features**
- 🌐 **Vercel Deployment** with serverless functions
- 🚀 **Production Ready** with proper scripts
- 🐛 **Development Mode** with Nodemon
- 📝 **Clear API Documentation**

---

## 🛠️ Technology Stack

### **Backend Runtime**
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Vercel** - Deployment platform

### **Dependencies**
- **cors** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management
- **express** - Fast, unopinionated web framework
- **mongodb** - Official MongoDB driver for Node.js
- **sweetalert2** - Beautiful, responsive alerts

### **Development**
- **nodemon** - Automatic server restart on changes

---

## ⚡ Quick Setup & Installation

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/automotive-zone-backend.git
cd automotive-zone-backend
```
### **2. Install Dependecies**
```bash
npm install
# or
yarn install
```
### **3. Configure Environment Variables**
```bash
DB_USER=` Your mongodb/mongodb atlas user name`
DB_PASS=` Your mongodb/ mongodb atlas user password `
yarn install
```
### **4. Run Development Server**
```bash
npm rum dev
#or
yarn dev
```

### **5. Test API Locally**
```bash
http://localhost:5000
```
## 🚀 Deployment
#### This Project is deployed using <strong> Vercel Hosting</strong>
