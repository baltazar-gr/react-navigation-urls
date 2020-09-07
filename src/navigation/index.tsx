import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import * as Linking from "expo-linking";

const prefix = Linking.makeUrl("/");

const Stack = createStackNavigator();

function AppNavigator() {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: 'home',
        Details: {
          path: 'details/:itemId',
          params: {
            itemId: null
          }
        }
      }
    }
  };
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
