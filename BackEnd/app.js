import express from "express";
import { nanoid } from "nanoid";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/create", (req, res) => {
    const id = nanoid(6);
    res.send(id);
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});