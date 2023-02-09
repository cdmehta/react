import React,{useState,useEffect} from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const [data, setData] = useState([])

    useEffect(() => {
       
        fetch(`https://fakestoreapi.com/products`).then((resp) => {
        console.log(resp) ;
        return resp.json()
          
        }).then(data => setData(data))
    
        return () => {
            console.log("component unmounted")
        }
      },[])
      return(   
      data.map((item) => {
    return (
    <div>
        <h1>{item.title}</h1>
        <h2>{item.price}</h2>
    </div>
  )
})

)
}