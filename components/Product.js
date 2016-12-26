import React from 'react';

import ReactDOM from 'react-dom';


class Product extends React.Component {
  render () {
    return (
      <div className="productData">
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
  hasWatermark: false
}

Product.propTypes = {
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: React.PropTypes.oneOf([80,...300]).isRequired,
  name: React.PropTypes.string.isRequired
}



module.exports = Product;


// In the components/Product.js file, create a Product React component.
// This component has the following props:
// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300
// Note: for the weight prop, we'll need custom logic. Remember that it's possible to write your own prop validator function!
