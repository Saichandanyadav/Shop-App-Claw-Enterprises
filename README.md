## **Claw Enterprises - Specific Product Details**

### Overview

The **Claw Enterprises - Specific Product Details** app allows users to view detailed information about specific products, including similar items. The application features responsive design and handles various states, including loading and error conditions.

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Success](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-success-sm-output-v0.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Failure](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-error-sm-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Success](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-success-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Failure](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-error-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities:

- When an unauthenticated user tries to access the Product Item Details Route, redirect to the Login Route.
- When an authenticated user clicks on a product in the Products Route, navigate to the Product Item Details route.
- When an authenticated user accesses the Product Item Details Route:
  - Make an HTTP GET request to **productDetailsApiUrl** with `jwt_token` in the Cookies and product `id` as the path parameter.
  - Display a **loader** while fetching data.
  - After fetching data successfully, show the product details and similar products received in the response.
  - Initialize the product quantity to `1`.
  - Allow increment and decrement of the product quantity using plus and minus icons.
  - If the HTTP GET request fails, display the [Failure view](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-error-lg-output.png).
    - On clicking the **Continue Shopping** button in the [Failure view](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-error-lg-output.png), redirect to the Products Route.

</details>

<details>
<summary>API Requests & Responses</summary>
<br/>

**productDetailsApiUrl**

#### API: `https://apis.ccbp.in/products/:id`

#### Example: `http://localhost:3000/products/16`

#### Method: `GET`

#### Description:

Returns product details.

#### Sample Success Response

```json
{
  "id": 16,
  "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png",
  "title": "Embroidered Net Gown",
  "price": 62990,
  "description": "An Embroidered Net Gown is the clothing worn by a bride during a wedding ceremony. It enhances your beauty wearing this vibrant, gorgeous, and beautiful Wedding Gown. Find your dream wedding dress today. It features foldable, one hoop steel, two layers of tulles, and is elastic in the waist part.",
  "brand": "Manyavar",
  "total_reviews": 879,
  "rating": 3,
  "availability": "In Stock",
  "similar_products": [
    {
      "id": 1,
      "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
      "title": "Wide Bowknot Hat",
      "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
      "price": 288,
      "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight.",
      "brand": "MAJIK",
      "total_reviews": 245,
      "rating": 3.6,
      "availability": "In Stock"
    }
  ]
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Product Not Found"
}
```

</details>

<details>
<summary>Components Structure</summary>
<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-specific-product-details-component-breakdown-structure.png" alt="component breakdown structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/ProductCard/index.js`
- `src/components/ProductCard/index.css`
- `src/components/ProductItemDetails/index.js`
- `src/components/ProductItemDetails/index.css`
- `src/components/SimilarProductItem/index.js`
- `src/components/SimilarProductItem/index.css`

</details>

### Quick Tips

<details close>
<summary>Click to view</summary>
<br>

- The `line-height` CSS property sets the height of a line box. It's commonly used to set the distance between lines of text.

  ```
  line-height: 1.5;
  ```

    <br/>
    <img src="https://assets.ccbp.in/frontend/react-js/line-height-img.png" alt="cursor pointer" style="width:90%; max-width: 600px;"/>

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `Home` Route should consist of `/` in the URL path
- `Login` Route should consist of `/login` in the URL path
- `Products` Route should consist of `/products` in the URL path
- `Product Item Details` Route should consist of `/products/:id` in the URL path
- `Cart` Route should consist of `/cart` in the URL path
- Do not use `BrowserRouter` in `App.js` as it is already included in `index.js`

- Prime User credentials:

  ```
   username: rahul
   password: rahul@2021
  ```

- Non-Prime User credentials:

  ```
   username: raja
   password: raja@2021
  ```

- Wrap the Loader component with an HTML container element and add the `data-testid` attribute value as `loader` to it

  ```jsx
  <div data-testid="loader">
    <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
  </div>
  ```

- The product image in Product Item Details Route should have the alt as **product**
- The similar product image in Product Item Details Route should have the alt as **similar product {product title}**

  ```example
  similar product Wide Bowknot Hat
  ```

- Use `BsPlusSquare`, `BsDashSquare` icons from react-icons for **plus** and **minus** buttons in ProductItemDetails Route
- The Product Item Details Route should include two HTML button elements with `data-testid` attribute values as **plus** and **minus** respectively

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/star-img.png](https://assets.ccbp.in/frontend/react-js/star-img.png) alt should be **star**
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png) alt should be **error view**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #12022f; width: 150px; padding: 10px; color: white">Hex: #12022f</div>
<div style="background-color: #616e7c; width: 150px; padding: 10px; color: white">Hex: #616e7c</div>
<div style="background-color: #171f46; width: 150px; padding: 10px; color: white">Hex: #171f46</div>
<div style="background-color: #cbced2; width: 150px; padding: 10px; color: black">Hex: #cbced2</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #3b82f6; width: 150px; padding: 10px; color: white">Hex: #3b82f6</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
