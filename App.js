import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal,ActivityIndicator } from 'react-native';
import colors from './Colors';
import {AntDesign} from '@expo/vector-icons';
import TodoList from './components/TodoList';
import AddListModal from './components/AddListModal';
import Fire from './Fire';
import { firestore } from 'firebase';
import Home from './components/Home';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';


  const AppSwitchNavigator = createSwitchNavigator({
    Home:Home
  });
  
  const AppNavigator = createAppContainer(AppSwitchNavigator);
  // name="Signup" 
  
  export default class App extends React.Component {
    render (){
      return <AppNavigator/>;
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });