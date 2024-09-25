// import React, { useState, useEffect } from 'react';

// import Skeleton from './Skeleton'; // Import your loading skeleton component

// const MainComponent = () => {
//   const [products, setProducts] = useState([]);
//   const [sortOrder, setSortOrder] = useState(null); // Use null for no sorting
//   const [searchTerm, setSearchTerm] = useState('');
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('https://world.openfoodfacts.org/products.json?page=1&page_size=20');
//         if (!response.ok) throw new Error('Network response was not ok');
//         const result = await response.json();
//         setProducts(result.products);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   const handleSortChange = (order) => {
//     setSortOrder(order);
//   };

//   const getSortedProducts = (products) => {
//     if (sortOrder === 'asc') {
//       return [...products].sort((a, b) => {
//         const nameA = a.product_name?.toLowerCase() || '';
//         const nameB = b.product_name?.toLowerCase() || '';
//         return nameA.localeCompare(nameB);
//       });
//     } else if (sortOrder === 'desc') {
//       return [...products].sort((a, b) => {
//         const nameA = a.product_name?.toLowerCase() || '';
//         const nameB = b.product_name?.toLowerCase() || '';
//         return nameB.localeCompare(nameA);
//       });
//     }
//     return products; // Return unsorted products if no sortOrder is set
//   };

//   const filteredProducts = products.filter(product =>
//     product.product_name?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const displayedProducts = getSortedProducts(filteredProducts);

//   if (loading) return <Skeleton />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <>
      
      
//       <div>
//         <button onClick={() => handleSortChange('asc')}>Sort A-Z</button>
//         <button onClick={() => handleSortChange('desc')}>Sort Z-A</button>

//         <ul>
//           {displayedProducts.map((product, index) => (
//             <li key={index}>{product.product_name || 'Unnamed Product'}</li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default MainComponent;
