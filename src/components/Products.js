import React from 'react';
import Product from './Product';
import {ProductList} from './ProductList';

   const Products = () =>
   
   (
        <ul>
                {ProductList.map(item =>(
                        <Product key={item.title} {...item}/>
                ))}
        </ul>
   );
            
export default Products;
console.log(ProductList);