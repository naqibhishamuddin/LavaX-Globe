import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboard from './screens/Onboard';
import Home from './screens/Home';
import SearchCountry from './screens/SearchCountry';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {enableScreens} from 'react-native-screens';

enableScreens();

const Stack = createStackNavigator();
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Onboard"
            component={Onboard}
            options={{
              gestureEnabled: true,
              title: null,
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              gestureEnabled: true,
              headerStyle: {
                elevation: 0, //for android
                shadowOpacity: 0, //for ios
                borderBottomWidth: 0, //for ios
                backgroundColor: 'white',
              },
              headerTintColor: 'black',
              headerBackTitleVisible: false,
              title: null,
            }}
          />
          <Stack.Screen
            name="SearchCountry"
            component={SearchCountry}
            options={{
              gestureEnabled: true,
              headerStyle: {
                elevation: 0, //for android
                shadowOpacity: 0, //for ios
                borderBottomWidth: 0, //for ios
                backgroundColor: 'white',
              },
              headerTintColor: 'black',
              headerBackTitleVisible: false,
              title: null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};
export default App;
