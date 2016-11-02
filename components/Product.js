import React from 'react';

class Product extends React.Component {
  render(){
    return (
      <div className="product">
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark ? 'This Product Is Watermarked' : 'This Product Is Not Watermarked'}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
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
  color: React.PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  // weight: React.PropTypes.number.isRequired,
  weight: function(props, propName, componentName){
    if (props[propName] > 300 || props[propName] < 80){
      return new Error("Weight validation failed. Weight has to be between 80 and 300")
    } else if (props[propName] == undefined) {
      return new Error("Weight has to be defined")
    } else if (isNaN(props[propName])){
      return new Error("That is not a number!!!!!!!!")
    }
  }


};

export default Product
