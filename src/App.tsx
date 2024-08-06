import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { currencyByRupee } from './constants'
import CurrencyBtn from './components/CurrencyBtn'


const App = () => {
  return (
    <>
      <StatusBar />
      <View>
        <Text>App</Text>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({})