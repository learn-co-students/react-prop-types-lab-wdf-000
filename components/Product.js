import React from 'react'
import ReactDOM from 'react-dom'

class Product extends React.Component {
  render(){
    return(
      <div className='productData'>
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

module.exports = Product
