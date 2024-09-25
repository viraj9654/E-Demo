import React from 'react'

const ProductSkeleton = () => {
  return (
 
    <div className="bg-white shadow-md">
      <div className="container py-2 shadow-lg">
        <div className="flex flex-wrap -mx-4">
        
          <div className="w-full md:w-1/2 px-4 mb-8 mt-10">
            <div className="h-full w-full bg-gray-200 animate-pulse rounded-lg shadow-md mb-4"></div>
          </div>

          <div className="w-full md:w-1/2 px-4 flex flex-col text-start">
            <div className="h-8 bg-gray-200 animate-pulse mb-2 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 animate-pulse mb-4 rounded w-1/2"></div>

            <div className="flex items-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-500 animate-pulse"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600 animate-pulse h-4 w-16 bg-gray-200 rounded"></span>
            </div>

            <div className="mb-6">
              <h3 className="text-lg text-red-700 font-semibold mb-2 animate-pulse bg-gray-200 h-6 w-1/3"></h3>
              <ul className="space-y-4 font-semibold text-left text-gray-700 dark:text-gray-400">
                <li className="flex items-center space-x-1">
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4"></div>
                </li>
                <li className="flex items-center space-x-1">
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4"></div>
                </li>
                <li className="flex items-center space-x-1">
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4"></div>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 animate-pulse bg-gray-200 h-6 w-1/3"></h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm animate-pulse h-4 w-24"></span>
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm animate-pulse h-4 w-24"></span>
              </div>
            </div>

            <div>
              <h3 className="text-lg text-red-700 font-semibold mb-2 animate-pulse bg-gray-200 h-6 w-1/3"></h3>
              <div className="bg-white p-4 rounded-md shadow-md">
                <ul className="list-disc pl-5">
                  <li className="mt-1 h-4 bg-gray-200 animate-pulse rounded w-1/2"></li>
                  <li className="mt-1 h-4 bg-gray-200 animate-pulse rounded w-1/2"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSkeleton
