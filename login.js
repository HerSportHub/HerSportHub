import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, Alert, TextInput } from 'react-native';







 function LoginScreen({navigation}) {
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");
   return (
  <SafeAreaView style={styles.container}>
       <View>
         <Text style={styles.text}>Enter your username or email.</Text>
         <TextInput
               style={styles.textinput}
               label="Email"
               value={text}
               onChangeText={text => setText(text)}
             />
         <Text style={styles.text}>Enter your password.</Text>
          <TextInput
                        style={styles.textinput}
                        label="Password"
                        value={text2}
                        onChangeText={text2 => setText2(text2)}
                      />

        <TouchableHighlight onPress={() => navigation.navigate('Profile')}
             
               style={styles.touchable}
               activeOpacity={0.5}
               underlayColor="#ffff"
             >
               <Text style={{fontSize: 25}}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Signup')}
        
    
             
            style={styles.touchable2}
            activeOpacity={0.5}
            underlayColor="#ffff"
        >
           <Text style={{fontSize: 18, textDecorationLine: 'underline'}}>Dont have an account? Sign up here!</Text>
      
     </TouchableHighlight>
     <TouchableHighlight onPress={() => navigation.navigate('Home')}
        
    
             
        style={styles.touchable2}
        activeOpacity={0.5}
        underlayColor="#ffff"
    >
       <Text style={{fontSize: 18, textDecorationLine: 'underline'}}>Home</Text>
  
 </TouchableHighlight>
      </View>
  </SafeAreaView>
  );
}





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
  imageContainer: {
      paddingTop: 1,
    },
  image: {
      width: 415,
      height: 440,
    },
  touchable: {
      height: 35,
      width: 415,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E58ABF',
   },
  textinput: {
    backgroundColor: '#fff',
    height: 35,
    width: 415,
    borderRadius: 5,
    paddingTop: 20,
    marginBottom: 40,
    fontSize: 20,
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

export default LoginScreen;

