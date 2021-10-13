/**
 * Component Test
 *
 */

import React from 'react'
import { mount, fakeProps, toJson } from '../../../core/jest/jestSetup'
import Component from '../Copy'

const props = fakeProps(require.resolve('../Copy'), {
  all: true,
  optional: true,
})

describe('Copy component', () => {
  const Comp = mount(<Component {...props} />)

  it('have to match snapshot', () => {
    expect(toJson(Comp)).toMatchSnapshot()
  })
})
