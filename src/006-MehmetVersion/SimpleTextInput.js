import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {Text, Button, Image, StyleSheet, TextInput, View} from 'react-native';
import {Service} from './DAL/Service.js'
import {Validate} from './DAL/Validation.js'

class SimpleTextInput extends Component {
  constructor(props)
  {
    super(props)
    this._service = new Service()
  }

  state = {
    email: '',
    password: ''
  }

  handleEmail = text => this.setState({email: text})
  handlePassword = text => this.setState({password: text})

  handleLogin(email, password)
  {
    let v = new Validate(email, password)
    v.Login() ? alert(`Welcome ${email}`) : alert(`Login Failed`)
  }


  handleRegister(email, password)
  {
    let v = new Validate(email, password)
    if(v.Save())
    {
      this._service.saveUser(email, password)
      alert(`Registration succcess`)
    } else {
      alert(`Registration Failed`)
    }
  }


  render ()
  {
    return (
      <View>
        <TextInput style={{height : 40, width: 100, borderColor : 'blue', borderWidth : 1}}
        onChangeText={this.handleEmail} placeholder = 'Email'/>

        <TextInput style={{height : 40, width: 100, borderColor : 'red', borderWidth : 1}}
        onChangeText={this.handlePassword} placeholder = 'Password' />

        <Button title="LOGIN" onPress={() => this.handleLogin(this.state.email, this.state.password)}/>
        <Button title="REGISTER" onPress={() => this.handleRegister(this.state.email, this.state.password)}/>

      </View>
    )
  }
}

export {SimpleTextInput}
