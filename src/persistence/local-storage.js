if (!window) throw 'Local Storage persistence must only be used in browser context'

const load = (experimentName) =>
  window.localStorage.getItem(experimentName)

const save = (experimentName, variantName) =>
  window.localStorage.setItem(experimentName, variantName)

export default {
  load,
  save
}
