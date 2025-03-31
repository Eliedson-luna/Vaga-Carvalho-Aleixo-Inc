import { fetchData } from "./fetchKeyword";

function switchIconDisplay() {
    const searchIcon = document.getElementById('searchIcon');
    const loader = document.getElementById('loader');


    const searchIconDisplay = searchIcon.style.display;
    const loaderDisplay = loader.style.display;

    searchIcon.style.display = loaderDisplay;
    loader.style.display = searchIconDisplay;
}

document.getElementById("search-form").addEventListener("submit", async function (event) {
    event.preventDefault();
    switchIconDisplay();
    try {
        const keyword = document.getElementById('search-input').value.trim();

        const products = await fetchData(keyword);

        const producList = document.getElementById('productList');

        productList.innerHTML = "";

        products.forEach((product) => {
            const li = document.createElement("li");

            li.className = "product";

            li.innerHTML = `
                    <div class="product-box">
                        <div class="product-img-box">
                            <img src=${product.imgSrc} alt=${product.title}>
                        </div>
                        <div class="product-info-box"> 
                            <span><h2>${product.title}</h2></span>
                            <div class="product-specs">
                            <i class="fa fa-star" style="color: #ff814b;"><span>${product.rating}</span></i>
                            <span>${product.reviews}</span>
                            </div>
                        </div>
                    </div>
            `;

            producList.appendChild(li)
        })

        const header = document.querySelector('header')
        header.style.height = "10vh"

    } catch (err) {
        console.log(err.message)
    } finally {
        switchIconDisplay()
    }
})
