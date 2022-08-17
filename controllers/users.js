import { v4 as uuidv4 } from 'uuid'

let users = []

export const getUser = (req, res) => {
  res.send(users)
}

export const createUser = (req, res) => {
  const user = req.body

  users.push({ ...user, id: uuidv4() })

  res.send(`User with the name ${user.FirstName} added to the database!`)
}

export const getUsers = (req, res) => {
  const { id } = req.params

  const foundUser = users.find((user) => user.id === id)
  res.send(foundUser)
}

export const deleteUser = (req, res) => {
  const { id } = req.params

  users = users.filter((user) => user.id !== id)
  res.send(`User With The Id ${id} Beeeeeen Deleted From Our Data Basse.TY`)
}

export const updateUser = (req, res) => {
  const { id } = req.params
  const { LastName, FirstName, Age } = req.body

  const user = users.find((user) => user.id === id)

  if (FirstName) user.FirstName = FirstName
  if (LastName) user.LastName = LastName
  if (Age) user.Age = Age
  res.send(`User With The Id ${id} Has Beeeen Updated`)
}
