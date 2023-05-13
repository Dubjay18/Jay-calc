import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { initialState } from "../../../util/calculator";

const Screen = ({
  calValue,
  cursorSel,
  setCalValue,
  setCursorSel,
  setIsCursorSel,
  previewValue,
  setPreviewValue,
  ansColor,
}) => {
  const [calcState, setCalcState] = useState(initialState);

  return (
    <View className='  bg-white py-3'>
      <TextInput
        value={calValue}
        onChangeText={setCalValue}
        selection={cursorSel}
        cursorColor='#8ad8d1'
        autoFocus={true}
        textAlign='left'
        onSelectionChange={(e) => {
          setIsCursorSel(true);
          setCursorSel(e.nativeEvent.selection);
        }}
        showSoftInputOnFocus={false}
        style={[styles.input, ansColor]}
      />
      <TextInput
        value={previewValue}
        onChangeText={setPreviewValue}
        cursorColor='#8ad8d1'
        textAlign='right'
        caretHidden={true}
        showSoftInputOnFocus={false}
        style={[styles.input, styles.prevInput]}
      />
    </View>
  );
};

export default Screen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010101",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  input: {
    padding: 6,
    color: "black",
    fontSize: 36,
  },
  prevInput: {
    fontSize: 20,
    marginTop: 2,
    marginBottom: 2,
  },
  backButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 4,
  },
});
