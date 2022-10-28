import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './component/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar';
import About from './component/About';
import Contact from './component/Contact';
import Details from './component/Details';


function App() {
  const [data, setData] = useState([
    {
      id:Math.random(),
      name:"Iphone 14",
      price:6000,
      img:"https://www.ubuy.qa/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvY2I4Zjc1ZTUtMWI4ZS00YzA2LTk3NzYtMGQ5OTVhMzE0YWRhLjg4YWI1MzQ5MmY2ZmU3ZTY1MzAzMzU4NTYxNjQxOWIxLmpwZWc.jpg"

    },
    {
      id:Math.random(),
      name:"Iphone 13",
      price:5000,
      img:"https://d1eh9yux7w8iql.cloudfront.net/product_images/512315_3661e00f-5a1a-4252-8945-ba7ac3fd1dee.jpg"

    },
    {
      id:Math.random(),
      name:"Iphone 12",
      price:4000,
      img:"https://imageio.forbes.com/specials-images/imageserve/5f8eda6ec4aaea71aefaebb8/Apple-iPhone-12-in-red/0x0.jpg?format=jpg&crop=2016,1344,x0,y0,safe&width=960"


    },
    {
      id:Math.random(),
      name:"Iphone 11",
      price:3000,
      img:"https://boulanger.scene7.com/is/image/Boulanger/0194252430361_h_f_l_0"



    },


  ]);

  return (
    <div className="App">
   <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ProductList products={data}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product/:id" element={<Details products={data}/>}/>
    </Routes>
   </Router> 
    </div>
  );
}

export default App;
