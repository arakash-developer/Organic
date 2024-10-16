import React, { useEffect } from 'react'

const App = () => {
  useEffect(()=>{
    let getdata = async() =>{
      let response = await fetch('https://dummyjson.com/products');
      console.log(response);
      
    }
    getdata();
  },[])
  return (
    <div>
      

    </div>
  )
}

export default App