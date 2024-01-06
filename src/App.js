import {  Routes, Route } from "react-router-dom";
import { NavBar,About,Contact } from "./components";
import { BasicForm } from "./formInput";

import { ShowProduct } from "./showProduct";
import { ProductContextProvider } from "./showProduct/ProductContext";
function App() {
  return (
    <div className="App">
      <NavBar/>
       <ProductContextProvider>
       <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/input" element={<BasicForm/>}/>
          <Route path="/contact" element = {<Contact/>} />
          <Route path ="/product" element = {<ShowProduct/>}/>   
        </Routes>
       </ProductContextProvider>
      
    </div>
  );
}

export default App;
