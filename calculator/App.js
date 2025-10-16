import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [input, setInput] = useState(''); // stores the input string
  const [result, setResult] = useState(''); // stores the calculated result

  // Append number or operator to input
  const handlePress = (value) => {
    setInput(input + value);
  };

  // Clear input and result
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  // Calculate result
  const handleEqual = () => {
    try {
      // Replace × and ÷ with * and / for eval
      const formattedInput = input.replace(/×/g, '*').replace(/÷/g, '/');
      const res = eval(formattedInput);
      setResult(res.toString());
    } catch {
      setResult('Error');
    }
  };

  // Buttons layout
  const buttons = [
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '-'],
    ['0', '.', 'C', '+'],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>

      {/* Display input */}
      <View style={styles.display}>
        <Text style={styles.inputText}>{input || '0'}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      {/* Number pad */}
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((button) => (
            <TouchableOpacity
              key={button}
              style={styles.button}
              onPress={() => {
                if (button === 'C') handleClear();
                else handlePress(button);
              }}
            >
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      {/* Equal Button */}
      <TouchableOpacity style={styles.equalButton} onPress={handleEqual}>
        <Text style={styles.equalText}>=</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000ff',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  display: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#f1c1ebff',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
  },
  inputText: {
    fontSize: 30,
    color: '#000000ff',
  },
  resultText: {
    fontSize: 24,
    color: 'purple',
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: '22%',
    aspectRatio: 1, // makes square buttons
    backgroundColor: '#f1c1ebff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  equalButton: {
    marginTop: 10,
    backgroundColor: '#f1c1ebff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  equalText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000ff',
  },
});
