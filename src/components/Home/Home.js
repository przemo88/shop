import React from "react";
import { Products } from '../Products/Products';
import { connect } from 'react-redux';
import styles from './Home.css';
import sortBy from '../Sort/Sort';
import sortBy2 from '../Sort/Sort2';

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
      <button onClick={() => props.sortBy("Price")}>Price</button>
      <button onClick={() => props.sortBy2("Title")}>Title</button>
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