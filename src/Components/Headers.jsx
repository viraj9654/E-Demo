import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Dropdown from "react-bootstrap/Dropdown";
import { FaFilter } from 'react-icons/fa';
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import classNames from 'classnames'; 
import { useNavigate } from "react-router-dom";

const Header = ({
  handleSearch,
  open,
  setOpen,
  categories,
  handleCategoryClick,
  onSortChange,
  onNutritionSortChange 
}) => {

  const plans = ['ProductSort A-Z', 'Nutrition Filter A-Z'];
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selected, setSelected] = useState(plans[0]);
  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };
  return (

    <div className="flex flex-col lg:flex-row items-center py-3 px-5 xl:px-10 shadow-lg">
    <div className="flex-shrink-0 mb-3 lg:mb-0 lg:w-1/4"  onClick={handleHome}>
      <a href="" className="text-decoration-none">
        <h1 className="m-0 text-3xl font-semibold">
          <span className="text-green-500 font-bold border px-3 mr-1">E</span>
          Commerce
        </h1>
      </a>
    </div>
    
    <SearchBar handleSearch={handleSearch} />
    
    <div className="flex flex-wrap justify-end lg:w-1/4 w-full mb-3">
      <div className="relative w-full lg:w-auto flex items-center">
        
      <div className="relative inline-block text-left">
  <button
    className="flex items-center bg-gray-600 text-white h-10 px-3 rounded-l transition duration-300 hover:bg-gray-700"
    aria-label="Filter"
    onClick={toggleDropdown}
  >
    <FaFilter className="mr-2" />
    Filter
  </button>
  {isDropdownVisible && (
    <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 transition-opacity duration-150 ease-in-out opacity-100">
    <div className="py-2 space-y-2">
  <button
    onClick={() => onSortChange('asc')}
    className="w-full text-left py-2 px-4 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md transition-all duration-300 transform hover:bg-blue-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
  >
    Sort A-Z
  </button>
  <button
    onClick={() => onSortChange('desc')}
    className="w-full text-left py-2 px-4 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md transition-all duration-300 transform hover:bg-blue-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
  >
    Sort Z-A
  </button>
  <button
    onClick={() => onNutritionSortChange('asc')}
    className="w-full text-left py-2 px-4 rounded-md bg-gradient-to-r from-green-400 to-green-600 text-white shadow-md transition-all duration-300 transform hover:bg-green-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
  >
    Sort by Nutrition Grade (Ascending Order)
  </button>
  <button
    onClick={() => onNutritionSortChange('desc')}
    className="w-full text-left py-2 px-4 rounded-md bg-gradient-to-r from-green-400 to-green-600 text-white shadow-md transition-all duration-300 transform hover:bg-green-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
  >
    Sort by Nutrition Grade (Descending Order)
  </button>
</div>
    </div>
  )}
</div>


        <div className="mx-2"></div>

        <Dropdown onToggle={() => setOpen(!open)} show={open}>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="flex items-center justify-between bg-red-600 text-white h-10 px-4 text-sm transition-transform rounded-r"
          >
            Categories
          </Dropdown.Toggle>

          <Dropdown.Menu
            className={`w-74 text-center ${
              open ? "max-h-96 overflow-y-auto" : "max-h-0 overflow-hidden"
            }`}
            style={{ visibility: open ? "visible" : "hidden" }}
          >
            <div className="border">
              {categories.map((category) => (
                <Dropdown.Item
                  href="#"
                  className="whitespace-nowrap text-red-600"
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name}
                </Dropdown.Item>
              ))}
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  </div>
  );
};

export default Header;
