import React from 'react'
import { useParams } from 'react-router-dom'

function Drink() {

  const params =  useParams()
  return (
    <div className='container'>
        <h1>Drink data : {params.id}</h1>
    </div>
  )
}

export default Drink