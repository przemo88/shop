import React from 'react';
import { connect } from 'react-redux';

export class ProductInfo extends React.Component {
    render() {
        return (
            <div >
        
                        <p>
                            {this.props.produkty[this.props.match.params.id].id}
                        </p>
                        <img
                         
                            src={this.props.produkty[this.props.match.params.id].image}
                           
                        />
                   </div>
                    
    
        );
    }
};



function mapStateToProps(state) {
    return {
        produkty: state.produkty
    }
}

export default connect(mapStateToProps)(ProductInfo);