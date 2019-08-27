import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export const ProductDetails = (props) => (

    < NavLink

        exact to={"/product/" + props.index} > {props.id}
        <img src={props.image} alt="productssss" />
        <p>TYTUŁ{props.title}</p>
        <p>CENA{props.price}</p>

    </NavLink >

);

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductDetails);

