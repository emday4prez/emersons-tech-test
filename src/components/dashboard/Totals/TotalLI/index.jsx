function TotalLI({ total }) {
  return (
    <li
      key={total.name}
      className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
      data-testid="total-item"
    >
      <div className="flex w-full items-center justify-between p-3 md:p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">
              {total.amount}
            </h3>
            <span
              className={`inline-block flex-shrink-0 rounded-full bg-green-100 ${
                total.increase.charAt(0) === '-' ? 'bg-red-100' : 'bg-green-100'
              }  px-2 py-0.5 text-xs font-medium ${
                total.increase.charAt(0) === '-'
                  ? 'text-red-800'
                  : 'text-green-800'
              } `}
            >
              {total.increase}
            </span>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">{total.name}</p>
        </div>
      </div>
    </li>
  )
}

export default TotalLI
