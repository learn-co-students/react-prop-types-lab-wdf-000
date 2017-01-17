const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.producer}
        {this.props.hasWatermark}
        {this.props.color}
        {this.props.weight}
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    const number = props[propName];
    if(number === undefined){
      return new Error('Weight is required!');
    }
    if( !(typeof number === 'number') ){
      return new Error('Weight is not a number!');
    }
    if( !(number >= 80 && number <= 300) ){
      return new Error('Invalid weight!');
    }
  }
}

module.exports = Product;