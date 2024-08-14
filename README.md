# Menu Management API

This project is a Node.js backend server for managing a menu system, with categories, subcategories, and items. The application provides RESTful APIs for creating, retrieving, updating, and searching menu components. You can demo and interact with the application using Postman.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Project Setup](#project-setup)
  - [Environment Variables](#environment-variables)
  - [Running the Server](#running-the-server)
  - [API Endpoints](#api-endpoints)
- [API Documentation](#api-documentation)
  - [Category Endpoints](#category-endpoints)
  - [SubCategory Endpoints](#subcategory-endpoints)
  - [Item Endpoints](#item-endpoints)
  - [Search Items](#search-items)

## Features

- **Create, Retrieve, Update** categories, subcategories, and items.
- **Search** items by name.
- **Tax Calculation** based on tax applicability and tax type.
- **JSON-based API** for easy integration with front-end applications.

## Installation

Follow the steps below to set up the project on your local machine:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **MongoDB**: Ensure you have MongoDB installed. You can download it from [here](https://www.mongodb.com/try/download/community).

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/singhJasvinder101/assign.git
   cd assign
   ```

2. **Install Dependencies:**

   Install the necessary Node.js packages using npm:

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory and add the following environment variables:

   ```
   PORT=5000
   ```

   - `PORT`: The port on which the server will run (default is 5000).

## Usage

### Project Setup

After installing the dependencies and configuring environment variables, you can run the server:

### Running the Server

To start the server in development mode:

```bash
npm run dev
```

The server will start on the port specified in the `.env` file (default is 5000). You can access the API at `http://localhost:5000`.

### API Endpoints

The API is divided into several endpoints based on the menu structure: Category, SubCategory, and Item. These endpoints allow you to create, retrieve, update, and search for menu items.

## API Documentation

### Category Endpoints

- **Create Category**
  - **Endpoint:** `POST /api/category`
  - **Description:** Creates a new category.
  - **Body Parameters:**
    - `name` (String): Name of the category.
    - `image` (URL): Image URL for the category.
    - `description` (String): Description of the category.
    - `taxApplicability` (Boolean): Whether tax is applicable.
    - `tax` (Number): Tax rate if applicable.
    - `taxType` (String): Tax type, either "percentage" or "fixed".
  
- **Get All Categories**
  - **Endpoint:** `GET /api/categories`
  - **Description:** Retrieves all categories.

- **Get Category by ID**
  - **Endpoint:** `GET /api/category/:id`
  - **Description:** Retrieves a category by its ID.

- **Edit Category**
  - **Endpoint:** `PUT /api/category/:id`
  - **Description:** Updates a category by its ID.
  - **Body Parameters:** Same as the parameters for creating a category.

### SubCategory Endpoints

- **Create SubCategory**
  - **Endpoint:** `POST /api/subcategory`
  - **Description:** Creates a new subcategory under a category.
  - **Body Parameters:**
    - `name` (String): Name of the subcategory.
    - `image` (URL): Image URL for the subcategory.
    - `description` (String): Description of the subcategory.
    - `taxApplicability` (Boolean): Whether tax is applicable.
    - `tax` (Number): Tax rate if applicable.
    - `categoryId` (ObjectId): ID of the parent category.

- **Get All SubCategories**
  - **Endpoint:** `GET /api/subcategories`
  - **Description:** Retrieves all subcategories.

- **Get SubCategory by ID**
  - **Endpoint:** `GET /api/subcategory/:id`
  - **Description:** Retrieves a subcategory by its ID.

- **Edit SubCategory**
  - **Endpoint:** `PUT /api/subcategory/:id`
  - **Description:** Updates a subcategory by its ID.
  - **Body Parameters:** Same as the parameters for creating a subcategory.

### Item Endpoints

- **Create Item**
  - **Endpoint:** `POST /api/item`
  - **Description:** Creates a new item under a subcategory or category.
  - **Body Parameters:**
    - `name` (String): Name of the item.
    - `image` (URL): Image URL for the item.
    - `description` (String): Description of the item.
    - `taxApplicability` (Boolean): Whether tax is applicable.
    - `tax` (Number): Tax rate if applicable.
    - `baseAmount` (Number): Base price of the item.
    - `discount` (Number): Discount on the item.
    - `totalAmount` (Number): Final price after discount (Base - Discount).
    - `categoryId` (ObjectId): ID of the parent category.
    - `subCategoryId` (ObjectId): ID of the parent subcategory.

- **Get All Items**
  - **Endpoint:** `GET /api/items`
  - **Description:** Retrieves all items.

- **Get Item by ID**
  - **Endpoint:** `GET /api/item/:id`
  - **Description:** Retrieves an item by its ID.

- **Edit Item**
  - **Endpoint:** `PUT /api/item/:id`
  - **Description:** Updates an item by its ID.
  - **Body Parameters:** Same as the parameters for creating an item.

### Search Items

- **Search Items by Name**
  - **Endpoint:** `GET /api/items/search`
  - **Description:** Searches items by their name.
  - **Query Parameters:**
    - `name` (String): Name of the item to search.

