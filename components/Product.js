import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {
 
  render() {
    return (
      <div>
        {this.props.name}
      </div>
   );
  }
}

Product.defaultProps = {
  hasWatermark: false
}

 function weightVal(props, propName, componentName) {
   if (props[propName] == (null || undefined)) {
     return new Error("This is required")
   }
   if (!(typeof props[propName] == "number")) {
     return new Error("Weight must be a number")
   }
   if (!(80 < props[propName] && props[propName] < 300)) {
     return new Error(
       "Weight validation failed"
     )
   }
  }

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightVal
}

module.exports = Product;

