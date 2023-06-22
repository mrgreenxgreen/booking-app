
import './App.css';
import Home from "./home/Home.jsx"
import List from "./list/List.jsx"
import {BrowserROuter, Routes, Route} from "react-router-dom"



const App = () => {
  <BrowserROuter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/hotels" element={<List/>} />
      <Route path="/hotels/:id" element={<Hotel/>} />:

    </Routes>
  
  </BrowserROuter>




};

export default App;
