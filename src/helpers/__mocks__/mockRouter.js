import React from 'react'
import { Router as Router } from 'react-router-dom'
import { mount, shallow } from 'enzyme'
import { createMemoryHistory } from 'history'

const history = createMemoryHistory({ initialEntries: ['/solo#smile'] })
history.push = jest.fn()

const renderWithRouter = children => mount(
  <Router history={history}>
    { children }
  </Router>
)

const shallowWithRouter = children => shallow(
  <Router history={history}>
    { children }
  </Router>
)

export { renderWithRouter, shallowWithRouter }
