
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDescription from "./Components/ProductDescription";
import Main from "./Components/Main";
import { SearchProvider } from "./Components/SearchContext";
import ProductSort from "./Components/ProductSort";

function App() {
  return (
    <>
     

     
        
      

      

      {/* <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Final />} />
            <Route path="/product/:productId" element={<ProductDescription />} />
          </Routes>
        </div>
      </Router> */}
   
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:productId" element={<ProductDescription />} />
          <Route path="/productdescription" element={<ProductDescription />} />
          <Route path="/sort" element={<ProductSort />} />
        </Routes>
        </Router>
      
    </>
  );
}

export default App;
