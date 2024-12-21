import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from './src/services';
import Main from './src/screens/Main';
import Login from './src/screens/Login';
import ResetPassword from './src/screens/ResetPassword';
import PasswordConfirmed from './src/screens/PasswordConfirmed';
import MainNavigator from './src/services/config/navigation';
import OTPVerification from './src/screens/OTPVerification';
import ForgotPassword from './src/screens/ForgotPassword';
import Signup from './src/screens/Signup';
import ProfileOnboarding from './src/screens/ProfileOnboarding';

export default function App() {
  return (
    // <MainNavigator />

    // <Main />
    // <Login />
    // <ResetPassword />
    // <PasswordConfirmed />
    // <OTPVerification />
    // <ForgotPassword />
    // <Signup />
    <ProfileOnboarding />
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    // flex: 1,
  },
});
