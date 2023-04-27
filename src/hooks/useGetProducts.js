import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) =>{
    
    const [products, setProduct] = useState([]);

    useEffect(() =>{
        //const response = await axios(API);
        //getData(API);
        //getDatafetch(API);
        //const response = await axios.get(API);
        //setProduct(response.data);
        async function fetchData(){
            //const response = await axios.get(API);
            //setProduct(response.data);
            const response = await fetch(API);
            const data = await response.json();
            console.log(data);
            setProduct(data);
        }
        fetchData();
      },[]);

      return products;
};

//se puede consumir la api ya sea con fetch o axios recomiendan mejor con fetch
const getDatafetch = async(API) =>{
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
    setProduct(data);
  }

  const getData = async(API)=>{
    const response = await axios.get(API);
    setProduct(response.data);
  }

export default useGetProducts;

