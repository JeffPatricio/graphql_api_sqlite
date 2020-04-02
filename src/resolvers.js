import UserController from './controllers/UserController'

export default {
  Query: {
    users: () => UserController.index(),
    user: (_, { id }) => UserController.read(id)
  },
  Mutation: {
    createUser: (_, { name, email }) => UserController.store({ name, email }),
    updateUser: (_, { name, id }) => UserController.update(id, name),
    deleteUser: (_, { id }) => UserController.delete(id)
  }
}