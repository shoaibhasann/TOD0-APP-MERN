# TaskNinja Backend

TaskNinja Backend is the backend component of the TaskNinja application, built using Express.js, MongoDB, and other technologies. It provides the necessary API endpoints for user authentication and task management.

## API Endpoints

### User Routes

- `POST /api/user/`: Register a new user.
- `POST /api/user/login`: Login a user.
- `GET /api/user/`: Get the profile of the logged-in user.
- `GET /api/user/logout`: Log out the user.

### Task Routes

- `POST /api/task/`: Create a new task.
- `GET /api/task/`: Get all tasks of the logged-in user.
- `PUT /api/task/:id`: Update a task by ID.
- `DELETE /api/task/:id`: Delete a task by ID.

## Technologies Used

- Node.js
- Express.js
- MongoDB and Mongoose
- Bcrypt for password hashing
- JSON Web Tokens (JWT) for user authentication
- Cookie Parser for handling cookies

## Getting Started

1. Clone the repository:


git clone https://github.com/shoaibhasann/TaskNinja-Backend.git


2. Navigate to the project directory:

cd Backend

3. Install dependencies:

npm install

4. Configure the environment variables (e.g., MongoDB URI, JWT secret) in a `.env` file.

5. Start the server:

npm start


## Contributing

Contributions are welcome! If you find a bug or have a feature suggestion, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For inquiries or support, please contact:
- Your Name: your@email.com
- Project Repository:[ [GitHub(https://github.com/shoaibhasann/TaskNinja-Backend)https://github.com/shoaibhasann/TaskNinja-Backend
