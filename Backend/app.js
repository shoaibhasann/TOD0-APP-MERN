import express from "express";

const app = express();

app.use(express.json());


app.use('/backend', (req,res) => {
    res.send('Server running perfectly');
});

app.use('*', (req,res) => {
    res.status(404).send("OOPS! Page not found.");
});

export default app;