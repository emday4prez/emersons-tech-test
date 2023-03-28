import TopProducts from '../components/dashboard/TopProducts'
import { render } from '@testing-library/react'

describe('TopProducts', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<TopProducts />)
    expect(getByTestId('top-products')).toBeInTheDocument()
  })

  it('renders a list of products', () => {
    const { getAllByRole } = render(<TopProducts />)
    const products = getAllByRole('listitem')
    expect(products).toHaveLength(2) // Assuming that there are two products in the 'files' array
  })

  it('displays the correct product title', () => {
    const { getByText } = render(<TopProducts />)
    expect(getByText('Pink Lipgloss')).toBeInTheDocument()
    expect(getByText('Black Mascara')).toBeInTheDocument()
  })

  // it('displays the correct product image', () => {
  //   const { getAllByRole } = render(<TopProducts />)
  //   const images = getAllByRole('img')
  //   expect(images[0]).toHaveAttribute('src', '../../../images/makup.jpg')
  //   expect(images[1]).toHaveAttribute('src', '../../../images/makeup2.jpg')
  // })
})
