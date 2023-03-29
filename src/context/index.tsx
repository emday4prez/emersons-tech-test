import React, { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'
// Define the shape of a user object
interface User {
  id: number
  name: string
  email: string
  password: string
}

// Define the shape of the user context
interface UserContextType {
  currentUser: User | null
  loginUser: (email: string, password: string) => void
  registerUser: (user: User) => void
  logoutUser: () => void
  users: User[]
}

const initialUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password456',
  },
  {
    id: 3,
    name: 'test',
    email: 'test@test.com',
    password: 'test',
  },
]

// Create the user context with a default value
export const UserContext = createContext<UserContextType>({
  currentUser: null,
  loginUser: () => {},
  registerUser: () => {},
  logoutUser: () => {},
  users: initialUsers,
})
type Props = {
  children?: React.ReactNode
}
// Define a provider component for the user context
export function UserProvider({ children }: Props): React.ReactNode {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [users, setUsers] = useState<User[]>(initialUsers)
  const router = useRouter()
  const loginUser = (email: string, password: string) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    )
    if (user) {
      setCurrentUser(user)
      router.push('/dashboard')
    } else {
      alert('username or password incorrect')
    }
  }

  const registerUser = (user: User) => {
    setUsers([...users, user])
    setCurrentUser(user)
    console.log('current user', currentUser)
    if (currentUser) {
      loginUser(currentUser.email, currentUser.password)
    }
  }

  const logoutUser = () => {
    setCurrentUser(null)
  }

  // Define the user context value
  const userContextValue: UserContextType = {
    currentUser,
    loginUser,
    logoutUser,
    registerUser,
    users,
  }

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  )
}

// Define a custom hook to simplify accessing the user context
export const useUser = (): UserContextType => useContext(UserContext)
