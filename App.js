
// import React from 'react';
// import { StyleSheet, View, Platform } from 'react-native';
// import { MainPage } from './src/components/MainPage/MainPage';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <MainPage />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: Platform.OS === 'ios' ? 34 : 0
//   }
// });


/* eslint-disable react-native/no-inline-styles */
/* eslint-disable dot-notation */
/* eslint-disable prettier/prettier */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import Board from './src/Board';
import Board from "./src/components/MainPage/Board"

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
