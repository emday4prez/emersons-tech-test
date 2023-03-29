import TotalLI from './TotalLI'
const totals = [
  {
    name: 'Total Revenue',
    amount: '$612,839',
    increase: '12%',
  },
  {
    name: 'Total Customers',
    amount: '526,139',
    increase: '-4%',
  },
  {
    name: 'New Customers',
    amount: '89,741',
    increase: '8%',
  },
  {
    name: 'Total Product',
    amount: '251,609',
    increase: '2%',
  },
]

export default function Totals() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-2 sm:grid-cols-4 md:gap-3 lg:gap-6 "
      data-testid="totals-list"
    >
      {totals.map((total) => (
        <TotalLI total={total} />
      ))}
    </ul>
  )
}
