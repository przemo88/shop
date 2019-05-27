import React from 'react';
import { NavLink } from 'react-router-dom';

export const ProductDetails = (props) => (
    <NavLink
        exact to={"/product/" + props.index}
        index={props.index}>
        <p>{props.id}</p>
        <img src={props.image} alt="product" />
        <p>{props.title}</p>
        <p>{props.price}</p>
    </NavLink>
    
);
