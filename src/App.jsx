import { useState } from 'react';
import Home from './home/Home.jsx';
import {BrowserRouter, Routes, Route} from
'react-router-dom'


const App = () => {
  const [count, setCount] = useState(0);

  return (
	<BrowserRouter>
	  <Routes>
	  	<Route path="/" element={<Home/>} />
	  	
	  </Routes>
	</BrowserRouter>
  );
};

export default App;
