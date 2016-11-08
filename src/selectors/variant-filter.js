const filter = (getVariant, index, comparator) => {
  const variant = getVariant(index)
  if (undefined == variant) {
    return null
  }

  const nextComparator = comparator(variant)
  if (!nextComparator) {
    return variant
  }

  return filter(getVariant, index + 1, nextComparator)
}

export default filter
