import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { createContext, useContext, useState } from 'react'

interface User {
  id: number
  name: string
  email: string
  password: string
}

interface UserContextType {
  currentUser: User | null
  registerUser: (user: User) => void
  loginUser: (email: string, password: string) => void
  logoutUser: () => void
  users: User[]
}

// Create a user context with a default value
export const UserContext = createContext<UserContextType>({
  currentUser: null,
  registerUser: () => {},
  loginUser: () => {},
  logoutUser: () => {},
  users: [
    {
      id: 1,
      name: 'test',
      email: 'test@aol.com',
      password: 'test1234',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'test',
      email: 'test@aol.com',
      password: 'test1234',
    },
  ])
  const registerUser = (user: User) => {
    setUsers([...users, user])
  }

  const loginUser = (email: string, password: string) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    )
    setCurrentUser(user || null)
  }

  const logoutUser = () => {
    setCurrentUser(null)
  }
  const userContextValue: UserContextType = {
    currentUser,
    users,
    registerUser,
    loginUser,
    logoutUser,
  }

  return (
    <UserContext.Provider value={userContextValue}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}
