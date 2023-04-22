import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Navigation from "./src/infrastructure/navigation";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
