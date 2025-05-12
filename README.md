# 📝 Taskly A Simple Todo List 

![image](https://github.com/user-attachments/assets/711614a7-b3f0-46a1-babb-ef1d88bb7ff3)

A full-stack todo list application built with Node.js, Express, PostgreSQL, and EJS templates.

## ✨ Features

- ✅ Add, edit, and delete tasks
- ✅ Mark tasks as complete
- ✅ Persistent storage with PostgreSQL
- ✅ Clean UI with responsive design
- ✅ Server-side rendering with EJS
- ✅ RESTful API endpoints

## 🛠 Tech Stack

| Component       | Technology |
|----------------|------------|
| Frontend       | EJS, CSS   |
| Backend        | Node.js, Express |
| Database       | PostgreSQL |
| Package Manager| npm        |

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- PostgreSQL (v12+)
- npm (v6+)

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/Taskly-A-Simple-To-Do-List-App.git
cd Taskly-A-Simple-To-Do-List-App
```
2. Install dependencies
```bash
npm install
```
3. Set up PostgreSQL
- Create a database taskly
- Run the schema from queries.sql
- Edit database config in index.js:
  ```bash
  const db = new pg.Client({
   user: "postgres",
   host: "localhost",
   database: "taskly",
   password: "[YOUR PASSWORD]",
   port: 5432,
  });
  ```
## 🌱 Roadmap
- Add due dates
- Implement categories
- User authentication

## 🤝 Contributing
### Contributions are welcome! Please follow these steps:
- Fork the project
- Create your feature branch (git checkout -b feature/AmazingFeature)
- Commit your changes (git commit -m 'Add some AmazingFeature')
- Push to the branch (git push origin feature/AmazingFeature)
- Open a Pull Request




