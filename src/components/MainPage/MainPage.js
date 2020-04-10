// import React from 'react';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
// // import { Board } from './Board';
// import { Board } from './Board';

// export class MainPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dice: 1,
//       turn: 0,
//       roll: true,
//       move: true,
//       yIndex: 0,
//       bIndex: 0,
//       rIndex: 0,
//       gIndex: 0
//     }
//   }

//   rollDice = () => {
//     let turn = this.state.turn;
//     let dice = this.state.dice;
//     let roll = this.state.roll;
//     let yIndex = this.state.yIndex;
//     let bIndex = this.state.bIndex;
//     let rIndex = this.state.rIndex;
//     let gIndex = this.state.gIndex;

//     if (roll) {
//       console.log('dice', dice);
//       if (dice === 0) {
//         this.setState({
//           roll: false,
//           dice: (Math.floor(Math.random() * 6) + 1)
//         });
//       } else if ((yIndex === 0) && (turn === 0) && (dice !== 6)) {
//         this.setState({ dice: (Math.floor(Math.random() * 6) + 1), turn: 1 })
//       } else if ((bIndex === 0) && (turn === 1) && (dice !== 6)) {
//         this.setState({ dice: (Math.floor(Math.random() * 6) + 1), turn: 2 })
//       } else if ((rIndex === 0) && (turn === 2) && (dice !== 6)) {
//         this.setState({ dice: (Math.floor(Math.random() * 6) + 1), turn: 3 })
//       } else if ((gIndex === 0) && (turn === 3) && (dice !== 6)) {
//         this.setState({ dice: (Math.floor(Math.random() * 6) + 1), turn: 4 })
//       } else if ((yIndex === 0) && (turn === 4) && (dice !== 6)) {
//         this.setState({ dice: (Math.floor(Math.random() * 6) + 1), turn: 1 })
//       } else if ((yIndex !== 0) && (turn === 1)) {
//         this.setState({ dice: (Math.floor(Math.random() * 6) + 1), roll: false, move: true, turn: 2 });
//       } else if ((bIndex !== 0) && (turn === 2)) {
//         this.setState({ dice: (Math.floor(Math.random() * 6) + 1), roll: false, move: true, turn: 3 });
//       } else if ((rIndex !== 0) && (turn === 3)) {
//         this.setState({ dice: (Math.floor(Math.random() * 6) + 1), roll: false, move: true, turn: 4 });
//       } else if ((gIndex !== 0) && (turn === 4)) {
//         this.setState({ dice: (Math.floor(Math.random() * 6) + 1), roll: false, move: true, turn: 1 });
//       }
//     } else if (!roll) {
//       console.log('roll is false');
//       if ((turn == 1) && (yIndex == 0)) {
//         this.setState({ roll: true, dice: (Math.floor(Math.random() * 6) + 1), turn: 2 });
//       } else if ((turn == 2) && (bIndex == 0)) {
//         this.setState({ roll: true, dice: (Math.floor(Math.random() * 6) + 1), turn: 3 });
//       } else if ((turn == 3) && (rIndex == 0)) {
//         this.setState({ roll: true, dice: (Math.floor(Math.random() * 6) + 1), turn: 4 });
//       } else if ((turn == 4) && (gIndex == 0)) {
//         this.setState({ roll: true, dice: (Math.floor(Math.random() * 6) + 1), turn: 1 });
//       }
//     }
//   }

//   movePos = (name) => {
//     console.log(this.state);
//     switch (this.state.move) {
//       case true:
//         switch (this.state.turn) {
//           case 1:
//             switch (name) {
//               case 'y1':
//                 if ((this.state.yIndex === 0) && (this.state.dice === 6)) {
//                   this.setState({
//                     yIndex: this.state.yIndex + 1,
//                     dice: 0,
//                     // turn: 0,
//                     roll: true
//                   })
//                 } else if ((this.state.dice != 0) && (this.state.dice != 6) && (this.state.yIndex !== 0)) {
//                   this.setState({
//                     roll: true,
//                     yIndex: this.state.yIndex + this.state.dice,
//                     move: false
//                     // turn: 2
//                   })
//                 } else if ((this.state.dice === 6)) {
//                   this.setState({
//                     yIndex: this.state.yIndex + this.state.dice,
//                     dice: 0,
//                     roll: true
//                   })
//                 } else {
//                   return false;
//                 }
//                 break;
//             }
//             break;

//           case 2:
//             switch (name) {
//               case 'b1':
//                 if ((this.state.bIndex === 0) && (this.state.dice === 6)) {
//                   this.setState({
//                     bIndex: this.state.bIndex + 1,
//                     dice: 0,
//                     // turn: 1,
//                     roll: true
//                   })
//                 } else if ((this.state.dice != 0) && (this.state.dice != 6) && (this.state.bIndex !== 0)) {
//                   this.setState({
//                     bIndex: this.state.bIndex + this.state.dice,
//                     move: false,
//                     roll: true
//                     // turn: 3
//                   })
//                 } else if ((this.state.dice === 6)) {
//                   this.setState({
//                     bIndex: this.state.bIndex + this.state.dice,
//                     dice: 0,
//                     roll: true
//                   })
//                 }
//                 break;
//             }
//             break;

//           case 3:
//             switch (name) {
//               case 'r1':
//                 if ((this.state.rIndex === 0) && (this.state.dice === 6)) {
//                   this.setState({
//                     rIndex: this.state.rIndex + 1,
//                     dice: 0,
//                     // turn: 2,
//                     roll: true
//                   })
//                 } else if ((this.state.dice != 0) && (this.state.dice != 6) && (this.state.rIndex !== 0)) {
//                   this.setState({
//                     rIndex: this.state.rIndex + this.state.dice,
//                     move: false,
//                     roll: true
//                     // turn: 4
//                   })
//                 } else if ((this.state.dice === 6)) {
//                   this.setState({
//                     rIndex: this.state.rIndex + this.state.dice,
//                     dice: 0,
//                     roll: true
//                   })
//                 }
//                 break;
//             }
//             break;

//           case 4:
//             switch (name) {
//               case 'g1':
//                 if ((this.state.gIndex === 0) && (this.state.dice === 6)) {
//                   this.setState({
//                     gIndex: this.state.gIndex + 1,
//                     dice: 0,
//                     // turn: 3,
//                     roll: true
//                   })
//                 } else if ((this.state.dice != 0) && (this.state.dice != 6) && (this.state.gIndex !== 0)) {
//                   this.setState({
//                     gIndex: this.state.gIndex + this.state.dice,
//                     move: false,
//                     roll: true
//                     // turn: 1
//                   })
//                 } else if ((this.state.dice === 6)) {
//                   this.setState({
//                     gIndex: this.state.gIndex + this.state.dice,
//                     dice: 0,
//                     roll: true
//                   })
//                 }
//                 break;
//             }
//             break;
//         } // switch name
//         break;
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.viewTop}>
//           <Text style={{ textAlign: 'center', fontSize: 22, marginTop: 30 }}>Leaguex</Text>
//         </View>

//         <View style={styles.viewBoard}>
//           <View style={styles.boardTop}>
//             <Text style={{
//               width: '43%',
//               textAlign: 'center',
//               borderColor: 'green',
//               borderWidth: 2,
//               fontWeight: 'bold',
//               // fontFamily: 'roboto',
//               color: 'green',
//               fontSize: 20,
//               backgroundColor: this.state.turn == 4 ? '#ffffff' : '#000000',
//               borderRadius: 5,
//               overflow: 'hidden'
//             }}>Player 4</Text>
//             <Text style={{
//               width: '43%',
//               textAlign: 'center',
//               borderColor: 'red',
//               borderWidth: 2,
//               fontWeight: 'bold',
//               // fontFamily: 'roboto',
//               color: 'red',
//               fontSize: 20,
//               backgroundColor: this.state.turn == 3 ? '#ffffff' : '#000000',
//               borderRadius: 5,
//               overflow: 'hidden'
//             }}>Player 3</Text>
//           </View>

//           <View style={styles.boardMid}>
//             <Board turn={this.state.turn}
//               dice={this.state.dice}
//               move={this.state.move}
//               yIndex={this.state.yIndex}
//               bIndex={this.state.bIndex}
//               rIndex={this.state.rIndex}
//               gIndex={this.state.gIndex}
//               movePos={this.movePos}
//             />
//           </View>

//           <View style={styles.boardBottom}>
//             <Text style={{
//               width: '43%',
//               textAlign: 'center',
//               borderColor: 'yellow',
//               borderWidth: 2,
//               fontWeight: 'bold',
//               // fontFamily: 'roboto',
//               color: 'yellow',
//               fontSize: 20,
//               backgroundColor: this.state.turn == 1 ? '#ffffff' : '#000000',
//               borderRadius: 5,
//               overflow: 'hidden'
//             }}>Player 1</Text>
//             <Text style={{
//               width: '43%',
//               textAlign: 'center',
//               borderColor: 'blue',
//               borderWidth: 2,
//               fontWeight: 'bold',
//               // fontFamily: 'roboto',
//               color: 'blue',
//               fontSize: 20,
//               backgroundColor: this.state.turn == 2 ? '#ffffff' : '#000000',
//               borderRadius: 5,
//               overflow: 'hidden'
//             }}>Player 2</Text>
//           </View>
//         </View>

//         <View style={styles.viewBottom}>
//           <Text>Player {this.state.turn}</Text>
//           <Text style={styles.dice}
//             onPress={() => this.rollDice()}>
//             {this.state.dice}
//           </Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexWrap: 'nowrap',
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: 'teal',
//   },
//   viewTop: {
//     width: Dimensions.get('window').width * 0.95,
//     height: Dimensions.get('window').height * 0.15
//   },
//   viewBoard: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height * 0.7
//   },
//   boardTop: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   boardMid: {
//     width: Dimensions.get('window').width * 0.98,
//     height: Dimensions.get('window').width
//   },
//   boardBottom: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   dice: {
//     width: 60,
//     height: 60,
//     textAlign: 'center',
//     borderColor: 'white',
//     borderWidth: 2,
//     fontWeight: 'bold',
//     // fontFamily: 'roboto',
//     color: 'white',
//     fontSize: 40,
//     backgroundColor: '#000000',
//     borderRadius: 5,
//     alignSelf: 'center',
//     includeFontPadding: false,
//     textAlignVertical: 'center',
//     zIndex: 5,
//     // bottom: -400
//   }
// });
