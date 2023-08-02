import React, {createContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Forms from './src/components/formulario';
import MyComponent from './src/components/pruebas';
import TablaFutions from './src/components/consultas';
import AppNavigator from './AppNavigator';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const estilos = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#0e4c75',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTable: {
    backgroundColor: '#0e4c75',
    alignItems: 'center',
    width: 700,
    height: 'auto',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    backgroundColor: '#3282b5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    flex: 1,
    flexWrap: 'wrap',
    height: 'auto',
    overflow: 'visible',
    justifyContent: 'center',
    textOverflow: 'clip',
    whiteSpace: 'normal',
  },
  row: {
    flex: 1,
    flexWrap: 'wrap', 
    paddingLeft: 1, 
  },
  container: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    position: 'relative',
    width: 350,
    height: 'auto',
    backgroundColor: '#3282b5',
    alignItems: 'center',
    padding: 30,
    paddingBottom: 60,
    //paddingTop: 30,
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    color: '#b2e3fa',
    fontWeight: 500,
    marginBottom: 30,
    //fontFamily: 'Arial'
  },
  textT: {
    fontSize: 14,
    fontWeight: 200,
    color: '#b2e3fa'
  },
  textI: {
    fontSize: 16,
    width: 280,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 15,
    marginTop: 10,
  },
  selectF: {
    fontSize: 16,
    width: 280,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 15
  },
  button1: {
    backgroundColor: '#b2e3fa',
    width: 280,
    marginBottom: 15,
  },
  colorBtn: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 7,
  }, 
  colorTxtBtn: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
});
