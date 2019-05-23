import React from 'react';
import PropTypes from 'prop-types';

const Product = ({title, image, description, alt}) => (
    <div>
        <h1>{title}</h1>
        <img src={image}  alt={alt}/>
        <p>{description}</p>
    </div>
)

Product.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    alt: PropTypes.string
}

export default Product;