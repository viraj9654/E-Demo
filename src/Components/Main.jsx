import React, { useState, useEffect, useRef } from "react";
import Header from "./Headers";
import ProductList from "./ProductList";
import Skeleton from "./Skeleton";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const alterImage = "Images/Not Found.jpg";
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [open, setOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);
  const [sortNutrition, setSortNutrition] = useState(null); 
  const productListRef = useRef(null);
  const navigate = useNavigate();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://world.openfoodfacts.org/categories.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setCategories(result.tags || []);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setLoading(true);
    setPage(1); 

    try {
      const response = await fetch(`https://world.openfoodfacts.org/category/${category}.json`);
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      setProducts(result.products || []); 
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  
  const handleSearch = async (term) => {
    setSearchTerm(term);
    setSelectedCategory(null);
    setProducts([]); 
    setPage(1); 
    if (!isNaN(term) && term.trim() !== "") {
      setLoading(true);
      try {
        const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${encodeURIComponent(term)}.json`);
        if (!response.ok) throw new Error("Network response was not ok");
        navigate("/productdescription", { state: { term } });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
      return;
    }

    if (term.length > 0) {
      setLoading(true);
      try {
        const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(term)}&json=true`);
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setProducts(result.products || []); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setProducts([]); 
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isFetching) return;
      setIsFetching(true);
      setLoading(true);
      try {
        const response = await fetch(`https://world.openfoodfacts.org/products.json?page=${page}&page_size=20`);
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        
        if (result.products) {
          if (isFirstLoad) {
            setProducts(result.products);
            setIsFirstLoad(false);
          } else {
            setProducts((prev) => [...prev, ...result.products]);
          }
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        setIsFetching(false);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const handleInfinityScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight && !isFetching) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleInfinityScroll);
    return () => window.removeEventListener("scroll", handleInfinityScroll);
  }, [isFetching]);

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleNutritionSortChange = (order) => {
    setSortNutrition(order);
  };

  const getSortedProducts = (products) => {
    let sortedProducts = [...products];

   
    if (sortOrder === 'asc') {
      sortedProducts.sort((a, b) => {
        const nameA = a.product_name?.toLowerCase() || '';
        const nameB = b.product_name?.toLowerCase() || '';
        return nameA.localeCompare(nameB);
      });
    } else if (sortOrder === 'desc') {
      sortedProducts.sort((a, b) => {
        const nameA = a.product_name?.toLowerCase() || '';
        const nameB = b.product_name?.toLowerCase() || '';
        return nameB.localeCompare(nameA);
      });
    }

    if (sortNutrition === 'asc') {
      sortedProducts.sort((a, b) => {
        const gradeA = a.nutrition_grade_fr || ''; 
        const gradeB = b.nutrition_grade_fr || '';
        return gradeA.localeCompare(gradeB);
      });
    } else if (sortNutrition === 'desc') {
      sortedProducts.sort((a, b) => {
        const gradeA = a.nutrition_grade_fr || '';
        const gradeB = b.nutrition_grade_fr || '';
        return gradeB.localeCompare(gradeA);
      });
    }

    return sortedProducts;
  };

  
  const displayedProducts = getSortedProducts(products);

  if (loading) return <Skeleton />;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header
        handleSearch={handleSearch}
        categories={categories}
        handleCategoryClick={handleCategoryClick}
        open={open}
        setOpen={setOpen}
        onSortChange={handleSortChange}
        onNutritionSortChange={handleNutritionSortChange} 
      />
      <ProductList
        products={displayedProducts}
        navigate={navigate}
        alterImage={alterImage}
        productListRef={productListRef}
      />
    </>
  );
};

export default Main;
