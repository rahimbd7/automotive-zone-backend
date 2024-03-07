# Automotive Zone Backend

Welcome to the backend of Automotive Zone, the Automotive Product Management System! This repository contains the backend code for handling user authentication, brand/product management, and cart operations.

![Automotive Zone Backend](https://i.ibb.co/Bfs6P0L/14416.gif)

## APIs

### Users Related APIs

- `POST https://automotive-zone-backend.vercel.app/users/add`: Register a new user.

### Brand Related APIs

- `POST https://automotive-zone-backend.vercel.app/categories`: Add a new brand.
- `GET https://automotive-zone-backend.vercel.app/categories`: Get all brands.
- `GET https://automotive-zone-backend.vercel.app/categories/:name`: Get products of a specific brand.

### Products Related APIs

- `GET https://automotive-zone-backend.vercel.app/products`: Get all products.
- `GET https://automotive-zone-backend.vercel.app/products/details/:id`: Get details of a specific product.
- `POST https://automotive-zone-backend.vercel.app/products/add`: Add a new product.
- `DELETE https://automotive-zone-backend.vercel.app/products/delete/:id`: Delete a product.
- `PUT https://automotive-zone-backend.vercel.app/products/update/:id`: Update a product.

### Carts Related APIs

- `GET https://automotive-zone-backend.vercel.app/carts/:uid`: Get cart items of a user.
- `POST https://automotive-zone-backend.vercel.app/carts/add`: Add an item to the cart.
- `DELETE https://automotive-zone-backend.vercel.app/carts/delete/:id`: Remove an item from the cart.

## Deployment

The backend is deployed to [Automotive Zone Backend](https://automotive-zone-backend.vercel.app/).
