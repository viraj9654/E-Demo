import React from 'react'

const Skeleton = () => {
  return (

    <>
     <div className="flex flex-col lg:flex-row items-center py-3 px-5 xl:px-10 shadow-lg">
  <div className="flex-shrink-0 mb-3 lg:mb-0 lg:w-1/4">
    <div className="h-8 bg-gray-300 rounded-full animate-pulse mb-2"></div>
    <div className="h-6 bg-gray-300 rounded-full animate-pulse"></div>
  </div>
  
  <div className="flex-grow mb-3 lg:mb-0">
    <div className="relative h-10 bg-gray-300 rounded-full animate-pulse"></div>
  </div>
  
  <div className="flex flex-wrap justify-end lg:w-1/4 w-full mb-3">
    <div className="relative w-full lg:w-auto">
      <div className="flex items-center justify-between bg-gray-300 rounded-full h-10 animate-pulse px-4">
        <div className="h-4 bg-gray-400 rounded-full w-24"></div>
      </div>
      
     
    </div>
  </div>
</div>
    <div className="flex space-x-4 overflow-x-auto p-4">
  {[...Array(4)].map((_, index) => (
    <div 
      key={index} 
      className="border p-4 rounded shadow-2xl w-full max-w-[300px] flex-shrink-0"
    >
      <div className="relative h-60 mb-4 flex items-center justify-center bg-gray-300 animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-12 h-12 text-gray-300"
        >
          <rect width="24" height="24" fill="transparent" />
          <path d="M6 6h12v12H6z" />
        </svg>
      </div>

      <div className="h-4 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
    </div>
  ))}
</div>
      </>
  )
}

export default Skeleton
