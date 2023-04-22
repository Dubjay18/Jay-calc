import { View, Text } from "react-native";
import React from "react";
import CusButton from "./cusButton";
import {
  Row,
  Col,
} from "react-native-responsive-grid-system";

const Dpad = () => {
  return (
    <View className='mx-auto pt-2'>
      {/* Your content goes here */}
      <View className='flex items-center flex-row justify-evenly my-6'>
        <CusButton text={"sin"} bg={"blue"} sm />

        <CusButton text={"cos"} bg={"blue"} sm />

        <CusButton text={"tan"} bg={"blue"} sm />

        <CusButton text={"v"} bg={"blue"} sm />
      </View>
      <View className='flex items-center flex-row justify-evenly my-6'>
        <CusButton text={"AC"} bg={"green"} />

        <CusButton text={"C"} bg={"green"} />

        <CusButton text={"pi"} />

        <CusButton text={"div"} />
      </View>
      <View className='flex items-center flex-row justify-evenly my-6'>
        <CusButton text={"7"} />

        <CusButton text={"8"} />

        <CusButton text={"9"} />

        <CusButton text={"X"} />
      </View>
      <View className='flex items-center flex-row justify-evenly my-6'>
        <CusButton text={"4"} />

        <CusButton text={"5"} />

        <CusButton text={"6"} />

        <CusButton text={"-"} />
      </View>
      <View className='flex items-center flex-row justify-evenly my-6'>
        <CusButton text={"0"} />

        <CusButton text={"."} />

        <CusButton text={"%"} />

        <CusButton text={"="} bg={"green"} />
      </View>
    </View>
  );
};

export default Dpad;
