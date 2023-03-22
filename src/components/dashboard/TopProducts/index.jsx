import m1 from '../../../images/makup.jpg'
import m2 from '../../../images/makeup2.jpg'
import Image from 'next/image'
const files = [
  {
    title: 'Pink Lipgloss ',
    size: '3.9 MB',
    source: m1,
  },
  {
    title: 'Black Mascara',
    size: '3.9 MB',
    source: m2,
  },
  // More files...
]

export default function TopProducts() {
  return (
    <div className="min-h-20 grid grid-cols-1 gap-4 pt-6 ">
      <h1>Top Products</h1>
      <ul
        role="list"
        className="relative flex items-center justify-evenly space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
      >
        {files.map((file) => (
          <li key={file.source} className="relative">
            <div className=" group  aspect-w-10 aspect-h-7 block h-48 w-40 overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <Image
                src={file.source}
                alt=""
                className="pointer-events-noneobject-cover group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {file.title}</span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
              {file.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
