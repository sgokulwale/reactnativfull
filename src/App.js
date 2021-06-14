// import * as React from 'react';
import React, { Component } from "react";

import { Button, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddUser from './AddUser';
import AllUsers from './AllUsers';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.titleTxt} >React Native App</Text>
      {/* <Button 
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Add User')}>        
        <Text style={styles.btnTxt}>Add User</Text>
         </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('All Users')}
      ><Text style={styles.btnTxt}>All Users</Text></TouchableOpacity>
    </View>
  );
}
function AddUserScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.titleTxt}>Add User Screen</Text>
       {/* add user component  */}

        <AddUser />




      <TouchableOpacity 
          style={styles.btnBack}
          onPress={() => navigation.goBack()} >
          <Text style={styles.btnTxt}>Go Back</Text>
          </TouchableOpacity>
      
    </View>
  );
}
function AllUsersScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.titleTxt}>All Users list</Text>
      {/* all users list component  */}

      <ScrollView style={styles.scrollView}>
        <AllUsers />
      </ScrollView>

      <TouchableOpacity 
          style={styles.btnBack}
          onPress={() => navigation.goBack()} >
          <Text style={styles.btnTxt}>Go Back</Text>
          </TouchableOpacity>
      
      
    </View>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      /> */}
      <Button title="Go to Home"         style={styles.btn} onPress={() => navigation.navigate('Home')} />
      
      <TouchableOpacity 
          style={styles.btnBack}
          onPress={() => navigation.goBack()} >
          <Text style={styles.btnTxt}>Go Back</Text>
          </TouchableOpacity>
      
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

// function App() {
class App extends React.Component{ 
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add User" component={AddUserScreen} />
        <Stack.Screen name="All Users" component={AllUsersScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{  
    borderRadius:20,
    margin:20,
    backgroundColor:'skyblue',
    height:40,
    width:150,
    fontSize:25,

  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },

  btnBack:{  
    borderRadius:20,
    margin:20,
    backgroundColor:'#e123',
    height:40,
    width:150,
    fontSize:25,

  },
  btnTxt:{
    fontSize:20,
    paddingVertical:5,
    paddingHorizontal:10,
    fontWeight:'bold',
    alignSelf:'center',
    
  },
  titleTxt:{
    color:'gray',
    fontSize:30,
    paddingVertical:10,
    alignContent:'center',
    
  }
});

export default App;

// export default class App extends Component{}