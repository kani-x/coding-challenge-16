// Task 2: "Implement fetchProductsThen using .then() and .catch()"

function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Products fetched with .then():');
        data.forEach((product) => {
          console.log(product.fields.name);
        });
      })
      .catch((error) => {
        console.error('Error fetching products with .then():', error);
      });
  }

// Task 3 "Add fetchProductsAsync using async/await and try/catch"

async function fetchProductsAsync() {
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      displayProducts(data);
    } catch (error) {
      handleError(error);
    }
  }
  
  function handleError(error) {
    console.error('An error occurred:', error.message);
  }

// Task 4: "Display products in the DOM with name, price, and image"

function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clear previous content
  
    // Limit to first 5 products
    const productsToShow = products.slice(0, 5);
  
    productsToShow.forEach((product) => {
      const productElement = document.createElement('div');
      productElement.className = 'product';
      
      productElement.innerHTML = `
        <img src="${product.fields.image[0].url}" alt="${product.fields.name}" />
        <h2>${product.fields.name}</h2>
        <p>$${(product.fields.price / 100).toFixed(2)}</p>
      `;
      
      container.appendChild(productElement);
    });
  }

// Task 5: "Add reusable handleError function"

function handleError(error) {
    console.error('An error occurred:', error.message);
    const container = document.getElementById('product-container');
    container.innerHTML = `<p class="error">Failed to load products: ${error.message}</p>`;
  }

//  Task 6: "Trigger both fetch methods at script load"

// Call both fetch methods when script loads
fetchProductsThen();
fetchProductsAsync();
