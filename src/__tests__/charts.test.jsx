import Charts from '../components/dashboard/GrowthChart'

import { render, screen } from '@testing-library/react'

jest.mock('next/router', () => require('next-router-mock'))

describe('charts component', () => {
  it('renders both charts', () => {
    render(<Charts />)
    expect(screen.getByTestId('revenue-chart')).toBeInTheDocument()
    expect(screen.getByTestId('customers-chart')).toBeInTheDocument()
  })
})
