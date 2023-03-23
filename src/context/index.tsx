import React, { createContext, useContext, useState } from 'react'

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
  // Define the loginUser function
  const loginUser = (email: string, password: string) => {
    // Find the user with the matching email and password
    const user = users.find(
      (user) => user.email === email && user.password === password
    )
    const registerUser = (user: User) => {
      setUsers([...users, user])
    }
    // If a user was found, update the currentUser in the context
    if (user) {
      setCurrentUser(user)
    }
  }

  // Define the logoutUser function
  const logoutUser = () => {
    setCurrentUser(null)
  }

  // Define the user context value
  const userContextValue: UserContextType = {
    currentUser,
    loginUser,
    logoutUser,

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
