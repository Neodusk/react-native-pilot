import React, { useState } from 'react';
import { Text, TextInput, View, Button} from 'react-native';
import { Username } from '../utils/interfaces'

const Signin = (props: Username) => {
  const [loginPress, setLoginPress] = useState(false);
  let username = props.username;
  if (props.username == null) {
    username = "New User";
  }
  return (
    <View>
      <Text>Hello {username}! Please sign in.</Text>
      <Text>User:</Text>
      <TextInput value="user"></TextInput>
      <Text>Password:</Text>
      <TextInput value="password"></TextInput>
      <Button 
        disabled={loginPress}
        title={loginPress ? "Logging In" : "Login"} onPress={() => {
        setLoginPress(true);
      }}/>
    </View>
  );
}

export default Signin;