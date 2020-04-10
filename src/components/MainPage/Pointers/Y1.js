import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, TouchableWithoutFeedback, View } from 'react-native';
import { Path } from '../Path/Path'

const DWidth = Dimensions.get('window').width;

export class Y1 extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      left: '25%',
      bottom: '20%'
    }
  }

  movePos = (posisi) => {
    switch (posisi) {
      case 'gotSix':
        this.state.index < 56 ?
          this.setState({
            index: this.state.index + 1,
            left: Path[this.state.index].left,
            bottom: Path[this.state.index].bottom
          }) :
          this.setState({
            left: Path[this.state.index].left,
            bottom: Path[this.state.index].bottom
          })
        break;
    }
  }

  render() {

    return (
      <TouchableWithoutFeedback onPress={() => this.movePos(this.props.dice)} >
        <Image source={require('../../../media/images/pointeryellow.png')} style={{
          width: DWidth * 0.08,
          height: DWidth * 0.08,
          position: 'absolute',
          zIndex: 1,
          left: this.state.left,
          bottom: this.state.bottom
        }} />
      </TouchableWithoutFeedback>
    );
  }


}
