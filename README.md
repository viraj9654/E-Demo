# Overview

This project is a data-driven application built using React.js for the frontend and styled with Tailwind CSS. The application allows users to search and filter products based on various criteria, providing a seamless user experience.

## Technologies Used

Frontend Framework: React.js
Styling: Tailwind CSS
API Testing: Postman

## Data Analysis

Upon starting the project, I analyzed a lengthy dataset to identify key elements essential for functionality. This initial step was crucial in understanding the structure and content of the data.

Implementation Details

## Methods and Hooks

1\. React Hooks:
   - Used for fetching data with useEffect.
   - Managed component state with useState.

2\. Data Fetching:
   - APIs were called using useEffect to fetch data asynchronously.

3\. Navigation:
   - Utilized useNavigate for handling route changes within the application.

4\. Data Manipulation:
   - Employed map, filter, and split functions to process and display data efficiently.
   - Utilized length to determine the size of data arrays.

## Functionality

1\. Product Search:
   - Users can enter text in the input bar to retrieve a list of products.

2\. Product Detail Page (PDP):
   - Numeric values or codes redirect users to the corresponding product description page.

3\. Routing:
   - Implemented routing for seamless navigation between different components and pages.

4\. Dropdown Categories:
   - Categories are organized in a dropdown list for easy selection.

##  Sorting and Filtering:
   - A filter button allows users to:
     - Sort products alphabetically (A-Z, Z-A).
     - Sort products by nutrient grades (Asc-des).

## Product Card Component

Each product card displays the following information:
- Product Image
- Product Name
- Nutrition Grade
- Product Category
- Button: "Check Ingredients" (displays the full list of ingredients).

## User Experience

- Implemented loading effects using skeleton components for better user experience while data is being fetched.
- Organized code into specific components for improved readability and maintainability.

## Estimated Time to Completion

- Total estimated time: 16-20 (Approx) hours (Monday to Tuesday).

 ## Conclusion

This application serves as a robust platform for users to explore products, with an intuitive interface and efficient data handling. Future enhancements can include additional filtering options, improved state management, and further optimization of performance.
