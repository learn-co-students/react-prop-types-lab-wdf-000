import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {
  render() {
    return (
      <div className="products">
        <text>{this.props.name}</text>
      <text>{this.props.producer}</text>
        <text>{this.props.hasWatermark}</text>
        <text>{this.props.color}</text>
        <text>{this.props.weight}</text>
    </div>
    )
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
  weight: (props, propName, componentName) => {
    if(props[propName]){
      if(typeof props[propName] != 'number'){
        return new Error(propName + ' in ' + componentName + " is not a number")
      }

      let correctWeight = props[propName] > 80 && props[propName] < 300
      if(!correctWeight){
        return new Error(propName + ' in ' + componentName + " is not between 80 and 300")
      }

    }else{ return new Error(propName + " is not provided")}
  }

}








module.exports = Product;
