import { useState,useEffect } from 'react';
import Product from './component/Product';
import axios from 'axios';
import {Routes,Route} from "react-router-dom";
import Extra from './component/ProductDetail';

function App() {
 
  const [user,setUser] = useState([])
  useEffect(()=> {
    axios.get('https://dummyjson.com/products')
    .then((res) => {
        setUser(res.data.products)
        console.log(res.data.products);
       
    }).catch((err)=> {
        console.log("error=",err);
    })
},[]);
  return (
    <div>
   

<Routes>
  <Route path='/' element={<Product user = {user}/>}/>
</Routes>
          
     
      
    </div>
  );
}

export default App;
