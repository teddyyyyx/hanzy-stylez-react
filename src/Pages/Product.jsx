import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb';
import { DisplayProduct } from '../components/DisplayProduct/DisplayProduct';

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrumb product={product}/>
      <DisplayProduct product={product}/>
    </div>
  )
}
