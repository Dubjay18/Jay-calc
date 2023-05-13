import { View, Text } from "react-native";
import React, { useState } from "react";
import CusButton from "./cusButton";
import {
  Row,
  Col,
} from "react-native-responsive-grid-system";
import calculator, {
  initialState,
} from "../../../util/calculator";

const Dpad = ({
  handleClear,
  handleEqual,
  handlePress,
}) => {
  const [calcState, setCalcState] = useState(initialState);

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

        <CusButton
          text={"C"}
          bg={"green"}
          onPress={() => handleClear()}
        />

        <CusButton text={"pi"} />

        <CusButton
          text={"div"}
          onPress={() => handlePress("/")}
        />
      </View>
      <View className='flex items-center flex-row justify-evenly my-6'>
        <CusButton
          text={"7"}
          onPress={() => handlePress(7)}
        />

        <CusButton
          text={"8"}
          onPress={() => handlePress(8)}
        />

        <CusButton
          text={"9"}
          onPress={() => handlePress(9)}
        />

        <CusButton
          text={"X"}
          onPress={() => handlePress("*")}
        />
      </View>
      <View className='flex items-center flex-row justify-evenly my-6'>
        <CusButton
          text={"4"}
          onPress={() => handlePress(4)}
        />

        <CusButton
          text={"5"}
          onPress={() => handlePress(5)}
        />

        <CusButton
          text={"6"}
          onPress={() => handlePress(6)}
        />

        <CusButton
          text={"-"}
          onPress={() => handlePress("-")}
        />
      </View>
      <View className='flex items-center flex-row justify-evenly my-6'>
        <CusButton
          text={"1"}
          onPress={() => handlePress(1)}
        />

        <CusButton
          text={"2"}
          onPress={() => handlePress(2)}
        />

        <CusButton
          text={"3"}
          onPress={() => handlePress(3)}
        />

        <CusButton
          text={"+"}
          onPress={() => handlePress("+")}
        />
      </View>
      <View className='flex items-center flex-row justify-evenly my-6'>
        <CusButton
          text={"0"}
          onPress={() => handlePress(0)}
        />

        <CusButton
          text={"."}
          onPress={() => handlePress(".")}
        />

        <CusButton
          text={"%"}
          onPress={() => handlePress("percentage")}
        />

        <CusButton
          text={"="}
          bg={"green"}
          onPress={() => handleEqual()}
        />
      </View>
    </View>
  );
};

export default Dpad;
