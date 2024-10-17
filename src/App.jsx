import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    let getData = async () => {
      let blobs = await fetch("https://techstorevercelapp.vercel.app/akash/api/products");
      let res = await blobs.json();
      let newdata = await res.data.products;
      console.log(newdata);
      
    }
    getData();
  }, [])
  return (
    <div>
      

    </div>
  )
}

export default App