import { createShortUrlService, getShortUrlService } from "../services/shortUrl.sevices.js";

export const createShortUrl = async (req, res) => {
    try {
        const url = req.body.url;
        const shortUrl = await createShortUrlService(url, req);
        res.send(process.env.App_URL + shortUrl);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

export const getShortUrl = async (req, res) => {
    try {
        const id = req.params.id;
        const shortUrlModel = await getShortUrlService(id);
        res.redirect(process.env.App_URL + shortUrlModel);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
};
