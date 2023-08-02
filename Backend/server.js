import dotenv from "dotenv";
import app from "./app.js";
import connectDatabase from "./config/db.js";
dotenv.config(); // load enviroment variables

const port = process.env.PORT || 8001;
const mode = process.env.NODE_ENV

// Start the server
app.listen(port, async () => {
  await connectDatabase();
  console.log(`Server is running on http://localhost:${port} in ${mode} mode`);
});
