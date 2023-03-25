import Login from '../pages/login'

import { useRouter } from 'next/router'
import { render, screen, fireEvent } from '@testing-library/react'
import mockRouter from 'next-router-mock'

jest.mock('next/router', () => require('next-router-mock'))

describe('Login page', () => {
  it('renders the login page', () => {
    render(<Login />)
    expect(screen.getByTestId('email-input')).toBeInTheDocument()
  })
})
