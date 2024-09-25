import React from 'react'
import { useNavigate } from 'react-router-dom';

const BreadCrumb = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  }
  return (
   
      <div className="breadcrumb-option py-5   ">
    <div className="container mx-auto px-14 flex justify-self-end	 ">
      <div className="flex flex-wrap ">
        <div className="w-full ">
          <div className="breadcrumb__links text-gray-700 flex flex-wrap flex-row font-abc items-end text-sm">
            <a
              href=""
                className="flex items-center text-black cursor-pointer"
                
            >
              <i className="fa fa-home mr-2"></i> Home
            </a>
            <span className="mx-2 fa fa-angle-right mb-1"></span>
            <a href="#" className="text-black">
              Product
            </a>
            <span className="mx-2 fa fa-angle-right mb-1 "></span>
            <span>Product Description</span>
          </div>
        </div>
      </div>
    </div>
  </div>
   
  )
}

export default BreadCrumb;
