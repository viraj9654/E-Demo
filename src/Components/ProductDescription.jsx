import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProductSkeleton from "./ProductSkeleton";
import BreadCrumb from './BreadCrumb'


const ProductDescription = () => {
  const location = useLocation();
  const { term } = location.state || {};

  console.log(term);

  const { productId } = useParams();
  const alterImage = "Images/Not Found.jpg";

  const [ProductData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const searchTerm = term || productId;
      try {
        const response = await fetch(
          `https://world.openfoodfacts.org/api/v0/product/${term}.json`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setProductData(result.product);
        console.log(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [term, productId]);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center py-3 px-5 xl:px-10 shadow-lg">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full py-3 px-5 xl:px-10 shadow-lg">
          <div
            className="flex-shrink-0 mb-3 lg:mb-0 lg:w-1/4 text-center"
            onClick={handleHome}
          >
            <a href="#" className="text-decoration-none border-none">
              <h1 className="m-0 text-3xl font-semibold">
                <span className="text-green-500 font-bold border px-3 mr-1">
                  E
                </span>
                Commerce
              </h1>
            </a>
          </div>
        </div>
      </div>
    <BreadCrumb/>

      <div className="bg-white  shadow-md">
        <div className="container py-2 shadow-lg">
          {loading ? (
            <div>
              <ProductSkeleton />
            </div>
          ) : error ? (
            <div className="text-red-500">Error: {error}</div>
          ) : ProductData ? (
            <div className="flex flex-wrap -mx-4 ">
              <div
                className="w-full md:w-1/2 px-4 mb-8 "
                style={{ height: "400px" }}
              >
                <img
                  src={ProductData?.image_front_thumb_url || alterImage}
                  alt={alterImage}
                  className="w-full h-full rounded-lg shadow-md mb-4 object-contain mt-10"
                  id="mainImage"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 flex flex-col text-start">
                <h2 className="text-3xl font-bold mb-2">
                  {ProductData?.product_name_en || " NOT DEFINE"}
                </h2>
                <p className="text-gray-600 mb-4">
                  BARCODE: {ProductData?.code}
                </p>

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg text-red-700 font-semibold mb-2">
                    Nutrient Levels:
                  </h3>
                  {ProductData?.nutrient_levels &&
                  Object.keys(ProductData.nutrient_levels).length > 0 ? (
                    <ul className="space-y-4 font-semibold text-left text-gray-700 dark:text-gray-400">
                      {Object.entries(ProductData.nutrient_levels).map(
                        ([key, value]) => (
                          <li
                            key={key}
                            className="flex items-center space-x-1 rtl:space-x-reverse"
                          >
                            <svg
                              className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 16 12"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5.917 5.724 10.5 15 1.5"
                              />
                            </svg>
                            <span className="font-semibold">
                              {key}: {value}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  ) : (
                    <p>No nutrient levels available</p>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Labels:</h3>
                  <div className="flex flex-wrap gap-2">
                    {ProductData?.labels ? (
                      ProductData.labels.split(",").map((label, index) => (
                        <span
                          key={index}
                          className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm"
                        >
                          {label.trim()}{" "}
                        </span>
                      ))
                    ) : (
                      <span>No labels available</span>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg text-red-700 font-semibold mb-2">
                    Ingredients:
                  </h3>
                  <div className="bg-white p-4 rounded-md shadow-md">
                    <ul className="list-disc pl-5">
                      {ProductData?.ingredients_text_en ? (
                        ProductData.ingredients_text_en
                          .split(",")
                          .map((ingredient, index) => (
                            <li key={index} className="mt-1">
                              <span className="ml-2">{ingredient.trim()} </span>
                            </li>
                          ))
                      ) : (
                        <li>No ingredients available</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>No product data found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
