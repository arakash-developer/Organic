import React, { useEffect, useState } from 'react'

const App = () => {
  let [allproduct,setAllProduct] = useState([]);
  useEffect(() => {
    let getData = async () => {
      let blobs = await fetch("https://techstorevercelapp.vercel.app/akash/api/products");
      let res = await blobs.json();
      let newdata = await res.data.products;
      setAllProduct(newdata);      
      // console.log();
      
    }
    getData();
  }, [])
  return (
    <div>
      {
        allproduct.map((val,index)=>(
          <div className="" key={index}>
            <h1 className='white'>{val.title}</h1>
            <img src={val.thumbnail} alt="" />
          </div>
        ))
      }

    </div>
  )
}

export default App