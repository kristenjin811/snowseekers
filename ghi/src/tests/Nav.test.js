import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { NavLink, Link, BrowserRouter } from 'react-router-dom'
import Logo from '../myLogo.svg'
import Nav from '../components/Nav'


afterEach(cleanup)


describe('Nav component', () => {
  it('renders the SnowSeekers logo and two links', () => {
    const { getByText, getByAltText } = render(<BrowserRouter><Nav /></BrowserRouter>)

    expect(getByAltText('Logo')).toBeInTheDocument()
    expect(getByText('SnowSeekers')).toBeInTheDocument()
    expect(getByText('Ski resorts')).toBeInTheDocument()
    expect(getByText('Add new resort')).toBeInTheDocument()
  });

  it('renders the correct link for ski resorts', () => {
    const { getByRole } = render(<BrowserRouter><Nav /></BrowserRouter>)

    expect(getByRole('link', { name: 'Ski resorts' })).toHaveAttribute('href', '/all/')
  })

  it('renders the correct link for adding a new resort', () => {
    const { getByRole } = render(<BrowserRouter><Nav /></BrowserRouter>)

    expect(getByRole('link', { name: 'Add new resort' })).toHaveAttribute('href', '/new/')
  })
})
