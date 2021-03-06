import React from 'react'
import { mount } from 'enzyme'
import SnackbarContent from '@material-ui/core/SnackbarContent'

import StickyPopup from './StickyPopup'
import StickyPopupDismiss from './StickyPopupDismiss'

function fireBodyMouseEvent (name, properties = {}) {
  const event = document.createEvent('MouseEvents')
  event.initEvent(name, true, true)
  Object.keys(properties).forEach(key => {
    event[key] = properties[key]
  })
  document.body.dispatchEvent(event)
  return event
}

describe('<StickyPopup />', () => {
  describe('clickAwayClose', () => {
    it('stops StickyPopup closing if clicked away from component if false', () => {
      const onClose = jest.fn()

      const wrapper = mount(<StickyPopup onClose={onClose}>A message</StickyPopup>)
      expect(wrapper.find('StickyPopup').props().clickAwayClose).toBe(false)

      fireBodyMouseEvent('click')
      expect(onClose).not.toHaveBeenCalled()
    })

    it('closes StickyPopup if clicked away from component if true', () => {
      const onClose = jest.fn()
      const wrapper = mount(<StickyPopup onClose={onClose} clickAwayClose>A message</StickyPopup>)

      expect(wrapper.find('StickyPopup').props().clickAwayClose).toBe(true)

      fireBodyMouseEvent('click')
      expect(onClose).toHaveBeenCalled()
    })
  })

  describe('dismissable', () => {
    it('shows a dismiss button if prop is provided', () => {
      const onClose = jest.fn()
      const wrapper = mount(
        <StickyPopup onClose={onClose} dismissable>A message</StickyPopup>
      )
      expect(wrapper.find(StickyPopupDismiss).length).toBe(1)
      expect(wrapper.props().dismissable).toBe(true)
    })

    it('does not show a dismiss button if prop is not provided', () => {
      const onClose = jest.fn()
      const wrapper = mount(
        <StickyPopup onClose={onClose} dismissable={false}>A message</StickyPopup>
      )
      expect(wrapper.find(StickyPopupDismiss).length).toBe(0)
      expect(wrapper.props().dismissable).toBe(false)
    })

    describe('onClick callback', () => {
      it('is called when button is clicked', () => {
        const onClose = jest.fn()
        const wrapper = mount(
          <StickyPopup dismissable onClose={onClose}>A message</StickyPopup>
        )
        wrapper.find(StickyPopupDismiss).simulate('click')
        expect(onClose).toHaveBeenCalled()
      })
    })
  })

  describe('prominent', () => {
    it('adds extra padding if prop is provided', () => {
      const onClose = jest.fn()
      const wrapper = mount(
        <StickyPopup prominent onClose={onClose}>A message</StickyPopup>
      )
      const SnackbarComponent = wrapper.find(SnackbarContent).getDOMNode().firstElementChild
      const SnackbarStyles = window.getComputedStyle(SnackbarComponent)
      expect(SnackbarStyles.getPropertyValue('padding-top')).toBe('40px')
      expect(SnackbarStyles.getPropertyValue('padding-bottom')).toBe('40px')
    })

    it('does not add extra padding if prop is provided', () => {
      const onClose = jest.fn()
      const wrapper = mount(
        <StickyPopup prominent={false} onClose={onClose}>A message</StickyPopup>
      )

      const SnackbarComponent = wrapper.find(SnackbarContent).getDOMNode().firstElementChild
      const SnackbarStyles = window.getComputedStyle(SnackbarComponent)
      expect(SnackbarStyles.getPropertyValue('padding-top')).toBe('8px')
      expect(SnackbarStyles.getPropertyValue('padding-bottom')).toBe('8px')
    })
  })
})
