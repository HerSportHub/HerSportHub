import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, Alert,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const PlaceholderImage = require('./assets/hersporthublogo.png');
import LoginScreen from './components/login';
import SignupScreen from './components/signup';
import ProfileScreen from './components/profile';



function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>

      <View>
        <TouchableHighlight
          onPress={() => navigation.navigate('Login')}
          style={styles.touchable}
          activeOpacity={0.5}
          underlayColor="#ffff"
        >
          <Text style={{ fontSize: 25 }}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('Signup')}
          style={styles.touchable}
          activeOpacity={0.5}
          underlayColor="#ffff"
        >
          <Text style={{ fontSize: 25 }}>Signup</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
   },
  text: {
  fontSize: 25,
  alignItems: 'baseline',
  justifyContent: 'flex-end',
  paddingTop: 10,
   },
  imageContainer: {
      paddingTop: 1,
    },
  image: {
      width: 415,
      height: 440,
    },
  touchable: {
    height: 80,
    width:415,
    borderRadius:10,
    backgroundColor : "#BEB7DF",
    marginTop :20,
    paddingTop:20,
    alignItems: 'center',
    
   },
  
  
});



