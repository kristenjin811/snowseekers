import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import WebcamCapture from '../components/WebcamCapture'
import { BrowserRouter } from 'react-router-dom'


describe('WebcamCapture', () => {
  it('should display the webcam when the link is clicked', () => {
  const { getByText, queryByText } = render(<BrowserRouter><WebcamCapture setSkiResort={jest.fn()} /></BrowserRouter>)

  expect(queryByText('Capture photo')).toBeNull()
  fireEvent.click(getByText('Take your own photo'))
  expect(getByText('Capture photo')).toBeVisible()
  })
})
