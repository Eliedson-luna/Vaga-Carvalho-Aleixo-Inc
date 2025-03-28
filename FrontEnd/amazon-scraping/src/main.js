import { fetchData } from "./fetchKeyword";

document.getElementById("search-form").addEventListener("submit", async function (event) {
    event.preventDefault();
    const keyword = document.getElementById('search-input').value.trim();
    try {
        const response = await fetchData(keyword);
        console.log(response)
    } catch (err) {
        console.log(err.message)
    }
})