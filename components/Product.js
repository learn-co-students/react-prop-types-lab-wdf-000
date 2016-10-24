const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false 
};

  Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    const weight = props[propName]
    if (weight === undefined) {
      return new Error("weight is required")
    }
    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }
    if (weight > 300 || weight < 80) {
      return new Error('prop must be between 80 and 300')
    }
  }
}

function checkWeight (props, propName, componentName) {
    if (props[propName] > 300 || props[propName] < 80) {
      return new Error('prop must be between 80 and 300')
    }
  }
module.exports = Product;
