import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useMemo, useCallback } from "react";
import Child from "./Child";

export default function App() {
  console.log("app rendered.");
  const [count, setCount] = useState(0);
  const list = [1, 2];
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button
        title="Increase Count"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Child
        index={0}
        list={useMemo(() => list, [])}
        fun={useCallback((value) => {
          console.log("callback triggered.")
        }, [])}
      />
      <Child
        index={1}
        list={useMemo(() => list, [])}
        fun={useCallback((value) => {
          console.log("callback triggered.")
        }, [])}
      />
      <Child
        index={2}
        list={useMemo(() => list, [])}
        fun={useCallback((value) => {
          console.log("callback triggered.")
        }, [])}
      />
      <Child
        index={3}
        list={useMemo(() => list, [])}
        fun={useCallback((value) => {
          console.log("callback triggered.")
        }, [])}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
