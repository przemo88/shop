import React from 'react';
import ProductDetails from '../ProductList/ProductList';

const Product = ({title, image, price, alt}) => (
    <div>
        <h1>{title}</h1>
        <img src={image}  alt={alt}/>
        <p>{price}</p>
    </div>
)


export default Product;