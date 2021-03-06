import Button from '@material-ui/core/Button'
import MomentUtils from '@date-io/moment'
import React from 'react'
import { DateTimePicker as MaterialDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { mount, shallow } from 'enzyme'

import DateTimePicker from './DateTimePicker'

describe('<DateTimePicker />', () => {
  it('maps the date management library prop', () => {
    const wrapper = shallow(
      <DateTimePicker dateManagementLibrary={MomentUtils} onChange={() => {}} />
    ).find(MuiPickersUtilsProvider)
    expect(wrapper.props().utils).toBe(MomentUtils)
  })

  it('passes props to Material UI date time picker', () => {
    const wrapper = shallow(
      <DateTimePicker ampm dateManagementLibrary={MomentUtils} onChange={() => {}} />
    ).find(MaterialDateTimePicker)
    expect(wrapper.props().ampm).toBe(true)
  })

  describe('when changed', () => {
    it("calls the onChange handler when clicking OK's dialog", () => {
      const onChange = jest.fn()
      const wrapper = mount(
        <DateTimePicker dateManagementLibrary={MomentUtils} onChange={onChange} />
      )

      wrapper.find('input').simulate('click')

      const okButton = wrapper.find(Button).findWhere(b => b.text() === 'OK').first()
      okButton.simulate('click')

      expect(onChange).toHaveBeenCalled()
    })
  })
})
