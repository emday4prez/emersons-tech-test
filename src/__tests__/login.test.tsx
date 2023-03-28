import Login from '../pages/login'
import { render, screen } from '@testing-library/react'

jest.mock('next/router', () => require('next-router-mock'))

describe('Login page', () => {
  it('renders the login page', () => {
    render(<Login />)
    const emailInput = screen.getByTestId('email-input')
    const passwordInput = screen.getByLabelText(/password/i)
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
  })
})
