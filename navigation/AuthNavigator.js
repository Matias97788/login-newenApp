import { createSwitchNavigator } from 'react-navigation';
import LoadingScreen from '../view/LoadingScreen';
import SignUpScreen from '../view/SignUpScreen';
import SignInScreen from '../view/SignInScreen';
const AuthNavigator = createSwitchNavigator(
  {
    Loading: { screen: LoadingScreen },
    SignUp: { screen: SignUpScreen },
    SignIn: { screen: SignInScreen }
  },
  { initialRouteName: 'Loading' }
);
export default AuthNavigator;