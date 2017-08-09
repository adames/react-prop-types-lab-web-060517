import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightProp
};

function weightProp(props, propName, componentName) {
  if (typeof props[propName] !== "number") {
    return new Error(propName, 'is not a number')
  }
  if (props[propName] > 300 || props[propName] < 80){
    return new Error(propName + 'is not between 80 - 300')
  }
  if (props[propName] === undefined) {
    return new Error(propName + 'is required')
  }
  return null;
}

Product.defaultProps = {
  hasWatermark: false
}

export default Product;

// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300
