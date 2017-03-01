import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.producer}</h1>
        <h1>{this.props.hasWatermark}</h1>
        <h1>{this.props.color}</h1>
        <h1>{this.props.weight}</h1>
      </div>
    )
  }
}


Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white',
  'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    debugger;
    // if (typeof props[propName] !== "number" || props[propName] > 300 || props[propName] < 80) {
    //   return new Error("Sorry")
    // } else {
    //   return null
    // }
  }
}


module.exports = Product;
