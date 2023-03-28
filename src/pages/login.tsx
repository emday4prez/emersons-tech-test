import { useState, MouseEvent } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../context/index'
import { Http2ServerRequest } from 'http2'

function Login() {
  const router = useRouter()
  const { loginUser, currentUser } = useUser()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault()
    setLoading(true)
    await loginUser(email, password)
    setLoading(false)
    router.push('/dashboard')
  }

  if (currentUser) {
    router.push('/dashboard')
    return null
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-10 -mt-20 text-xl">Login</h1>
      <div className="isolate w-4/5 -space-y-px rounded-md shadow-sm md:w-2/5 lg:w-1/4">
        <div className="relative rounded-md rounded-b-none px-3 pt-2.5 pb-1.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-900"
          >
            E-Mail
          </label>
          <input
            data-testid="email-input"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="JaneSmith456@hotmail.com"
          />
        </div>
        <div className="relative rounded-md rounded-t-none px-3 pt-2.5 pb-1.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="password"
            className="block text-xs font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        {loading ? <h2>...loading</h2> : ''}
      </div>

      <button
        onClick={handleLogin}
        type="button"
        className="mt-10 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        login{' '}
      </button>
    </div>
  )
}

export default Login
