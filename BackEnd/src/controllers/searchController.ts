import axios from "axios";
import { scrapProducts } from "../utils/jsdom/indes";

export const searchParam = async (req: any, res: any) => {
    try {
        const { keyword } = req.query;

        if (!keyword || typeof keyword !== "string") {
            return res.status(400).json({ error: "Parameter 'keyword' is required" });
        }
        console.log(`looking for ${keyword}`)
        const response = await axios.get(`https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`);

        const scrapedProducts = scrapProducts(response);

        return res.status(200).json(scrapedProducts);

    } catch (err: unknown) {
        if (err instanceof Error) {
            res.send(`An error occurred\n${err.message}`).status(500)
        } else {
            res.send(`An unknown error occurred`).status(500)
        }
    }
}
