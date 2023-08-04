import cookieParser from "cookie-parser";
import express from "express";
import userRoutes from "./routes/user.route.js"
import taskRoutes from "./routes/task.route.js"
import cors from "cors";

const app = express();

// Middleware for parse body request
app.use(express.json());

app.use(cookieParser());

// Middleware for cross origin request
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true
}));

// Handling user routes
app.use('/api/v1/user', userRoutes);

// Handling task routes
app.use('/api/v1/task', taskRoutes);

// Handling not defined routes
app.use('*', (req,res) => {
    res.status(404).send("OOPS! Page not found.");
});


export default app;