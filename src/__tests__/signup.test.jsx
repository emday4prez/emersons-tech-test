import Signup from '../pages/signup'

import { render, screen, fireEvent } from '@testing-library/react'
import mockRouter from 'next-router-mock'

jest.mock('next/router', () => require('next-router-mock'))

describe('Signup page', () => {
  it('renders the login page', () => {
    render(<Signup />)
    expect(screen.getByTestId('email-input')).toBeInTheDocument()
    expect(screen.getByTestId('name-input')).toBeInTheDocument()
    expect(screen.getByTestId('password-input')).toBeInTheDocument()
  })
})
