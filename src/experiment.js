import React, { PropTypes } from 'react'

import Variant from './variant'

import weightSelector from './selectors/weight-selector'
import nameSelector from './selectors/name-selector'
import sessionPersistence from './persistence/session'

const Experiment = ({ name, selector = weightSelector, onImpression, persistence = cookiePersistence, children }) =>
  {
    const previous = persistence.load(name)
    const selected = nameSelector(children, previous) || selector(children)
    persistence.save(name, selected.props.name)
    onImpression && onImpression(name, selected.props.name)
    return selected
  }

  Experiment.propTypes = {
    name: PropTypes.string.isRequired,
    selector: PropTypes.func,
    onImpression: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.objectOf(Variant)),
    persistence: PropTypes.shape({
      save: PropTypes.func.isRequired,
      load: PropTypes.func.isRequired
    })
  }

export default Experiment
