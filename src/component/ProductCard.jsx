import React from 'react'
import { Button,Card } from 'react-bootstrap'
import {Link} from "react-router-dom"

const ProductCard = ({product}) => {
  return (
    
   
<div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Link to={`/product/${product.id}`}>
        <Button variant="primary">Info</Button>
        </Link>
        
      </Card.Body>
    </Card>
    </div>
       
  )
}

export default ProductCard