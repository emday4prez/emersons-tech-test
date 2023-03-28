import Login from '../pages/login'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/router'
import { useUser } from '../context/index'
import mockRouter from 'next-router-mock'

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
