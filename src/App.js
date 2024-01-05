import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import About from "./components/About"
import BasicForm from "./formInput/BasicForm"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/input" element={<BasicForm/>}/>
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
