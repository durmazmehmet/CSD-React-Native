import {myUsers} from './myUsers.js'
import {Users} from './Entity.js'

class Repository{
  exists = (user, password) => myUsers.findIndex(u => u.user === user && u.password === password) != -1
  save = (user, password) => myUsers.push(new Users(user, password))
}

export {Repository}
