import {Service} from './Service.js'

class Validate {
  constructor(email, password) {
    this._email = email
    this._password = password
    this._service = new Service()
  }

  Login(){
      return !(this._email == "" || this._password == "") && this._service.userExist(this._email, this._password)
  }

  Save(){
      return !(this._email == "" || this._password == "") && !this._service.userExist(this._email, this._password)
  }
}

export {Validate}
