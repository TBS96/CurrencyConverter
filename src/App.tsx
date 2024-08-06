import { StatusBar, StyleSheet, Text, View } from 'react-native'
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
        backgroundColor: '#4fe90883',
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
        text: 'Not a valid number to convert! Pl. enter a valid number',
        backgroundColor: '#F4BE2C',
        textColor: '#ffffff'
      })
    }

  };
  
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textInput: {
    padding: 8,
    width: '30%',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#DF8524',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
})