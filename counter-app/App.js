import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);  
  const [input, setInput] = useState('0'); 

  const handleSetNumber = () => {
    const number = parseInt(input);
    if (!isNaN(number)) {
      setCount(number);
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>

      
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
        placeholder="Enter a number"
      />
      <Button title="Set Number" onPress={handleSetNumber} />

      
      <Text style={styles.counter}>{count}</Text>

      
      <View style={styles.buttonContainer}>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
        <Button title="Decrease" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '50%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  counter: {
    fontSize: 50,
    fontWeight: 'bold',
    marginVertical: 30,
    color: 'purple',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
