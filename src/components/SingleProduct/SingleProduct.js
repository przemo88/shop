import React from 'react';
import { Route, Link } from 'react-router-dom';
import data from "../../data/data";


const find = id => data.find(item => item.id === parseInt(id, 10));

const ProductInfo = ({ match }) => {
    const product = find(match.params.id);

    return (
        <div>

            <h4>Model: {product.title} </h4>
            <h5>Cena: {product.price} </h5>
            <hr />
            <Route path={`${match.url}/:id`} component={ProductInfo} />
        </div>
    );
};


const SingleProduct = () => (
    <ProductInfo match={{ params: { id: 0 }, url: '/product' }} />
);

export default SingleProduct;
