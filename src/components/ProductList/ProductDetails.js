import React from 'react';
import {NavLink} from 'react-router-dom';

export const ProductDetails = (props) => (
    <>
    <NavLink
        exact to={"/product/" + props.index}> {props.id}
        <img src={props.image} alt="products" />
        <p>{props.title}</p>
        <p>{props.price}</p>
  
    </NavLink>

    </>
    
);
