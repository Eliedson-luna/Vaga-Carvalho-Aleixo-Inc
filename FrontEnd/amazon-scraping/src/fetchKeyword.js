export async function fetchData(keyword) {
    const url = `http://localhost:3000/api/scrape/?keyword=${encodeURIComponent(keyword)}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error("Erro na requisição");

        const data = await response.json();
        return data
    } catch (error) {
        console.error("Erro:", error.message);
    }
}

