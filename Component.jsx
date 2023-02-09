import React, {useEffect, useState} from 'react'
import Image from './Image'

function Component() {

  const [isShowing, setIsShowing] =  useState(false)
  const [number, setNumber] = useState(0)

  const [data, setData] = useState([])

  useEffect(() => {
    console.log("Component Component mounted")

    fetch(`https://fakestoreapi.com/products`).then((resp) => {
      return resp.json()
    }).then(data => setData(data))

    return () => {
        console.log("component unmounted")
    }
  },[number])

//   useState, useEffect, useReducer, useContext, useRef , useMemo

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={() => setNumber(number + 1)}>+</button>
        <button onClick={()=> setNumber(number-1)}>-</button>
        <h1>Use Effect</h1>
        <button onClick={() => setIsShowing(!isShowing)}>Click me</button>
        {
            isShowing ? <Image /> : null
        }

        {
          data.map((item) => {
            return (
              <div>
                <img src={item.image} alt="" height="35"width="35" />
                <h2>{item.title}</h2>
                <h2>{item.price}</h2>
              </div>
            )
          })
        }
        
    </div>
  )
}

export default Component