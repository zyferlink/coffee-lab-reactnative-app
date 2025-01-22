import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/useStore';

const CartScreen = () => {
  const cartList = useStore((state: any) => state.cartList);
  console.log("CartList size: ", cartList.length);
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CartScreen