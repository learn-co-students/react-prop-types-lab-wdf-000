const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div className='productInfo'>
        <h2>{this.props.name}</h2>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    );
  }
}

// add default props
Product.defaultProps = {
  hasWatermark: false
}

// helper function for weight validation
function checkWeight(props, propName) {
  const weight = props[propName];
  
  if (weight == (null || undefined)) {
    return new Error("This is required");
  } else if (typeof weight != "number") {
    return new Error("Weight must be a number");
  } else if (weight <= 80 || weight >= 300) {
     return new Error("Weight validation failed");
  }
}


// add propTypes to validate props passed in
Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: checkWeight
}

// another way to check for the weight:
// weight: React.PropTypes.oneOf([80,...300]).isRequired

module.exports = Product;