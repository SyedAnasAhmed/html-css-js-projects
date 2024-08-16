// // console.log("helloworld");





// var carts;
// var url = 'https://dummyjson.com/carts';

// GetCartsFromURL(url).then(data => {
//     carts = data.carts;
//     appendCards();
// }).catch(error => {
//     console.error('Fetch error:', error);   
// });

// function appendCards() {
    
//   var container = document.getElementById('cartsContainer');
  
//   for (let i = 0; i < carts.length; i++) {
//     const product = carts[i];
//     const cardHTML = `
//       <div class="col-md-3">
//         <div class="card" style="width: 18rem; ">
//           <img src="${product.thumbnail}" class="card-img-top product_img" style="object-fit: contain;" alt="${product.title}">
//           <div class="card-body">
//             <h5 class="card-title">${product.title}</h5>
//             <p class="card-text">${product.description}</p>
//             <p class="card-text">Price: $${product.price}</p>
//             <p class="card-text">Discount: ${product.discountPercentage}%</p>
//             <p class="card-text">Rating: ${product.rating}</p>
//             <p class="card-text">Stock: ${product.stock}</p>
//             <p class="card-text">Brand: ${product.brand}</p>
//             <p class="card-text">Category: ${product.category}</p>
//             <a href="details.html" class="btn btn-primary">Buy Now</a>
//           </div>
//         </div>
//       </div>
//     `;
//     container.innerHTML += cardHTML;
//   }
// }

// function GetProductsFromURL(url) {
    
//     return fetch(url).then(response => {
        
//         if (!response.ok) {
//             throw new Error("Something Went Wrong");
//         }
//         return response.json();
//     });
// }


const url = 'https://dummyjson.com/carts';

        // Reference to the container where data will be rendered
        const dataContainer = document.getElementById('dataContainer');

        // Fetch data from the URL
        fetch(url)
            .then(response => {
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse the response JSON
                return response.json();
            })
            .then(data => {
                // Process and render the data
                const html = data.map(post => {
                    return `
                        <div>
                            <h2>${post.title}</h2>
                            <p>${post.body}</p>
                        </div>
                    `;
                }).join('');

                // Append the HTML to the container
                dataContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });






