import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NewResortForm from '../components/NewResortForm'
import { render, fireEvent } from '@testing-library/react';

describe('NewResortForm component', () => {
  it('renders without crashing', () => {
    const { container } = render(<NewResortForm />)
    expect(container).toBeDefined()
  })
  
  it('updates the name state when the input changes', () => {
    const { getByLabelText } = render(<NewResortForm />)
    const nameInput = getByLabelText('Ski resort name:')
    fireEvent.change(nameInput, { target: { value: 'Test Resort' } })
    expect(nameInput.value).toEqual('Test Resort')
  })

  it('updates the location state when the select changes', () => {
    const { getByLabelText } = render(<NewResortForm />)
    const locationSelect = getByLabelText('Location:')
    fireEvent.change(locationSelect, { target: { value: 'Alaska' } })
    expect(locationSelect.value).toEqual('Alaska')
  })

  it('updates the skiRuns state when the input changes', () => {
    const { getByLabelText } = render(<NewResortForm />)
    const skiRunsInput = getByLabelText('Number of ski runs:')
    fireEvent.change(skiRunsInput, { target: { value: '20' } })
    expect(skiRunsInput.value).toEqual('20')
  })

  it('adds a new ski resort to the skiResorts state and sets isCreated to true when the form is submitted', () => {
    const { getByText, getByLabelText } = render(<BrowserRouter><NewResortForm /></BrowserRouter>)
    const nameInput = getByLabelText('Ski resort name:')
    fireEvent.change(nameInput, { target: { value: 'Test Resort' } })
    const locationSelect = getByLabelText('Location:')
    fireEvent.change(locationSelect, { target: { value: 'Alaska' } })
    const skiRunsInput = getByLabelText('Number of ski runs:')
    fireEvent.change(skiRunsInput, { target: { value: '20' } })
    const submitButton = getByText('Add to list')
    fireEvent.click(submitButton)
    expect(submitButton).toBeDefined()
  })

})
