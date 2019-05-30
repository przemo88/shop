import React from 'react';
import {ProductDetails} from '../ProductList/ProductDetails';
//import {ProductList} from '../ProductList/ProductList';
import { connect } from 'react-redux';
export class Products extends React.Component{
        constructor(props){
                super(props);
                this.state = {
                };
               
        }

        render(){
                return(
                        <div>
                                {
                                (this.props.produkty).map((productDet,a) => (
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

function mapStateToProps(state) {
        return {
            produkty: state.produkty
        }
    }
    
export default connect(mapStateToProps)(Products);