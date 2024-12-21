import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login';
import Main from '../../screens/Main';
import ResetPassword from '../../screens/ResetPassword';
import PasswordConfirmed from '../../screens/PasswordConfirmed';
import OTPVerification from '../../screens/OTPVerification';
import ForgotPassword from '../../screens/ForgotPassword';
import Signup from '../../screens/Signup';
import ProfileOnboarding from '../../screens/ProfileOnboarding';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Main"
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="PasswordConfirmed" component={PasswordConfirmed} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ProfileOnboarding" component={ProfileOnboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}