import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { Button } from "react-native-paper";
import MainScreen from "../../features/main/screens";
import Settings from "../../features/settings/screens";
import {
  Ionicons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
          headerTitleStyle: {
            display: "none",
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
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Settings")
                }
                style={{ marginRight: 12 }}>
                <Ionicons
                  name='md-settings-outline'
                  size={24}
                  color={"blue"}
                />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Settings")
                }
                style={{ marginLeft: 12 }}>
                <Ionicons
                  name='md-time-outline'
                  size={24}
                  color={"blue"}
                />
              </TouchableOpacity>
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
