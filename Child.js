import { StyleSheet, Text, View, Button } from 'react-native'
import React, {memo, useState} from 'react'

const Child = (props) => {
  console.log(`child ${props.index} rendered.`)
  const [childCount, setChildCount] = useState(0)
  return (
    <View>
      <Text>Child {childCount}</Text>
      <Button
        title="Increase ChildCount"
        onPress={() => {
          setChildCount(childCount + 1);
          props.fun()
        }}
      />
    </View>
  )
}
export default memo(Child)

const styles = StyleSheet.create({})