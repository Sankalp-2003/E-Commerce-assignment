# E-Commerce Product Dashboard

A dynamic e-commerce application featuring a product dashboard with powerful functionalities like search, filter, product details, cart management, and mock checkout.

## About

This project implements the following features:

- **Home Page**: Includes a search bar and a filter dropdown for easy product navigation.
- **Product Details Page**: Displays detailed product information along with an "Add to Cart" button.
- **Shopping Cart**:
  - Displays added items, quantity, and total price.
  - Allows users to update item quantity and remove items from the cart.
  - Includes a button to simulate checkout (mock functionality).
- **State Management**:
  - Used `useContext` to manage and share product data across components.
  - Utilized `Redux` to handle cart state for efficient data management.
- **Routing**: Implemented multiple pages using `react-router-dom` for smooth navigation.
- **Styling**: Enhanced the UI with SCSS for modular and reusable styles.

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Sankalp-2003/E-Commerce-assignment.git
   cd ecommerce-product-dashboard

   ```

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

## Technologies Used

- Frontend: React.js, SCSS
- State Management: Redux Toolkit, useContext
- Routing: React Router
- Icons: React Icons
- Loader: React Loader Spinner

## Project Structure

src/
├── components/
│ ├── Navbar.jsx
│ ├── ProductCard.jsx
├── context/
│ ├── Context.jsx
│ ├── ProductProvider.jsx
├── pages/
│ ├── Cart.jsx
│ ├── Checkout.jsx
│ ├── Home.jsx
│ ├── OrderConfirm.jsx
│ ├── ProductDetails.jsx
│ ├── ProductPage.jsx
├── redux/
│ ├── store.js
│ ├── slice/
│ ├── cartSlice.js
├── styles/
│ ├── cart.scss
│ ├── checkout.scss
│ ├── home.scss
│ ├── orderConfirm.scss
│ ├── productDetails.scss
│ ├── productPage.scss
├── utils/
│ ├── Api.jsx
├── App.jsx
├── main.jsx

## Deployed Link

- https://sankalp2003-ecommerce.netlify.app/
