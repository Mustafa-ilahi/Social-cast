import {StyleSheet} from 'react-native';
import React from 'react';
import MainNavigator from './src/services/config/navigation';
import ProfileInfo from './src/screens/ProfileInfo';


export default function App() {
  return (
    <ProfileInfo />
    // <MainNavigator />
    
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    // flex: 1,
  },
});
