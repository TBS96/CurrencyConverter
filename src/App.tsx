import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { currencyByRupee } from './constants'
import CurrencyBtn from './components/CurrencyBtn'
import Snackbar from 'react-native-snackbar'


const App = () => {

  const [inputVal, setInputVal] = useState('');
  const [resultVal, setResultVal] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');


  const btnPressed = (targetValue: Currency) => {

    if(!inputVal)
    {
      return Snackbar.show({
        text: 'Enter a value to convert!!!',
        backgroundColor: '#ff0000',
        textColor: '#ffffff'
      })
    }

    const inputAmount = parseFloat(inputVal);
    if(!isNaN(inputAmount))
    {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultVal(result);
      setTargetCurrency(targetValue.name);
    }
    else
    {
      return Snackbar.show({
        text: 'Not a valid number to convert! Please enter a valid number!!',
        backgroundColor: '#F4BE2C',
        textColor: '#ffffff',
        duration: Snackbar.LENGTH_LONG
      })
    }

  };
  
  return (
    <>
      <StatusBar />
      <View style = {styles.container}>
        
        <View style = {styles.topContainer}>
          <View style = {styles.rupeesContainer}>
            <Text style = {styles.rupee}>₹</Text>
            <TextInput 
              style = {styles.textInput}
              maxLength = {20}
              value = {inputVal}
              onChangeText={setInputVal}
              keyboardType='number-pad'
              keyboardAppearance='default'
              placeholder='Enter amount in ₹...'
            />
          </View>
          {resultVal && (
            <Text style = {styles.resultTxt}>
              {resultVal}
            </Text>
          )}
        </View>

        <View style = {styles.bottomContainer}>
          <FlatList 
            numColumns={2}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <TouchableOpacity
                style = {[styles.button, targetCurrency === item.name && styles.selected]}
                onPress={() => btnPressed(item)}>
                  <CurrencyBtn {...item}/>
              </TouchableOpacity>
            )}
          />
        </View>

      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5d89c2',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#07ec1aa1',
    marginVertical: 10,
    marginStart: 25,
    marginEnd: 25,
    borderTopEndRadius: 35,
    borderBottomStartRadius: 35,
    borderTopStartRadius: 5,
    borderBottomEndRadius: 5
  },
  textInput: {
    padding: 8,
    width: 270,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'yellow',
    fontSize: 18,
    fontFamily: 'monospace'
  },
  resultTxt: {
    fontSize: 32,
    color: 'orange',
    fontWeight: '800',
    borderWidth: 2,
    borderRadius: 50,
    padding: 20,
    marginTop: 25
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: 'gold',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
  },
  button: {
    flex: 1,
    margin: 10,
    height: 80,
    borderRadius: 12,
    backgroundColor: 'wheat',
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'red',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  selected: {
    backgroundColor: '#7cd46a',
  },
})