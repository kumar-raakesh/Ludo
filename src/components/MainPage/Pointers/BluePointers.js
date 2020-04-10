import React, { Component } from 'react';
import { Image, Dimensions, TouchableWithoutFeedback, View } from 'react-native';

const DWidth = Dimensions.get('window').width;

export class BluePointers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      B1index: 0,
      B2index: 0,
      B3index: 0,
      B4index: 0,
      B1left: '74%',
      B2left: '66%',
      B3left: '82%',
      B4left: '74%',
      B1bottom: '28%',
      B2bottom: '20%',
      B3bottom: '20%',
      B4bottom: '12%'
    }
  }

  movePos = (posisi, BNum) => {
    console.log("xxxxx", posisi, BNum)
    switch (posisi) {
      case 'gotSix':
        switch (BNum) {
          case 'B1':
            this.state.B1index < 56 ?
              this.setState({
                B1index: this.state.B1index + 1,
                B1left: Path[this.state.B1index].left,
                B1bottom: Path[this.state.B1index].bottom
              }) :
              this.setState({
                B1left: Path[this.state.B1index].left,
                B1bottom: Path[this.state.B1index].bottom
              })
            break;
          case 'B2':
            this.state.B2index < 56 ?
              this.setState({
                B2index: this.state.B2index + 1,
                B2left: Path[this.state.B2index].left,
                B2bottom: Path[this.state.B2index].bottom
              }) :
              this.setState({
                B2left: Path[this.state.B2index].left,
                B2bottom: Path[this.state.B2index].bottom
              })
            break;
          case 'B3':
            this.state.B3index < 56 ?
              this.setState({
                B3index: this.state.B3index + 1,
                B3left: Path[this.state.B3index].left,
                B3bottom: Path[this.state.B3index].bottom
              }) :
              this.setState({
                B3left: Path[this.state.B3index].left,
                B3bottom: Path[this.state.B3index].bottom
              })
            break;
          case 'B4':
            this.state.B4index < 56 ?
              this.setState({
                B4index: this.state.B4index + 1,
                B4left: Path[this.state.B4index].left,
                B4bottom: Path[this.state.B4index].bottom
              }) :
              this.setState({
                B4left: Path[this.state.B4index].left,
                B4bottom: Path[this.state.B4index].bottom
              })
            break;
        }
        break;
    }
  }

  render() {

    return (
      <View style={{ flex: 1, width: DWidth * 0.95, height: DWidth * 0.95, position: 'absolute' }}>
        <TouchableWithoutFeedback onPress={() => this.movePos(this.props.dice, 'B1')} >
          <Image source={require('../../../media/images/pointerblue.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.B1left,
            bottom: this.state.B1bottom
          }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.movePos(this.props.dice, 'B2')} >
          <Image source={require('../../../media/images/pointerblue.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.B2left,
            bottom: this.state.B2bottom
          }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.movePos(this.props.dice, 'B3')} >
          <Image source={require('../../../media/images/pointerblue.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.B3left,
            bottom: this.state.B3bottom
          }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.movePos(this.props.dice, 'B4')} >
          <Image source={require('../../../media/images/pointerblue.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.B4left,
            bottom: this.state.B4bottom
          }} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const Path = [
  // {left: '89.5%', bottom: '42%'}, // blue before start
  { left: '83.5%', bottom: '42%' }, // blue start
  // { left: '77%', bottom: '42%' },
  // { left: '71%', bottom: '42%' },
  // { left: '64.5%', bottom: '42%' },
  // { left: '58%', bottom: '42%' },
  // { left: '52%', bottom: '36%' },
  // { left: '52%', bottom: '30%' },
  // { left: '52%', bottom: '24%' },
  // { left: '52%', bottom: '17%' }, // yellow safe
  // { left: '52%', bottom: '11%' },
  // { left: '52%', bottom: '5%' },
  // { left: '45.5%', bottom: '5%' }, // yellow arrow
  // { left: '39%', bottom: '5%' },
  // { left: '39%', bottom: '11%' }, // yellow start
  // { left: '39%', bottom: '17%' },
  // { left: '39%', bottom: '24%' },
  // { left: '39%', bottom: '30%' },
  // { left: '39%', bottom: '36%' },
  // { left: '33%', bottom: '42%' },
  // { left: '27%', bottom: '42%' },
  // { left: '21%', bottom: '42%' },
  // { left: '14%', bottom: '42%' }, // green safe
  // { left: '8%', bottom: '42%' },
  // { left: '2%', bottom: '42%' },
  // { left: '2%', bottom: '48%' }, // green arrow
  // { left: '2%', bottom: '55%' },
  // { left: '8%', bottom: '55%' }, // green start
  // { left: '14%', bottom: '55%' },
  // { left: '21%', bottom: '55%' },
  // { left: '27%', bottom: '55%' },
  // { left: '33%', bottom: '55%' },
  // { left: '39%', bottom: '61%' },
  // { left: '39%', bottom: '67%' },
  // { left: '39%', bottom: '74%' },
  // { left: '39%', bottom: '80%' }, // red safe
  // { left: '39%', bottom: '87%' },
  // { left: '39%', bottom: '93%' },
  // { left: '45.5%', bottom: '93%' }, // red arrow
  // { left: '52%', bottom: '93%' },
  // { left: '52%', bottom: '87%' }, // red start
  // { left: '52%', bottom: '80%' },
  // { left: '52%', bottom: '74%' },
  // { left: '52%', bottom: '67%' },
  // { left: '52%', bottom: '61%' },
  // { left: '58%', bottom: '55%' },
  // { left: '64.5%', bottom: '55%' },
  // { left: '71%', bottom: '55%' },
  // { left: '77%', bottom: '55%' }, // blue safe
  // { left: '83.5%', bottom: '55%' },
  // { left: '89.5%', bottom: '55%' },
  // { left: '89.5%', bottom: '49%' }, // blue arrow
  // { left: '83.5%', bottom: '49%' },
  // { left: '77%', bottom: '49%' },
  // { left: '71%', bottom: '49%' },
  // { left: '64.5%', bottom: '49%' },
  // { left: '58.5%', bottom: '49%' },
  // { left: '52%', bottom: '49%' } // blue finish
]
