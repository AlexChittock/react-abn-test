import cookie from 'react-cookie'

const load = (experimentName) =>
  cookie.load(experimentName)

const save = (experimentName, variantName, config = {}) => {
  cookie.save(experimentName, variantName, Object.assign({
    maxAge: 31536000
  }, config))
}

export const getCookiePersistence = (config) => {
  return {
    load: load,
    save: (experimentName, variantName) => save(experimentName, variantName, config)
  }
}

export default {
  load,
  save
}
