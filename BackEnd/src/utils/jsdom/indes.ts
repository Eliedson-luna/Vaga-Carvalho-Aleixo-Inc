import type { AxiosResponse } from 'axios';
import { JSDOM } from 'jsdom';


export const scrapProducts = (response: AxiosResponse) => {
    try {

        if (!response.data) { throw new Error('No data found on response') }

        const dom = new JSDOM(response.data);
        const document = dom.window.document;
        const products: any[] = [];
        document.querySelectorAll(".puis-card-container").forEach((item) => {

            const title = item.querySelector("a h2 span")?.textContent || "not found";
            const rating = item.querySelector(".a-icon-alt")?.textContent || "not found";
            const reviews = item.querySelector(".a-size-small .s-underline-text")?.ariaLabel || "not found";
            const imgSrc = item.querySelector("img")?.src || 'not found'


            products.push({ title, rating, reviews, imgSrc });
        });
        return products
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw new Error(`Error: ${err.message}`)
        } else {
            throw new Error('Unknown Error')
        }
    }
}