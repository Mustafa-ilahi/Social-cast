import {StyleSheet} from 'react-native';
import React from 'react';
import MainNavigator from './src/services/config/navigation';


export default function App() {
  return (
    <MainNavigator />
    
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    // flex: 1,
  },
});
