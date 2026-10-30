# Docker Task – Flask Backend & Node.js Frontend

A containerized web application built using **Node.js (Express)** for the frontend and **Python (Flask)** for the backend. The frontend collects user details through an HTML form and sends them to the Flask backend, which processes and stores the submitted data in **MongoDB Atlas**.

The application uses **Docker and Docker Compose** to containerize and run both services within a shared Docker network.

## 🚀 Features

- Frontend developed using Node.js and Express.
- HTML form for collecting user information.
- Express sends form data to the Flask backend using HTTP requests.
- Flask handles form submissions and stores data in MongoDB Atlas.
- Redirects users to a success page after successful submission.
- Separate Dockerfiles for frontend and backend.
- Docker Compose manages both containers.
- Services communicate through a custom Docker network.
- Docker images published on Docker Hub.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Frontend server and routing |
| EJS | Dynamic HTML templates |
| Python | Backend programming |
| Flask | Backend API |
| MongoDB Atlas | Cloud database |
| Docker | Containerization |
| Docker Compose | Multi-container management |
| Git & GitHub | Version control |

## 📁 Project Structure

```text
DockerTask/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── .dockerignore
│   └── .env
│
├── frontend/
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│   ├── Dockerfile
│   ├── .dockerignore
│   │
│   ├── views/
│   │   ├── form.ejs
│   │   └── success.ejs
│   │
│   └── public/
│
├── docker-compose.yaml
└── .gitignore
```

## ⚙️ Application Workflow

1. The user opens the frontend application in a browser.
2. The user enters details into the HTML form and submits it.
3. Express receives the form data.
4. Express sends an HTTP POST request to the Flask backend.
5. Flask processes the submitted data and stores it in MongoDB Atlas.
6. Flask returns a response to Express.
7. If the submission is successful, Express redirects the user to the success page.

**Success Message:**

`Data submitted successfully`

## 🐳 Docker Configuration

The application consists of two Docker services:

- **Backend:** Flask application running on port `5000` inside the container.
- **Frontend:** Express application running on port `3000` inside the container.

Docker Compose connects both services through a custom bridge network.

### Port Mapping

| Service | Container Port | Host Port |
|---|---:|---:|
| Frontend | 3000 | 3000 |
| Backend | 5000 | 8000 |

The frontend communicates with the backend using its Docker Compose service name:

```text
http://backend:5000
```

### Run the Application Using Docker Compose

**1. Clone the repository**

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

**2. Navigate to the project directory**

```bash
cd DockerTask
```

**3. Configure environment variables**

Create a `.env` file inside the `backend` folder:

```env
MONGO_URL=your_mongodb_atlas_connection_string
```

**4. Build and start both services**

```bash
docker compose up --build -d
```

**5. Check running containers**

```bash
docker compose ps
```

**6. View application logs**

```bash
docker compose logs
```

**7. Stop the application**

```bash
docker compose down
```

### Access the Application

Open the following URL in your browser:

```text
http://localhost:3000
```

## 🐋 Docker Hub Images

The application images are published on Docker Hub.

| Service | Docker Hub Repository |
|---|---|
| Backend | `Ratu0713/docker-task-backend` |
| Frontend | `<YOUR_FRONTEND_DOCKERHUB_REPOSITORY>` |

Pull the images:

```bash
docker pull Ratu0713/docker-task-backend:latest
docker pull <YOUR_FRONTEND_DOCKERHUB_REPOSITORY>:latest
```

## 🔐 Environment Variables

The backend requires the following environment variable:

| Variable | Description |
|---|---|
| `MONGO_URL` | MongoDB Atlas connection string |

**Important:** Never commit your `.env` file or expose database credentials on GitHub.

## 📌 Git Ignore Configuration

The `.gitignore` file excludes unnecessary files and sensitive information:

```gitignore
node_modules/
.env
.vscode/
__pycache__/
*.pyc
venv/
.venv/
```

Separate `.dockerignore` files are maintained in the frontend and backend folders to exclude unnecessary files from Docker build contexts.

## 👨‍💻 Author

**Ratul Sarkar**

B.Tech – Computer Science and Engineering

GitHub: [Ratu0713](https://github.com/Ratu0713)

---

⭐ If you find this project useful, feel free to explore the repository!