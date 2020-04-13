/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { range, map, find, findIndex } from 'lodash';
import { View, Dimensions, Text, TouchableOpacity, Button } from 'react-native';

const { width, height } = Dimensions.get('screen');
const colors = {
  '6,1': { color: '#FF0' },
  '7,1': { color: '#FF0' },
  '7,2': { color: '#FF0' },
  '7,3': { color: '#FF0' },
  '7,4': { color: '#FF0' },
  '7,5': { color: '#FF0' },
  '2,3': { color: '#FF0' },
  '3,2': { color: '#FF0' },
  '3,4': { color: '#FF0' },
  '4,3': { color: '#FF0' },
  '7,6': { color: '#FF0' },
  '1,8': { color: '#F00' },
  '1,7': { color: '#F00' },
  '2,7': { color: '#F00' },
  '3,7': { color: '#F00' },
  '4,7': { color: '#F00' },
  '5,7': { color: '#F00' },
  '2,11': { color: '#F00' },
  '3,10': { color: '#F00' },
  '3,12': { color: '#F00' },
  '4,11': { color: '#F00' },
  '6,7': { color: '#F00' },
  '8,13': { color: '#F0F' },
  '7,13': { color: '#F0F' },
  '7,12': { color: '#F0F' },
  '7,11': { color: '#F0F' },
  '7,10': { color: '#F0F' },
  '7,9': { color: '#F0F' },
  '12,11': { color: '#F0F' },
  '11,12': { color: '#F0F' },
  '11,10': { color: '#F0F' },
  '10,11': { color: '#F0F' },
  '7,8': { color: '#F0F' },
  '13,6': { color: '#00F' },
  '13,7': { color: '#00F' },
  '12,7': { color: '#00F' },
  '11,7': { color: '#00F' },
  '10,7': { color: '#00F' },
  '9,7': { color: '#00F' },
  '12,3': { color: '#00F' },
  '11,4': { color: '#00F' },
  '10,3': { color: '#00F' },
  '11,2': { color: '#00F' },
  '8,7': { color: '#00F' },
  '7,7': { color: '#AAA' },
};
const data = [15, 15];
const playerAPath = ['6,1', '6,2', '6,3', '6,4', '6,5', '5,6', '4,6', '3,6', '2,6', '1,6', '0,6', '0,7', '0,8', '1,8', '2,8', '3,8',
  '4,8', '5,8', '6,9', '6,10', '6,11', '6,12', '6,13', '6,14', '7,14', '8,14', '8,13', '8,12', '8,11', '8,10', '8,9', '9,8', '11,8', '12,8', '13,8', '14,8',
  '14,7', '14,6', '13,6', '12,6', '11,6', '10,6', '9,6', '8,5', '8,4', '8,3', '8,2', '8,1', '8,0', '7,0', '7,1', '7,2', '7,3', '7,4', '7,5', '7,6'];
const playerBPath = ['1,8', '2,8', '3,8', '4,8', '5,8', '6,9', '6,10', '6,11', '6,12', '6,13', '6,14', '7,14', '8,14', '8,13', '8,12', '8,11', '8,10', '8,9', '9,8', '11,8', '12,8', '13,8', '14,8',
  '14,7', '14,6', '13,6', '12,6', '11,6', '10,6', '9,6', '8,5', '8,4', '8,3', '8,2', '8,1', '8,0', '7,0', '6,0', '6,1', '6,2', '6,3', '6,4', '6,5', '5,6', '4,6', '3,6', '2,6', '1,6', '0,6', '0,7', '1,7',
  '2,7', '3,7', '4,7', '5,7', '6,7'];
const playerCPath = ['8,13', '8,12', '8,11', '8,10', '8,9', '9,8', '11,8', '12,8', '13,8', '14,8', '14,7', '14,6', '13,6', '12,6', '11,6', '10,6', '9,6', '8,5', '8,4', '8,3', '8,2', '8,1', '8,0', '7,0', '6,0',
  '6,1', '6,2', '6,3', '6,4', '6,5', '5,6', '4,6', '3,6', '2,6', '1,6', '0,6', '0,7', '0,8', '1,8', '2,8', '3,8', '4,8', '5,8', '6,9', '6,10', '6,11', '6,12', '6,13', '6,14', '7,14', '7,13',
  '7,12', '7,11', '7,10', '7,9', '7,8'];
