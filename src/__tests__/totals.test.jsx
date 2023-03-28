import { render } from '@testing-library/react'
import Totals from '../components/dashboard/Totals/index'

test('renders Totals component without crashing', () => {
  render(<Totals />)
})

test('renders the correct number of items', () => {
  const { getAllByTestId } = render(<Totals />)
  const totalItems = getAllByTestId('total-item')
  expect(totalItems.length).toBe(4)
})

test('renders the correct total revenue amount', () => {
  const { getByText } = render(<Totals />)
  const totalRevenueAmount = getByText('$612,839')
  expect(totalRevenueAmount).toBeInTheDocument()
})

test('renders the correct total customers amount', () => {
  const { getByText } = render(<Totals />)
  const totalCustomersAmount = getByText('526,139')
  expect(totalCustomersAmount).toBeInTheDocument()
})

test('renders the correct new customers amount', () => {
  const { getByText } = render(<Totals />)
  const newCustomersAmount = getByText('89,741')
  expect(newCustomersAmount).toBeInTheDocument()
})

test('renders the correct total product amount', () => {
  const { getByText } = render(<Totals />)
  const totalProductAmount = getByText('251,609')
  expect(totalProductAmount).toBeInTheDocument()
})
