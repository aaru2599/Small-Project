let productsData;

function bodyload() {
    const data = fetch("https://fakestoreapi.com/products");
    data
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            productsData = response;
            renderProducts(response);
        });
}

function renderProducts(products) {
    const main = document.querySelector("main");
    main.innerHTML = ""; // Clear previous products

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        // creating div element 
        var card = document.createElement("div");
        card.className = "card p-2 m-2 ";
        card.style.width = "300px";
        // elements inside the card
        card.innerHTML = `

            <div>
                <img class="imgTag" src=${product.image} class="card-img-top" height="250" width="100%"> 
                <span class="ratingClass"><span><i class="bi bi-star-fill"></i></span>${product.rating.rate} [${product.rating.count}]</span>
            </div>
            <div class="card-header">
                <h3 class="product-title">${product.title}</h3>
            </div>
            <div class="card-body">
                <h4>Description</h4>
                <div class="text">${product.description}</div>  
                <dl class="d-flex justify-content-between">
                    <dt>Product Id</dt>
                    <dd>${product.id}</dd>
                </dl>
                <dl class="d-flex justify-content-between">
                    <dt>Product Price</dt>
                    <dd>$${product.price}</dd>
                </dl>
                <dl class="d-flex justify-content-between">
                    <dt>Product Category</dt>
                    <dd>${product.category}</dd>
                </dl>
            </div>
        `;
        main.appendChild(card);
    }
}
// function for search the product by name
function searchProducts() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredProducts = productsData.filter((product) => product.title.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
}