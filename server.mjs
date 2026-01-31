import 'dotenv/config';
import express from 'express';
import connectMongoDB from './models/connect.mjs';
import clubRouter from "./routes/clubsRoutes.mjs"
import courseRouter from './routes/courseRoutes.mjs';

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/clubs", clubRouter)
app.use("/courses", courseRouter)

// GLOBAL ERROR HANDLER 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, async () => {
    await connectMongoDB();
    console.log(`Server listening on port: ${PORT}`)
});

app.get("/", (req, res) => {
    res.send("Welcome to the Golf Tracker API")
})




