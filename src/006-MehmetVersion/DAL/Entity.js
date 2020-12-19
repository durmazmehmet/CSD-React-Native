class Users {
  constructor(user, password)
  {
      this._user = user
      this._password = password
      this._registerDate = new Date()
  }

  get user()
  {
    return this._user
  }

  get password()
  {
    return this._password
  }

  get registerDate()
  {
    return this._registerDate
  }

}

export {Users}
