import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from '../../redux/hooks'
import { decrement, increment } from '../../redux/reducers/counterSlice'
import { logout } from '../../redux/reducers/authThunks'

const TestScreen = () => {
  const count = useSelector((state) => state.counterSlice.value)
  const dispatch = useDispatch()



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TestScreen</Text>
      <Button onPress={() => dispatch(increment())} title='increment' />
      <Text style={{ fontSize: 18 }}>{count}</Text>
      <Button onPress={() => dispatch(decrement())} title='decrement' />
      <Text style={{ fontSize: 18 }}>{count}</Text>
      <Button onPress={() => dispatch(logout())} title='LogOut' />
    </View>
  )
}

export default TestScreen

const styles = StyleSheet.create({})

