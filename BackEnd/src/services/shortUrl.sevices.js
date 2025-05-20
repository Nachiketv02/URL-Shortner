import { generateNanoId } from "../utils/generateNanoId.js";
import ShortUrlModel from "../models/shortUrl.model.js";

export const createShortUrlService = async (url, req) => {
    const shortUrl = generateNanoId(7);
    const newShortUrl = new ShortUrlModel({
        fullUrl: url,
        shortUrl: shortUrl
    });
    if(req.user){
        newShortUrl.userId = req.user._id;
    }
    await newShortUrl.save();
    return shortUrl;
};

export const getShortUrlService = async (id) => {
    const shortUrlModel = await ShortUrlModel.findOne({ shortUrl: id });
    if (shortUrlModel) {
        shortUrlModel.clicks += 1;
        shortUrlModel.save();
        return shortUrlModel.fullUrl;
    } else {
        return "URL not found";
    }
};
