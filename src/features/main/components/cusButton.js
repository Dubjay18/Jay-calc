import { View, Text } from "react-native";
import React from "react";
import colors from "tailwindcss/colors";
import { TouchableOpacity } from "react-native";
const CusButton = ({ text, bg, sm }) => {
  const colorFunc = () => {
    switch (bg) {
      case "green":
        return "bg-newGreen";
      case "blue":
        return "bg-newBlue";
      default:
        return "bg-[#2A93D5]";
    }
  };

  return (
    <TouchableOpacity
      className={`rounded-[14px] p-4 w-[70px] mx-2 ${colorFunc()} ${
        sm && "h-fit !p-1"
      }`}>
      <Text
        className={`text-white ${
          !sm ? "text-xl" : "text-base"
        } font-bold my-auto mx-auto`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CusButton;
