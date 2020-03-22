import React from 'react'
import { shallow } from 'enzyme'
import Error from './Error'

describe('Error', () => {
  it('renders without error', () => {
    const wrapper = shallow(<Error />)
    expect(wrapper.find('h2')).toHaveLength(1)
    expect(wrapper.find('img')).toHaveLength(1)
  })
})
