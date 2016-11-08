import cookie from 'react-cookie'

const load = (experimentName) =>
  cookie.load(experimentName)

const save = (experimentName, variantName) => {
  cookie.save(experimentName, variantName, {
    maxAge: 31536000
  })
}

export default {
  load,
  save
}
