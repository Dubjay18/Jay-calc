import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native";

const Screen = () => {
  return (
    <View className='  bg-white py-3'>
      <View>
        <TextInput
          className='bg-transparent'
          readonly
          defaultValue='17x17'
        />
      </View>
      <View className='w-full flex items-center justify-end mt-7'>
        <Text className='font-bold text-3xl text-end ml-auto mr-2'>
          289
        </Text>
      </View>
    </View>
  );
};

export default Screen;
