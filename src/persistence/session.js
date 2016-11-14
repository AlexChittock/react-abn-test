const store = {}

const load = (experimentName) => store[experimentName]

const save = (experimentName, variantName) => store[experimentName] = variantName

export default {
  load,
  save
}
