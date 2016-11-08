import assert from 'assert'

import normaliseWeight from './normalise-weight'

describe('Weight Normaliser', () => {
  it('0 should be 0', () => {
    assert.equal(0, normaliseWeight(0))
  })

  it('null should be 1', () => {
    assert.equal(1, normaliseWeight(null))
  })
})
