import React from 'react'
import { shallow } from 'enzyme'
import NoResults from './NoResults'

describe('NoResults', () => {
  it('renders without error', () => {
    const wrapper = shallow(<NoResults />)
    expect(wrapper.find('h2')).toHaveLength(1)
    expect(wrapper.find('img')).toHaveLength(1)
  })
})
