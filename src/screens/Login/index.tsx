import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Sign In</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="E-mail"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.login} onPress={() => {}}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.orView}>
          <Text> OR </Text>
        </View>
        <TouchableOpacity style={styles.login} onPress={() => {}}>
          <Text style={styles.loginText}>Login With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  heading: {
    // color: '#1261A0',
    color: '#0098f1',
    fontSize: 28,
    fontWeight: '600',
    marginTop: 100,
  },
  inputContainer: {
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#C0C0C0',
    padding: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    marginTop: 40,
  },
  login: {
    backgroundColor: '#0098f1',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orView: {
    marginVertical: 20,
    alignItems: 'center',
  },
  orText: {},
});

export default Login;
