import Api from './api'

const UsersService = {
  register: (params) => Api.post('/users/register', params),
  login: (params) => Api.post('/users/login', params)
}

export default UsersService