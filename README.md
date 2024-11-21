# Product Listing with Infinite Scroll and Search

This project implements an infinite scrolling list of products fetched from the [dummyjson API](https://dummyjson.com/docs/products). It also includes a search feature to find products by name. The design is kept minimal, focusing on functionality.

## Features

- **Infinite Scroll**: Fetches the next 20 products each time the user scrolls to the bottom of the list.
- **Search Products**: Allows users to search for products by name using the `/products/search?q=<query>` endpoint and updates the product list.
- **Product Information**: Displays relevant details about the product, such as name, price, and image.
- **Product Data**: The fetched data is properly deserialized for use in the app.

## Getting Started

Follow the instructions below to set up and run this project locally.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/TamHM1410/BURNING-BROS-assignment.git
cd BURNING-BROS-assignment
