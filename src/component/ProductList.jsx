import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
    return (
   

        <div>
          {
            React.Children.toArray(products.map(el=><ProductCard product={el}/>))
          }
        </div>
  )
}

export default ProductList