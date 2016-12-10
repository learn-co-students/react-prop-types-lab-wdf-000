import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>Producer: {this.props.producer}</h3>
        <small>Watermark: {this.props.hasWatermark}</small>
        <small>Color: {this.props.color}</small>
        <small>Weight: {this.props.weight}</small>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

function checkWeight(props, propName) {
  if (props[propName] == (null || undefined)) {
    return new Error("This is required")
  } else if (typeof props[propName] != "number") {
    return new Error("Weight must be a number")
  } else if (props[propName] <= 80 || props[propName] >= 300) {
     return new Error("Weight validation failed")
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: checkWeight
}

module.exports = Product;
