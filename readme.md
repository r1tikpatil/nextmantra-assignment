# Blog Application

This project is a simple blog application built with **Next.js** (using the App Router) for the frontend and **Strapi v5** as the headless CMS. The application allows users to create, read, and manage blog posts dynamically without needing to redeploy the frontend.

## Technologies Used

- [Next.js](https://nextjs.org) - React framework for building server-side rendered applications.
- [Strapi](https://strapi.io) - Headless CMS for managing content.
- [Axios](https://axios-http.com/) - Promise-based HTTP client for making API requests.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [Yarn](https://yarnpkg.com/) (optional but recommended)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/r1tikpatil/nextmantra-assignment
    cd blog-app
    ```

2.  **Install dependencies for both frontend and backend:**

    ```bash
    cd client
    npm install
    ```

    ```bashD
    cd server
    npm install
    ```

### Configuration

1. **Set Strapi environment variables**

    Inside the server folder, create a .env file with the following:

    ```bash
    # Server
    HOST=0.0.0.0
    PORT=1337

    # Secrets
    APP_KEYS=RClLOQP8s+QkSH0z8ZtDAw==,Ds+Ftd+2zCdWWnwWTJZivg==,Zv5wDLIAp9HKLwTvm2+W/A==,naDRN/FD/IZFD7Qq0W58Lw==
    API_TOKEN_SALT=eZnXyeYEZJY3/XgC7gpj1Q==
    ADMIN_JWT_SECRET=VMLg01j/AQCF3x8riaUifA==
    TRANSFER_TOKEN_SALT=bl8q/I4mfXK7LERTjGgLng==
    ENCRYPTION_KEY=gHrvkaVV7VpizV8dAwqsjQ==

    # Database
    DATABASE_CLIENT=sqlite
    DATABASE_FILENAME=.tmp/data.db
    DATABASE_HOST=
    DATABASE_PORT=
    DATABASE_NAME=
    DATABASE_USERNAME=
    DATABASE_PASSWORD=
    DATABASE_SSL=false

    JWT_SECRET=ZJO6vDOEZ332g/xdZQJsHA==
    ```

2. **Set frontend environment variables**

   Inside the my-blog folder, create a .env.local file:

   ```bash
    STRAPI_API_URL=http://localhost:1337/api
   ```

## Running the Application

1. **Start the Strapi backend:**

   ```bash
    cd server
    npm run develop
   ```

2. **Start the Next.js frontend:**

   ```bash
   cd client
   npm run dev
   ```

3. **Open your browser and navigate to:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Strapi Admin: [http://localhost:1337/admin](http://localhost:1337/admin)

## Usage

- In the Strapi admin panel, add new blog posts or modify existing ones.
- View the blog posts on the homepage of the Next.js application.
- Click on any blog title to view the full post.

## API Endpoints

- **Get all blogs**: `GET /blogs?populate=*`
- **Get a single blog by slug**: `GET /blogs?filters[slug][$eq]={slug}&populate=*`
