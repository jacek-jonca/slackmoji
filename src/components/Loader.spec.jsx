import React from 'react'
import { act } from "react-dom/test-utils"
import { mount, shallow } from 'enzyme'
import Loader, { LOADING_TEXT } from './Loader'

jest.useFakeTimers()

describe('Loader', () => {
  it('renders without error', () => {
    const wrapper = shallow(<Loader />)
    expect(wrapper.find('h2')).toHaveLength(1)
    expect(wrapper.find('img')).toHaveLength(1)
  })

  it('displays loading text', () => {
    let wrapper
    act(() => {
      wrapper = mount(<Loader />)
      jest.runAllTimers()
      wrapper.update()
    })
    expect(setTimeout).toHaveBeenCalled();
    expect(wrapper.find('h2').text()).toEqual(LOADING_TEXT)
  })
})
