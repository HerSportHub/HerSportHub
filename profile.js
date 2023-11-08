import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableHighlight, TextInput, Alert } from 'react-native';


function ProfileScreen ({navigation}) {
    const [Name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sports, setSports] = useState('');
    
    const handleSave = () => {
        // Implement your signup logic here, e.g., API calls, validation, etc.
        Alert.alert('Save?', `Name: ${Name}\nAge: ${age}\nSports: ${sports}`);
        
      };

    return(
        <SafeAreaView style={styles.container}>

<View style={styles.imageContainer}>
        <Image source={require('C:\Users\orlai\Desktop\hersporthub\assets\ratjammers.gif')} style={styles.image} />
      </View>
        <View>
        <Text style={styles.text}>Enter your name.</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Name"
          value={Name}
          onChangeText={setName}
        />
        <Text style={styles.text}>Enter your age.</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
        />
        <Text style={styles.text}>Enter the sports you play.</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          value={sports}
          onChangeText={setSports}
        />
         <TouchableHighlight
            onPress={handleSave}
            style={styles.touchable}
            activeOpacity={0.5}
            underlayColor="#ffff"
          >
            <Text style={{ fontSize: 25 }}>Save</Text>
          </TouchableHighlight>
       
      </View>
        <View>
          <TouchableHighlight
            onPress={() => navigation.navigate('Home')}
            style={styles.touchable}
            activeOpacity={0.5}
            underlayColor="#ffff"
          >
            <Text style={{ fontSize: 25 }}>Home</Text>
          </TouchableHighlight>
        </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({

    touchable: {
        height: 35,
        width: 415,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E58ABF',
        marginBottom: 20,
     },

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
      textinput: {
        backgroundColor: '#fff',
        height: 35,
        width: 415,
        borderRadius: 5,
        paddingTop: 10,
        marginBottom: 20,
        fontSize: 20,
      },

      imageContainer: {
        paddingTop: 1,
      },
    image: {
        width: 415,
        height: 440,
      },
});

export default ProfileScreen;