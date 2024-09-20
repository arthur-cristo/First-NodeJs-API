# First-NodeJs-API

A Node.js API for managing users with CRUD operations, using a MySQL database running in Docker.

## Getting Started

### Prerequisites

- Docker and Docker Compose installed
- Node.js and npm installed

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arthur-cristo/First-NodeJs-API.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the MySQL Docker container:**

   ```bash
   docker-compose up
   ```

4. **Start the API server:**

   ```bash
   npm start
   ```

## Configuration

Create a `.env` file in the root directory with the following content:

```env
PORT=3030
DB_NAME=first_node_api
DB_HOST=localhost
DB_PORT=3306
DB_USER=user
DB_PASSWORD=123
```

**Note:** Update `DB_HOST`, `DB_PORT`, `DB_USER`, and `DB_PASSWORD` based on your Docker MySQL container settings.

## API Endpoints

- **GET** `/users`  
  Retrieves all users.

- **GET** `/users/:id`  
  Retrieves a single user by ID.

- **POST** `/users`  
  Creates a new user.

- **PUT** `/users/:id`  
  Updates an existing user by ID.

- **DELETE** `/users/:id`  
  Deletes a user by ID.

## Technologies

- **JavaScript** with **Node.js**
- **Express** for building the API
- **Sequelize** as the ORM framework
- **MySQL** running in a Docker container

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/arthur-cristo/First-NodeJs-API?tab=MIT-1-ov-file#readme) file for details.
