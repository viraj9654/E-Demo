import { useState } from "react";

const SearchBar = ({  handleSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const onSearchClick = () => {
    handleSearch(inputValue); 
  };


  return (
    
  
      <div className="flex lg:w-1/2 w-full relative mb-3 lg:mb-0">
          <form className="w-full flex" >
            <input
              type="text"
              className="form-input w-full border border-gray-300 rounded py-2 pl-10 pr-12 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Search for products"
               value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="ml-2 bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={onSearchClick}
            >
              Search
            </button>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-blue-500">
                <i className="fa fa-search"></i>
              </span>
            </div>
          </form>
        </div> 
    
  );
};
export default SearchBar;