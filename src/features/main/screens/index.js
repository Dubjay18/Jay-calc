import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/screen";
import tw from "tailwind-react-native-classnames";
import Dpad from "../components/dpad";
const MainScreen = () => {
  const [calValue, setCalValue] = useState("");
  const [previewValue, setPreviewValue] = useState("");
  const [isAnswer, setIsAnswer] = useState(false);
  const [cursorSel, setCursorSel] = useState({
    end: 0,
    start: 0,
  });
  const [isCursorSel, setIsCursorSel] = useState(false);
  const ansColor = {
    color: isAnswer ? "green" : "black",
  };
  useEffect(() => {
    if (valueHasOp(calValue)) {
      let prevAns = Function(`return ${calValue}`)();
      setPreviewValue(`${prevAns}`);
    } else {
      setPreviewValue(``);
    }
  }, [calValue]);

  const handleBackSpace = () => {
    const remainValue = calValue.slice(
      0,
      calValue.length - 1
    );
    setCalValue(() => remainValue);
  };
  const handlePress = (text) => {
    console.log(text, "k");
    setIsAnswer(false);
    const corrText =
      text === "X" ? "*" : text === "+/-" ? "-" : text;

    setCursorSel({
      end: cursorSel.end + 1,
      start: cursorSel.start + 1,
    });
    setCalValue((prev) => {
      if (prev.length !== cursorSel.end && isCursorSel) {
        let leftOver = prev.slice(0, cursorSel.end);
        let rightOver = prev.slice(
          cursorSel.end,
          prev.length
        );

        return (
          `${leftOver}` + `${corrText}` + `${rightOver}`
        );
      }
      return prev + `${corrText}`;
    });
  };

  const handleClear = () => {
    setCalValue("");
  };

  const handleEqual = () => {
    if (!previewValue) return;
    setCalValue(previewValue);
    setPreviewValue("");
    setIsAnswer(true);
    setCursorSel({
      end: previewValue.length,
      start: previewValue.length,
    });
    console.log("re");
  };
  function valueHasOp(text) {
    if (text.length === 0) return false;
    if (
      text[text.length - 1] === "+" ||
      text[text.length - 1] === "-" ||
      text[text.length - 1] === "*" ||
      text[text.length - 1] === "/" ||
      text[text.length - 1] === "%" ||
      text[text.length - 1] === "(" ||
      text[text.length - 1] === ")"
    )
      return false;

    for (let i = 0; i <= text.length; i++) {
      if (
        text[i] === "+" ||
        text[i] === "-" ||
        text[i] === "*" ||
        text[i] === "/" ||
        text[i] === "%"
      ) {
        return true;
      }
    }
    return false;
  }
  return (
    <View>
      <View className='bg-red-500 '>
        <Screen
          calValue={calValue}
          cursorSel={cursorSel}
          setCalValue={setCalValue}
          setPreviewValue={setPreviewValue}
          setCursorSel={setCursorSel}
          setIsCursorSel={setIsCursorSel}
          ansColor={ansColor}
        />
      </View>

      <Dpad
        handleBackSpace={handleBackSpace}
        handleClear={handleClear}
        handleEqual={handleEqual}
        handlePress={handlePress}
      />
    </View>
  );
};

export default MainScreen;
