import React from "react";
import Home from "./components/Home";
import data from "../../reducers/ProductsListReducer";

class Sort2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      direction: {
        Name: "asc"
      }
    };    
    console.log(data);
    this.sortBy2 = this.sortBy2.bind(this);
  }

  sortBy(key) 
  {
    function change(a, b)
    {
         var A = a.Name.toLowerCase();
         var B = b.Name.toLowerCase();
         if (A > B){
            return 1;
         }else if (A < B){
           return  -1;
         }else{
           return 0;
         }
    }
    
    function SortElements(data) {
    
    return data.sort(change);
    
    }
    console.log(SortElements(data));
    };

  render() {
    return (
      <div className="container">
        <Home data={this.state.data} sortBy={this.sortBy2} />
      </div>
    );
  }
}

export default Sort2;