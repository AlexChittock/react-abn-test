import { Children } from 'react'

import filter from './variant-filter'
import normaliseWeight from '../normalise-weight'
import getVariantIterator from './variant-iterator'

const getWeightComparator = (target) => (variant) => {
  const weight = normaliseWeight(variant.props.weight)
  return weight < target ? null : getWeightComparator(weight+target)
}

const weightSelector = (variants) => {
  const seed = (variants) =>
    Math.random() * Children.toArray(variants).reduce((total, variant) =>
      total + normaliseWeight(variant.props.weight)
    , 0)

  return filter(getVariantIterator(variants), 0, getWeightComparator(seed(variants)))
}

export default weightSelector
