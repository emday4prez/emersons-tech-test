import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a button', () => {
    render(<Home />)
    const [b1, b2] = screen.getAllByTestId('button-container')
    expect(b1).not.toBeDisabled()
    expect(b2).not.toBeDisabled()
  })
})
