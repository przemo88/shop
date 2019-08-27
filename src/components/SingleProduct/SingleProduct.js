import React, { Component } from 'react';
import { connect } from 'react-redux';


export class SingleProduct extends Component {
    render() {
        return (
            <div>
                {this.props.products[this.props.match.params.id].title}
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        products: state.products
    }
}



export default connect(mapStateToProps)(SingleProduct);