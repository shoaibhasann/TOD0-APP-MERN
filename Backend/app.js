import cookieParser from "cookie-parser";
import express from "express";
import userRoutes from "./routes/user.route.js"
import taskRoutes from "./routes/task.route.js"

const app = express();

app.use(express.json());

app.use(cookieParser());

// Handling user routes
app.use('/api/v1/user', userRoutes);

// Handling task routes
app.use('/api/v1/task', taskRoutes);

app.use('*', (req,res) => {
    res.status(404).send("OOPS! Page not found.");
});

export default app;