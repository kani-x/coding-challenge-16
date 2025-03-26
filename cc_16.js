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