import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login';
import Main from '../../screens/Main';
import ResetPassword from '../../screens/ResetPassword';
import PasswordConfirmed from '../../screens/PasswordConfirmed';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        // initialRouteName="ConditionLogic"
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="PasswordConfirmed" component={PasswordConfirmed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
