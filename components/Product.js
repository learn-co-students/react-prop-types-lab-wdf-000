var React = require('react');
var ReactDOM = require('react-dom');

class Product extends React.Component {
  render(){
    return (
      <div>
        <h1>this.props.name</h1>
        <h1>this.props.producer</h1>
      </div>
    );
  }
}

Product.defaultProps = {
  // name: 'some name',
  hasWatermark: false
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,

  // weight: function(props, propName, componentName) {
  //   var tmp = props[propName];
  //   if ((( tmp < 80 || tmp > 300))|| tmp == null || (tmp == undefined) || isNaN(tmp) ) {
  //     return new Error(
  //       'error'
  //     );
  //   }
  // }

  weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined ) {
      return new Error('error');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
};

module.exports = Product;
