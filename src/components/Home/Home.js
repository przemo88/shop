import React from "react";
import { Products } from '../Products/Products';
import { connect } from 'react-redux';
import styles from './Home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        "produkty": this.props.produkty
    };
}

  render() {
    return(
      <>
        <Products lista_produktow={this.state}/>
      </>


    )
  }
} 

function mapStateToProps(state) {
  return {
      produkty: state.produkty
  }
}


export default connect(mapStateToProps)(Home);