import {Repository} from './Repository.js'

class Service {
  constructor() {
    this._repository = new Repository()
  }

  userExist = (email, password) => this._repository.exists(email, password)
  saveUser = (email, password) => this._repository.save(email, password)
}

export {Service}
