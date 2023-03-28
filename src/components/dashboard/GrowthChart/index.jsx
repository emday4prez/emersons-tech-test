import Image from 'next/image'
import revenue from '../../../images/revenue.png'
import customers from '../../../images/customers.png'
export default function Charts() {
  return (
    <div
      className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2"
      data-testid="charts"
    >
      <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
        <Image src={revenue} alt="revenue chart" />
      </div>
      <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
        <Image src={customers} alt="revenue chart" />
      </div>
    </div>
  )
}
