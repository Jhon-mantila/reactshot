import React, { useEffect,useState } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  
  const [products, setProduct] = useState([]);

  useEffect(() =>{
    //const response = await axios(API);
    //getData();
    getDatafetch();
    
  },[]);

  //se puede consumir la api ya sea con fetch o axios recomiendan mejor con fetch
  const getDatafetch = async() =>{
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
    setProduct(data);
  }

  const getData = async()=>{
    const response = await axios.get(API);
    setProduct(response.data);
  }
  return (
      <section className="main-container">
          <div className="cards-container">
            {products.map(product =>(
              <ProductItem />
            ))}
          </div>
      </section>
  )
}

export default ProductList;