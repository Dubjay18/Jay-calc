import { View, Text } from "react-native";
import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { Button } from "react-native-paper";
import MainScreen from "../../features/main/screens";
import Settings from "../../features/settings/screens";

const AppNav = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.ModalPresentationIOS,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
        }}
        initialRouteName='Main'>
        <Stack.Screen
          name='Main'
          component={MainScreen}
          options={({ navigation, route }) => ({
            // Add a placeholder button without the `onPress` to avoid flicker
            headerRight: () => (
              <Button
                icon='cog'
                onPress={() =>
                  navigation.navigate("Settings")
                }
              />
            ),
          })}
        />
        <Stack.Screen
          name='Settings'
          component={Settings}
        />
      </Stack.Navigator>
    </>
  );
};

export default AppNav;
