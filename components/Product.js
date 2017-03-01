import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
      <h1>{this.props.producer}</h1>
      <h1>{this.props.hasWatermark}</h1>
      <h1>{this.props.color}</h1>
      <h1>{this.props.weight}</h1>
    )
  }
}

Product.defaultProps = {
  
}


module.exports = Product;
