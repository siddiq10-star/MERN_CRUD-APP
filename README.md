# MERN CRUD App

This is a full-stack **CRUD (Create, Read, Update, Delete)** application built using the **MERN Stack**:

- **MongoDB** – Database
- **Express.js** – Backend Framework
- **React.js** – Frontend UI
- **Node.js** – Server Runtime

## 📂 Project Structure

mern-crud-app/
├── front-end/ # React frontend
├── back-end/ # Express backend
└── README.md

yaml
Copy
Edit

---

## ⚙️ Features

- Add new records
- View all records
- Update records
- Delete records
- Frontend and Backend run independently
- API built with Express and MongoDB using Mongoose

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js and npm installed
- MongoDB running locally or with Atlas
- Git installed

---

### 📦 Backend Setup

````bash
cd back-end
npm install
Start backend server:

bash
Copy
Edit
npm start
Or using nodemon (if installed):

bash
Copy
Edit
npx nodemon index.js
Set your .env in back-end/:

ini
Copy
Edit
DBURL=mongodb://127.0.0.1:27017/CRUD
PORT=8000
💻 Frontend Setup
bash
Copy
Edit
cd front-end
npm install
npm start
Runs on: http://localhost:3000

🌐 API Endpoints
Method	Endpoint	Description
POST	/api/website/crud/insert	Create a record
GET	/api/website/crud/read	Get all records
DELETE	/api/website/crud/delete/:id	Delete a record
PUT	/api/website/crud/updateData/:id	Update a record

📜 License
This project is open-source and free to use under the MIT License.

🤝 Contributions
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

🙋‍♂️ Author
Siddiq Prince
GitHub: @siddiq10-star

yaml
Copy
Edit

---

### ✅ How to Add This in VS Code

1. Create a new file in the root:
   `mern-crud-app/README.md`

2. Paste the content above.

3. Save and commit it:

```bash
git add README.md
git commit -m "Add README.md"
git push
````
