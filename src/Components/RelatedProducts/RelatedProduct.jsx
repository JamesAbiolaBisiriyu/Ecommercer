import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/data'
// import Item from '../items/Items'
import Items from '../items/Items'

const RelatedProduct = () => {
  return (
    <div className='relatedProducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProducts-item">
        {data_product.map((item,i)=>{
          return <Items/>
        })}
      </div>

    </div>
  )
}

export default RelatedProduct