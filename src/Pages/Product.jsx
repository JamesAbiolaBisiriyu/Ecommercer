import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/breadcrums/BreadCrums';
import ProductDisplay from '../Components/productDisplay/ProductDisplay';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  // recieving props from ShopContext
  const {productId} = useParams();
  // useParams is used to get the productId from app.js
  const product = all_product.find((e)=> e.id === Number(productId))
  //                                            productID is a string, its converted into number with NUMBER
  return (
    <div>
      <BreadCrums product = {product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product