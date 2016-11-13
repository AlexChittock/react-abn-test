import React, { PropTypes } from 'react'

const Variant = ({ name, weight = 1, children }) =>
  {
    return children
  }

Variant.propTypes = {
  name: PropTypes.string.isRequired,
  weight: PropTypes.number,
  children: PropTypes.element.isRequired
}

export default Variant
