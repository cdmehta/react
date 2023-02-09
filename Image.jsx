import React, { useEffect } from 'react'

function Image() {

    useEffect(() => {
        console.log("image component  mounted");
        return () => {
            console.log("Image component un mounted");
        }
    },[])

  return (
    <div>
        <h1>Image Component</h1>
        <img width="200px" src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
    </div>
  )
}

export default Image