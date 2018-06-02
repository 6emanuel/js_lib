import App from './App'
import React from 'react'
import { shallow } from 'enzyme'

describe('App', () => {
  test('should have welcome text', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('h1').text()).toBe('Welcome to My Starter App')
  })
})
