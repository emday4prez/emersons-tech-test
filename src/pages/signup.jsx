import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../context/index'
import Button from '../components/button'
import { useUser } from '../context/index'

function RegisterUser() {
  const { registerUser } = useContext(UserContext)
  const { loginUser, currentUser } = useUser()
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newUser = { name, email, password }
    registerUser(newUser)
    loginUser(email, password)
    setName('')
    setEmail('')
    setPassword('')
    router.push('/dashboard')
  }
  if (currentUser) {
    router.push('/dashboard')
    return null
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-10 -mt-20 text-xl">Sign Up</h1>
      <div className="isolate w-4/5 -space-y-px rounded-md shadow-sm md:w-2/5 lg:w-1/4">
        <div className="relative rounded-md rounded-b-none px-3 pt-2.5 pb-1.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-900"
          >
            Name
          </label>
          <input
            value={name}
            type="text"
            name="name"
            id="name"
            data-testid="name-input"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            onChange={(event) => setName(event.target.value)}
            placeholder="Jane Smith"
          />
        </div>
        <div className="relative px-3 pt-2.5 pb-1.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-900"
          >
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            data-testid="email-input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="jane@hotmail.com"
          />
        </div>
        <div className="relative rounded-md rounded-t-none px-3 pt-2.5 pb-1.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="job-title"
            className="block text-xs font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            data-testid="password-input"
            onChange={(event) => setPassword(event.target.value)}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <Button
        label="sign up"
        type="button"
        onClick={handleSubmit}
        className="mt-10 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      />
    </div>
  )
}

export default RegisterUser
