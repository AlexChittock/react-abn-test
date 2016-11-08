import filter from './variant-filter'
import getVariantIterator from './variant-iterator'

const getNameComparator = (name) => {
  const nameComparator = (variant) => {
    return variant.props.name == name ? null : nameComparator
  }
  return nameComparator
}

const nameSelector = (variants, name) =>
  filter(getVariantIterator(variants), 0, getNameComparator(name))

export default nameSelector
