import { View, Text } from "react-native";
import React from "react";
import Screen from "../components/screen";
import tw from "tailwind-react-native-classnames";
import Dpad from "../components/dpad";
const MainScreen = () => {
  return (
    <View>
      <View className='bg-red-500 '>
        <Screen />
      </View>

      <Dpad />
    </View>
  );
};

export default MainScreen;
