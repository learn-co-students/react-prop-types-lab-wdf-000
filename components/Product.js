const React = require('react');

class Product extends React.Component {
  render() {
    return(
      <div>
        <h1>Name: {this.props.name}</h1>
        {this.props.producer ? <p>{this.props.producer}</p> : null}
        <p>Has Watermark? {this.props.hasWatermark ? "Yes" : "No"}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
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
  weight: function(props, propName) {
    const weight = props[propName];
    if (weight === undefined) {
      return new Error('The wieght prop is required.');
    } else if (isNaN(weight)) {
      return new Error('The weight prop needs to be a number.');
    } else if (weight < 80 || weight > 300) {
      return new Error('The weight prop needs to be between 80 and 300.');
    }
  }
};

module.exports = Product;
