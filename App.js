import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Board from "./src/components/Board"

const App = () => {
  return (
    <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
      <Board />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
