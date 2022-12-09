import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import EmailSignIn from "../screens/EmailSignIn";
import Cart from "../screens/Cart";
import ChatSupport from "../screens/ChatSupport";
import Menu from "../screens/Menu";
import Settings from "../screens/Settings";
import TrackOrder from "../screens/TrackOrder";
import UserProfile from "../screens/UserProfile";



const Stack = createNativeStackNavigator();


function HomeStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignIn}  options={{ title: 'SignIn Screen' }} />
          <Stack.Screen name="SignUp" component={SignUp}  options={{ title: 'Create an Account' }} />
          <Stack.Screen name="EmailSignIn" component={EmailSignIn}  options={{ title: 'Email Sign In ' }} />

          <Stack.Screen name="Cart" component={Cart} options={{ title: 'Cart' }} />
          <Stack.Screen name="Menu" component={Menu} options={{ title: 'Choose and order' }} />
          <Stack.Screen name="ChatSupport" component={ChatSupport}  options={{ title: 'ChatSupport' }} />
          <Stack.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
          <Stack.Screen name="TrackOrder" component={TrackOrder} options={{ title: 'Track your Order' }} />
          <Stack.Screen name="UserProfile" component={UserProfile} options={{ title: 'Your Profile' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  

export default HomeStack;
