import React from 'react';
import { Route, Link } from 'react-router-dom';
import data from "../../data/data";


const find = id => data.find(item => item.id === parseInt(id, 10));

const SingleProduct = ({ match }) => {
    const product = find(match.params.id);
    console.log('product');
    console.log(product);
    console.log('find');
    console.log(find);
    console.log('match');
    console.log(match);

    return (
        <div>

            <h4>Model: {product.title} </h4>
            <h5>Cena: {product.price} </h5>
            <hr />
            <Route path={`${match.url}/:id`} component={SingleProduct} />
        </div>
    );
};



export default SingleProduct;