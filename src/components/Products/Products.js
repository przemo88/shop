import React from 'react';
import {ProductDetails} from '../ProductList/ProductDetails';
import { connect } from 'react-redux';
export class Products extends React.Component{
        constructor(props) {
                super(props);
                this.state = {
                    "produkty": this.props.produkty
                };
            }

        render(){
                return(
                        <div>
                                {
                                (this.props.lista_produktow.produkty).map((productDet,a) => (
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