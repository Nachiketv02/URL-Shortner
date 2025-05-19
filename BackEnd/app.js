import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./src/config/db.config.js";
import ShortUrlModel from "./src/models/shortUrl.model.js";
import shortUrlRoute from "./src/routes/shortUrl.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", shortUrlRoute);

app.get("/:id", async (req, res) => {
    const id = req.params.id;
    const shortUrlModel = await ShortUrlModel.findOne({ shortUrl: id });
    if (shortUrlModel) {
        shortUrlModel.clicks += 1;
        shortUrlModel.save();
        res.redirect(shortUrlModel.fullUrl);
    } else {
        res.status(404).send("URL not found");
    }
});

app.listen(3000, () => {
    connectDB();
    console.log(`Server is running on http://localhost:3000`);
});
