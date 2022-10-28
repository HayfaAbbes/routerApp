import React from 'react'
import {useParams} from 'react-router-dom'

const Details = ({products}) => {
    const {id}=useParams()
    const item=products.find(el=>el.id==id)
    console.log(id)
    console.log(item)
    console.log(typeof(id))

  return (
   
    <div>
        <img src={item.img} alt={item.name}/>
        <h1>{item.name}</h1>
    </div>
  )
}

export default Details