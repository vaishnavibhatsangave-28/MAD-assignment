import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello World</Text> */}
      <Image
        source={{ uri: 'https://media.tenor.com/113-kvqdUXAAAAAM/hello-world-beanie-the-jelly-bean.gif' }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4c5e4ff',
  },
  // text: {
  //   fontSize: 30,
  //   fontWeight: 'bold',
  //   color: 'purple',
  //   marginBottom: 20,   
  // },
  image: {
    width: 200,   
    height: 200,
   
  },
});
