import Dash from '../pages/dashboard'

import { render, screen, fireEvent } from '@testing-library/react'
import mockRouter from 'next-router-mock'

jest.mock('next/router', () => require('next-router-mock'))

describe('dashboard page', () => {
  it('renders the dash page', () => {
    render(<Dash />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('search')).toBeInTheDocument()
    expect(screen.getByTestId('sales-dash')).toBeInTheDocument()
    expect(screen.getByTestId('totals-list')).toBeInTheDocument()
    expect(screen.getByTestId('top-products')).toBeInTheDocument()
    expect(screen.getByTestId('charts')).toBeInTheDocument()
  })

  it('displays profile menu', () => {
    render(<Dash />)
    const profileMenuButton = screen.getByTestId('profile-menu-button')
    fireEvent.click(profileMenuButton)
    expect(screen.getByText('Sign out')).toBeInTheDocument()
  })
})