const playerDPath = ['13,6', '12,6', '11,6', '10,6', '9,6', '8,5', '8,4', '8,3', '8,2', '8,1', '8,0', '7,0', '6,0',
  '6,1', '6,2', '6,3', '6,4', '6,5', '5,6', '4,6', '3,6', '2,6', '1,6', '0,6', '0,7', '0,8', '1,8', '2,8', '3,8', '4,8', '5,8', '6,9', '6,10', '6,11', '6,12', '6,13', '6,14', '7,14', '8,14',
  '8,13', '8,12', '8,11', '8,10', '8,9', '9,8', '11,8', '12,8', '13,8', '14,8', '14,7', '13,7', '12,7', '11,7', '10,7', '9,7', '8,7'];

const safeArea = ["6,1", "2,6", "1,8", "6,12", "8,13", "12,8", "13,8", "8,2"]
const playerAcolor = '#FA0';
const playerBcolor = '#CDC';
const playerCcolor = '#BAF';
const playerDcolor = '#0CF';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerA: [{ pos: '2,3', index: -1 }, { pos: '3,2', index: -1 }, { pos: '3,4', index: -1 }, { pos: '4,3', index: -1 }],
      playerB: [{ pos: '2,11', index: -1 }, { pos: '3,10', index: -1 }, { pos: '3,12', index: -1 }, { pos: '4,11', index: -1 }],
      playerC: [{ pos: '10,11', index: -1 }, { pos: '11,10', index: -1 }, { pos: '11,12', index: -1 }, { pos: '12,11', index: -1 }],
      playerD: [{ pos: '10,3', index: -1 }, { pos: '11,2', index: -1 }, { pos: '11,4', index: -1 }, { pos: '12,3', index: -1 }],
      turn: 'a',
      currentRoll: '',
      rollEnabled: true,
    };
    this.checkCoinPosition = this.checkCoinPosition.bind(this);
    this.moveCoin = this.moveCoin.bind(this);
    this.rollADie = this.rollADie.bind(this);
    this.checkValidMoveAvailable = this.checkValidMoveAvailable.bind(this);
  }
  componentDidMount() {
  }
  checkCoinPosition(r, c) {
    let playerACoin = findIndex(this.state.playerA, (coin) => { return coin.pos === r + ',' + c; });
    if (playerACoin !== -1) {
      return { coinColor: playerAcolor, player: 'A', coin: this.state.playerA[playerACoin], index: playerACoin };
    } else {
      let playerBCoin = findIndex(this.state.playerB, (coin) => { return coin.pos === r + ',' + c; });
      if (playerBCoin !== -1) {
        return { coinColor: playerBcolor, player: 'B', coin: this.state.playerB[playerBCoin], index: playerBCoin };
      } else {
        let playerCCoin = findIndex(this.state.playerC, (coin) => { return coin.pos === r + ',' + c; });
        if (playerCCoin !== -1) {
          return { coinColor: playerCcolor, player: 'C', coin: this.state.playerC[playerCCoin], index: playerCCoin };
        } else {
          let playerDCoin = findIndex(this.state.playerD, (coin) => { return coin.pos === r + ',' + c; });
          if (playerDCoin !== -1) {
            return { coinColor: playerDcolor, player: 'D', coin: this.state.playerD[playerDCoin], index: playerDCoin };
          } else {
            return false;
          }
        }
      }
    }
  }
  moveCoin(player, coinIndex, fromIndex, indexToAdd) {
    console.log("state", this.state)

    // console.log("moveCoin", player, coinIndex, indexToAdd)
    if (player === 'a') {
      let prevState = [...this.state.playerA];
      let toIndex = prevState[coinIndex].index + indexToAdd;
      if (toIndex <= 55) {
        let aPath = playerAPath[toIndex];
        let red = [...this.state.playerB];
        let pink = [...this.state.playerC]
        let blue = [...this.state.playerD]

        // FOR RED COIN
        for (var i = 0; i < 4; i++) {
          if (red[i].pos == "6,1" || red[i].pos == "2,6" || red[i].pos == "1,8" || red[i].pos == "6,12" || red[i].pos == "8,13" || red[i].pos == "12,8" || red[i].pos == "13,8" || red[i].pos == "8,2") {
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerAPath[toIndex];
            this.setState({ playerA: prevState });

          } else {
            if (aPath == red[i].pos) {
              red[i].pos = i == 0 ? "2,11" : i == 1 ? "3,10" : i == 2 ? "3,12" : i == 3 ? "4,11" : ''
              red[i].index = -1;
              this.setState({ playerB: red })
              prevState[coinIndex].index = toIndex;
              prevState[coinIndex].pos = playerAPath[toIndex];
              this.setState({ playerA: prevState });
            } else {
              prevState[coinIndex].index = toIndex;
              prevState[coinIndex].pos = playerAPath[toIndex];
              this.setState({ playerA: prevState });
            }
          }
        }


        // FOR PINK COIN
        for (var i = 0; i < 4; i++) {
          if (pink[i].pos == "6,1" || pink[i].pos == "2,6" || pink[i].pos == "1,8" || pink[i].pos == "6,12" || pink[i].pos == "8,13" || pink[i].pos == "12,8" || pink[i].pos == "13,8" || pink[i].pos == "8,2") {
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerAPath[toIndex];
            this.setState({ playerA: prevState });

          } else {
            if (aPath == pink[i].pos) {
              pink[i].pos = i == 0 ? "10,11" : i == 1 ? "11,10" : i == 2 ? "11,12" : i == 3 ? "12,11" : ''
              pink[i].index = -1;
              this.setState({ playerC: pink })
              prevState[coinIndex].index = toIndex;
              prevState[coinIndex].pos = playerAPath[toIndex];
              this.setState({ playerA: prevState });
            } else {
              prevState[coinIndex].index = toIndex;
              prevState[coinIndex].pos = playerAPath[toIndex];
              this.setState({ playerA: prevState });
            }
          }
        }

        // FOR BLUE Button
        for (var i = 0; i < 4; i++) {
          if (blue[i].pos == "6,1" || blue[i].pos == "2,6" || blue[i].pos == "1,8" || blue[i].pos == "6,12" || blue[i].pos == "8,13" || blue[i].pos == "12,8" || blue[i].pos == "13,8" || blue[i].pos == "8,2") {
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerAPath[toIndex];
            this.setState({ playerA: prevState });
          } else {
            if (aPath == blue[i].pos) {
              blue[i].pos = i == 0 ? "10,3" : i == 1 ? "11,2" : i == 2 ? "11,4" : i == 3 ? "12,3" : ''
              blue[i].index = -1;
              this.setState({ playerD: blue })
              prevState[coinIndex].index = toIndex;
              prevState[coinIndex].pos = playerAPath[toIndex];
              this.setState({ playerA: prevState });
            } else {
              prevState[coinIndex].index = toIndex;
              prevState[coinIndex].pos = playerAPath[toIndex];
              this.setState({ playerA: prevState });
            }
          }

        }

      }
    } else if (player === 'b') {
      let prevState = [...this.state.playerB];
      let toIndex = prevState[coinIndex].index + indexToAdd;

      let bPath = playerBPath[toIndex];
      let yellow = [...this.state.playerA];
      let pink = [...this.state.playerC]
      let blue = [...this.state.playerD]

      // FOR PINK COIN
      for (var i = 0; i < 4; i++) {
        if (pink[i].pos == "6,1" || pink[i].pos == "2,6" || pink[i].pos == "1,8" || pink[i].pos == "6,12" || pink[i].pos == "8,13" || pink[i].pos == "12,8" || pink[i].pos == "13,8" || pink[i].pos == "8,2") {
          prevState[coinIndex].index = toIndex;
          prevState[coinIndex].pos = playerBPath[toIndex];
          this.setState({ playerB: prevState });

        } else {
          if (bPath == pink[i].pos) {
            pink[i].pos = i == 0 ? "10,11" : i == 1 ? "11,10" : i == 2 ? "11,12" : i == 3 ? "12,11" : ''
            pink[i].index = -1;
            this.setState({ playerC: pink })
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerBPath[toIndex];
            this.setState({ playerB: prevState });
          } else {
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerBPath[toIndex];
            this.setState({ playerB: prevState });
          }
        }
      }




      // FOR BLUE Button
      for (var i = 0; i < 4; i++) {
        if (blue[i].pos == "6,1" || blue[i].pos == "2,6" || blue[i].pos == "1,8" || blue[i].pos == "6,12" || blue[i].pos == "8,13" || blue[i].pos == "12,8" || blue[i].pos == "13,8" || blue[i].pos == "8,2") {
          prevState[coinIndex].index = toIndex;
          prevState[coinIndex].pos = playerBPath[toIndex];
          this.setState({ playerB: prevState });
        } else {
          if (bPath == blue[i].pos) {
            blue[i].pos = i == 0 ? "10,3" : i == 1 ? "11,2" : i == 2 ? "11,4" : i == 3 ? "12,3" : ''
            blue[i].index = -1;
            this.setState({ playerD: blue })
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerBPath[toIndex];
            this.setState({ playerB: prevState });
          } else {
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerBPath[toIndex];
            this.setState({ playerB: prevState });
          }
        }
      }


      // FOR YELLOW
      for (var i = 0; i < 4; i++) {
        if (yellow[i].pos == "6,1" || yellow[i].pos == "2,6" || yellow[i].pos == "1,8" || yellow[i].pos == "6,12" || yellow[i].pos == "8,13" || yellow[i].pos == "12,8" || yellow[i].pos == "13,8" || yellow[i].pos == "8,2") {
          prevState[coinIndex].index = toIndex;
          prevState[coinIndex].pos = playerBPath[toIndex];
          this.setState({ playerB: prevState });
        } else {
          if (bPath == yellow[i].pos) {
            yellow[i].pos = i == 0 ? "2,3" : i == 1 ? "3,2" : i == 2 ? "3,4" : i == 3 ? "4,3" : ''
            yellow[i].index = -1;
            this.setState({ playerA: yellow })
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerBPath[toIndex];
            this.setState({ playerB: prevState });
          } else {
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerBPath[toIndex];
            this.setState({ playerB: prevState });
          }
        }
      }

    } else if (player === 'c') {
      let prevState = [...this.state.playerC];
      let toIndex = prevState[coinIndex].index + indexToAdd;

      let cPath = playerCPath[toIndex];
      let yellow = [...this.state.playerA];
      let blue = [...this.state.playerD]
      let red = [...this.state.playerB];


      // FOR BLUE Button
      for (var i = 0; i < 4; i++) {
        if (blue[i].pos == "6,1" || blue[i].pos == "2,6" || blue[i].pos == "1,8" || blue[i].pos == "6,12" || blue[i].pos == "8,13" || blue[i].pos == "12,8" || blue[i].pos == "13,8" || blue[i].pos == "8,2") {
          prevState[coinIndex].index = toIndex;
          prevState[coinIndex].pos = playerCPath[toIndex];
          this.setState({ playerC: prevState });

        } else {
          if (cPath == blue[i].pos) {
            blue[i].pos = i == 0 ? "10,3" : i == 1 ? "11,2" : i == 2 ? "11,4" : i == 3 ? "12,3" : ''
            blue[i].index = -1;
            this.setState({ playerD: blue })
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerCPath[toIndex];
            this.setState({ playerC: prevState });
          } else {
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerCPath[toIndex];
            this.setState({ playerC: prevState });
          }
        }
      }
      // FOR YELLOW
      for (var i = 0; i < 4; i++) {
        if (yellow[i].pos == "6,1" || yellow[i].pos == "2,6" || yellow[i].pos == "1,8" || yellow[i].pos == "6,12" || yellow[i].pos == "8,13" || yellow[i].pos == "12,8" || yellow[i].pos == "13,8" || yellow[i].pos == "8,2") {
          prevState[coinIndex].index = toIndex;
          prevState[coinIndex].pos = playerCPath[toIndex];
          this.setState({ playerC: prevState });

        } else {
          if (cPath == yellow[i].pos) {
            yellow[i].pos = i == 0 ? "2,3" : i == 1 ? "3,2" : i == 2 ? "3,4" : i == 3 ? "4,3" : ''
            yellow[i].index = -1;
            this.setState({ playerA: yellow })
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerCPath[toIndex];
            this.setState({ playerC: prevState });
          } else {
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerCPath[toIndex];
            this.setState({ playerC: prevState });
          }
        }
      }
      // FOR RED COIN
      for (var i = 0; i < 4; i++) {
        if (red[i].pos == "6,1" || red[i].pos == "2,6" || red[i].pos == "1,8" || red[i].pos == "6,12" || red[i].pos == "8,13" || red[i].pos == "12,8" || red[i].pos == "13,8" || red[i].pos == "8,2") {
          prevState[coinIndex].index = toIndex;
          prevState[coinIndex].pos = playerCPath[toIndex];
          this.setState({ playerC: prevState });
        } else {
          if (cPath == red[i].pos) {
            red[i].pos = i == 0 ? "2,11" : i == 1 ? "3,10" : i == 2 ? "3,12" : i == 3 ? "4,11" : ''
            red[i].index = -1;
            this.setState({ playerB: red })
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerCPath[toIndex];
            this.setState({ playerC: prevState });
          } else {
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerCPath[toIndex];
            this.setState({ playerC: prevState });
          }
        }
      }

    } else if (player === 'd') {
      let prevState = [...this.state.playerD];
      let toIndex = prevState[coinIndex].index + indexToAdd;

      let dPath = playerDPath[toIndex];
      let yellow = [...this.state.playerA];
      let red = [...this.state.playerB];
      let pink = [...this.state.playerC]


      // FOR YELLOW
      for (var i = 0; i < 4; i++) {
        if (yellow[i].pos == "6,1" || yellow[i].pos == "2,6" || yellow[i].pos == "1,8" || yellow[i].pos == "6,12" || yellow[i].pos == "8,13" || yellow[i].pos == "12,8" || yellow[i].pos == "13,8" || yellow[i].pos == "8,2") {
          prevState[coinIndex].index = toIndex;
          prevState[coinIndex].pos = playerDPath[toIndex];
          this.setState({ playerD: prevState });
        } else {
          if (dPath == yellow[i].pos) {
            yellow[i].pos = i == 0 ? "2,3" : i == 1 ? "3,2" : i == 2 ? "3,4" : i == 3 ? "4,3" : ''
            yellow[i].index = -1;
            this.setState({ playerA: yellow })
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerDPath[toIndex];
            this.setState({ playerD: prevState });
          } else {
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerDPath[toIndex];
            this.setState({ playerD: prevState });
          }
        }
      }

      // FOR RED COIN
      for (var i = 0; i < 4; i++) {
        if (red[i].pos == "6,1" || red[i].pos == "2,6" || red[i].pos == "1,8" || red[i].pos == "6,12" || red[i].pos == "8,13" || red[i].pos == "12,8" || red[i].pos == "13,8" || red[i].pos == "8,2") {
          prevState[coinIndex].index = toIndex;
          prevState[coinIndex].pos = playerDPath[toIndex];
          this.setState({ playerD: prevState });
        } else {

          if (dPath == red[i].pos) {
            red[i].pos = i == 0 ? "2,11" : i == 1 ? "3,10" : i == 2 ? "3,12" : i == 3 ? "4,11" : ''
            red[i].index = -1;
            this.setState({ playerB: red })
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerDPath[toIndex];
            this.setState({ playerD: prevState });
          } else {
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerDPath[toIndex];
            this.setState({ playerD: prevState });
          }

        }

      }

      // FOR PINK COIN
      for (var i = 0; i < 4; i++) {
        if (pink[i].pos == "6,1" || pink[i].pos == "2,6" || pink[i].pos == "1,8" || pink[i].pos == "6,12" || pink[i].pos == "8,13" || pink[i].pos == "12,8" || pink[i].pos == "13,8" || pink[i].pos == "8,2") {
          prevState[coinIndex].index = toIndex;
          prevState[coinIndex].pos = playerDPath[toIndex];
          this.setState({ playerD: prevState });
        } else {
          if (dPath == pink[i].pos) {
            pink[i].pos = i == 0 ? "10,11" : i == 1 ? "11,10" : i == 2 ? "11,12" : i == 3 ? "12,11" : ''
            pink[i].index = -1;
            this.setState({ playerC: pink })
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerDPath[toIndex];
            this.setState({ playerD: prevState });
          } else {
            prevState[coinIndex].index = toIndex;
            prevState[coinIndex].pos = playerDPath[toIndex];
            this.setState({ playerD: prevState });
          }
        }
      }
    }
  }

  rollADie() {
    let currentTurn = this.state.nextTurn || 'a';
    let toPosition = Math.floor(Math.random() * 6) + 1;
    //nextTurn
    let nextTurn = currentTurn;
    if (toPosition !== 6) {
      nextTurn = currentTurn === 'a' ? 'b' : currentTurn === 'b' ? 'c' : currentTurn === 'c' ? 'd' : 'a';
    }
    // Automate coin movement when only one coin available
    // this.moveCoin(currentTurn, 1, 0, toPosition);

    if (this.checkValidMoveAvailable(currentTurn, toPosition)) {
      this.setState({ nextTurn: nextTurn, turn: currentTurn, currentRoll: toPosition, rollEnabled: false });
    } else {
      this.setState({ nextTurn: nextTurn, turn: currentTurn, currentRoll: toPosition, rollEnabled: true });
    }
  }
  checkValidMoveAvailable(player, indexToAdd) {
    let playerCoins = player === 'a' ? this.state.playerA : player === 'b' ? this.state.playerB : player === 'c' ? this.state.playerC : player === 'd' ? this.state.playerD : [];
    let validCoin = find(playerCoins, (coin) => {
      return (coin.index !== -1 && (coin.index + indexToAdd) <= 55)
        || (coin.index === -1 && indexToAdd === 6);
    });
    return validCoin;
  }
  render() {
    let renderRow = () => {
      return map(range(0, data[0]), (r) => {
        return (
          <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
            {map(range(0, data[1]), (c) => {
              let { coinColor, player, coin, index } = this.checkCoinPosition(r, c);
              return <View style={{
                borderColor: (r < 6 && c < 6) ||
                  (r > 8 && c < 6) ||
                  (r < 6 && c > 8) ||
                  (r > 8 && c > 8) ? '#FFF' : '#000',
                borderWidth: 1,
                flex: 1,
                alignSelf: 'stretch',
                backgroundColor: colors
                  && colors[r + ',' + c] && colors[r + ',' + c].color
                  ? colors[r + ',' + c].color : '#fff',
              }} >
                {coinColor ? <TouchableOpacity
                  onPress={() => {
                    if (player && player.toLowerCase() === this.state.turn && coin) {
                      let coinMoved = false;
                      if (((coin.index === -1 && this.state.currentRoll === 6) || coin.index !== -1)) {
                        let currentRoll = this.state.currentRoll;
                        currentRoll = coin.index === -1 && currentRoll === 6 ? 1 : currentRoll;
                        coinMoved = true;
                        this.moveCoin(player.toLowerCase(), index, 0, currentRoll);
                      }
                      let currentTurn = this.state.turn;
                      let nextTurn = currentTurn;
                      if (this.state.currentRoll !== 6) {
                        nextTurn = currentTurn === 'a' ? 'b' : currentTurn === 'b' ? 'c' : currentTurn === 'c' ? 'd' : 'a';
                      }
                      if (coinMoved || (!coinMoved && !this.checkValidMoveAvailable(currentTurn, this.state.currentRoll))) {
                        this.setState({ turn: nextTurn, currentRoll: '', rollEnabled: true });
                      }
                    }
                  }} style={{ backgroundColor: coinColor, borderWidth: 1, margin: 2, borderRadius: 10, flex: 1 }} >
                  <Text>{player + (index + 1)}</Text>
                </TouchableOpacity> : <View />}
                {/* <Text>{r + '  ' + c}</Text> */}
              </View>;
            })}
          </View>
        );
      });
    };
    return (
      <View style={{ height: height * 0.6, width: width * 0.95, alignItems: 'center', justifyContent: 'center' }}>
        {renderRow()}
        <TouchableOpacity onPress={() => {
          this.state.rollEnabled && this.rollADie();
        }}
          disabled={!this.state.rollEnabled}
          style={{
            marginTop: 16,
            height: 50,
            width: 150,
            backgroundColor: '#B40',
            borderColor: '#F00',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{
            color: '#FFF',
            fontSize: 16,
            fontWeight: 'bold',
          }}>Press to Roll</Text>
        </TouchableOpacity>
        {this.state.nextTurn ? <Text style={{ marginTop: 16 }}>{this.state.currentRoll ? `Player ${this.state.turn} Got ${this.state.currentRoll} ${this.checkValidMoveAvailable(this.state.turn, this.state.currentRoll) ? '😃' : '😔'}. Next roll by ${this.state.nextTurn}`
          : ` Next roll by ${this.state.nextTurn}`}</Text> : <View />}
      </View>
    );
  }
}

export default Board;