import 'dotenv/config';
import express from 'express';
import cors from "cors";
import connectMongoDB from './models/connect.mjs';
import clubRouter from "./routes/clubsRoutes.mjs"
import courseRouter from './routes/coursesRoutes.mjs';
import roundRouter from './routes/roundsRouters.mjs';

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/clubs", clubRouter)
app.use("/courses", courseRouter)
app.use("/rounds", roundRouter)

// GLOBAL ERROR HANDLER 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, async () => {
    await connectMongoDB();
    console.log(`Server listening on port: ${PORT}`)
});

app.post("/", (req, res) => {
    const { email, password } = req.body;
    if (email !== process.env.EMAIL || password !== process.env.PASSWORD){
        res.status(400).json("Enter Correct Email and Password")
    } 
    res.status(201).send("Login successful");
})




