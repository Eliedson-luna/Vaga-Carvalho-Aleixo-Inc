import axios from "axios";
import { JSDOM } from 'jsdom';

export const searchParam = async (req: any, res: any) => {
    try {
        const { keyword } = req.query;

        if (!keyword || typeof keyword !== "string") {
            return res.status(400).json({ error: "Parâmetro 'keyword' é obrigatório" });
        }

        console.log(`Looking for: ${keyword}`);

        const response = await axios.get(`https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`);

        const dom = new JSDOM(response.data);
        const document = dom.window.document;
        const products: any[] = [];

        document.querySelectorAll(".s-main-slot .s-result-item").forEach((item) => {
            const title = item.querySelector("h2 a span")?.textContent || "Sem título";
            const rating = item.querySelector(".a-icon-alt")?.textContent || "Sem avaliação";
            const reviews = item.querySelector(".s-link-style .a-size-small")?.textContent || "0";
            

            products.push({ title, rating, reviews });
        });

        //res.json(response.data);

        return res.status(200).json(products);

    } catch (err: unknown) {
        if (err instanceof Error) {
            res.send(`An error occurred\n${err.message}`).status(500)
        } else {
            res.send(`An unknown error occurred`).status(500)
        }
    }
}
