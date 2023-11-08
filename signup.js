import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement your signup logic here, e.g., API calls, validation, etc.
    Alert.alert('Sign Up', `Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
    navigation.navigate('Profile')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Enter your username.</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.text}>Enter your email.</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.text}>Enter your password.</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.touchable}
          onPress={handleSignUp}
          activeOpacity={0.5}
        >
          <Text style={{ fontSize: 25 }}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchable2}
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.5}
        >
          <Text style={{ fontSize: 18, textDecorationLine: 'underline' }}>
            Already have an account? Log in here!
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BEB7DF',
  },
  text: {
    fontSize: 25,
    alignItems: 'baseline',
    justifyContent: 'flex-end',
    paddingTop: 10,
  },
  textinput: {
    backgroundColor: '#fff',
    height: 35,
    width: 415,
    borderRadius: 5,
    paddingTop: 10,
    marginBottom: 20,
    fontSize: 20,
  },
  touchable: {
    height: 35,
    width: 415,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E58ABF',
  },
  touchable2: {
    height: 35,
    width: 268,
    borderRadius: 10,
    alignItems: 'baseline',
    justifyContent: 'center',
    backgroundColor: '#BEB7DF',
    paddingTop: 2,
  },
});

export default SignupScreen;
