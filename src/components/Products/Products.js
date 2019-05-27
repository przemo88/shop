import React from 'react';
import {ProductDetails} from '../ProductList/ProductDetails';
import {ProductList} from '../ProductList/ProductList';

export class Products extends React.Component{
        constructor(props){
                super(props);
                this.state = ProductList;
        }

        render(){
                return(
                        <div>
                                {
                                ProductList.map((productDet,a) => (
                                        <ProductDetails
                                        key = {a}
                                        index = {a}
                                        title = {productDet.title}
                                        image = {productDet.image}
                                        description = {productDet.description}
                                        price = {productDet.price}
                                        />
                                        )
                                )
                                }
                        </div>
                )
        }
}