import React, { Component } from 'react';
import { Image, Dimensions, TouchableWithoutFeedback, View } from 'react-native';

const DWidth = Dimensions.get('window').width;

export class RedPointers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      R1index: 0,
      R2index: 0,
      R3index: 0,
      R4index: 0,
      R1left: '66%',
      R2left: '74%',
      R3left: '74%',
      R4left: '82%',
      R1bottom: '76.5%',
      R2bottom: '68.5%',
      R3bottom: '84.5%',
      R4bottom: '76.5%'
    }
  }

  movePos = (posisi, RNum) => {
    switch (posisi) {
      case 'gotSix':
        switch (RNum) {
          case 'R1':
            this.state.R1index < 56 ?
              this.setState({
                R1index: this.state.R1index + 1,
                R1left: Path[this.state.R1index].left,
                R1bottom: Path[this.state.R1index].bottom
              }) :
              this.setState({
                R1left: Path[this.state.R1index].left,
                R1bottom: Path[this.state.R1index].bottom
              })
            break;
          case 'R2':
            this.state.R2index < 56 ?
              this.setState({
                R2index: this.state.R2index + 1,
                R2left: Path[this.state.R2index].left,
                R2bottom: Path[this.state.R2index].bottom
              }) :
              this.setState({
                R2left: Path[this.state.R2index].left,
                R2bottom: Path[this.state.R2index].bottom
              })
            break;
          case 'R3':
            this.state.R3index < 56 ?
              this.setState({
                R3index: this.state.R3index + 1,
                R3left: Path[this.state.R3index].left,
                R3bottom: Path[this.state.R3index].bottom
              }) :
              this.setState({
                R3left: Path[this.state.R3index].left,
                R3bottom: Path[this.state.R3index].bottom
              })
            break;
          case 'R4':
            this.state.R4index < 56 ?
              this.setState({
                R4index: this.state.R4index + 1,
                R4left: Path[this.state.R4index].left,
                R4bottom: Path[this.state.R4index].bottom
              }) :
              this.setState({
                R4left: Path[this.state.R4index].left,
                R4bottom: Path[this.state.R4index].bottom
              })
            break;
        }
        break;
    }
  }

  render() {

    return (
      <View style={{ flex: 1, width: DWidth * 0.95, height: DWidth * 0.95, position: 'absolute' }}>
        <TouchableWithoutFeedback onPress={() => this.movePos(this.props.dice, 'R1')} >
          <Image source={require('../../../media/images/pointerred.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.R1left,
            bottom: this.state.R1bottom
          }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.movePos(this.props.dice, 'R2')} >
          <Image source={require('../../../media/images/pointerred.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.R2left,
            bottom: this.state.R2bottom
          }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.movePos(this.props.dice, 'R3')} >
          <Image source={require('../../../media/images/pointerred.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.R3left,
            bottom: this.state.R3bottom
          }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.movePos(this.props.dice, 'R4')} >
          <Image source={require('../../../media/images/pointerred.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.R4left,
            bottom: this.state.R4bottom
          }} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const Path = [
  // {left: '52%', bottom: '93%'}, // red before start
  { left: '52%', bottom: '87%' }, // red start
  { left: '52%', bottom: '80%' },
  { left: '52%', bottom: '74%' },
  { left: '52%', bottom: '67%' },
  { left: '52%', bottom: '61%' },
  { left: '58%', bottom: '55%' },
  { left: '64.5%', bottom: '55%' },
  { left: '71%', bottom: '55%' },
  { left: '77%', bottom: '55%' }, // blue safe
  { left: '83.5%', bottom: '55%' },
  { left: '89.5%', bottom: '55%' },
  { left: '89.5%', bottom: '49%' }, // blue arrow
  { left: '89.5%', bottom: '42%' }, // blue before start
  { left: '83.5%', bottom: '42%' }, // blue start
  { left: '77%', bottom: '42%' },
  { left: '71%', bottom: '42%' },
  { left: '64.5%', bottom: '42%' },
  { left: '58%', bottom: '42%' },
  { left: '52%', bottom: '36%' },
  { left: '52%', bottom: '30%' },
  { left: '52%', bottom: '24%' },
  { left: '52%', bottom: '17%' }, // yellow safe
  { left: '52%', bottom: '11%' },
  { left: '52%', bottom: '5%' },
  { left: '45.5%', bottom: '5%' }, // yellow arrow
  { left: '39%', bottom: '5%' }, // yellow before start
  { left: '39%', bottom: '11%' }, // yellow start
  { left: '39%', bottom: '17%' },
  { left: '39%', bottom: '24%' },
  { left: '39%', bottom: '30%' },
  { left: '39%', bottom: '36%' },
  { left: '33%', bottom: '42%' },
  { left: '27%', bottom: '42%' },
  { left: '21%', bottom: '42%' },
  { left: '14%', bottom: '42%' }, // green safe
  { left: '8%', bottom: '42%' },
  { left: '2%', bottom: '42%' },
  { left: '2%', bottom: '48%' }, // green arrow
  { left: '2%', bottom: '55%' }, // green before start
  { left: '8%', bottom: '55%' }, // green start
  { left: '14%', bottom: '55%' },
  { left: '21%', bottom: '55%' },
  { left: '27%', bottom: '55%' },
  { left: '33%', bottom: '55%' },
  { left: '39%', bottom: '61%' },
  { left: '39%', bottom: '67%' },
  { left: '39%', bottom: '74%' },
  { left: '39%', bottom: '80%' }, // red safe
  { left: '39%', bottom: '87%' },
  { left: '39%', bottom: '93%' },
  { left: '45.5%', bottom: '93%' }, // red arrow
  { left: '45.5%', bottom: '86.5%' },
  { left: '45.5%', bottom: '81%' },
  { left: '45.5%', bottom: '74.5%' },
  { left: '45.5%', bottom: '68%' },
  { left: '45.5%', bottom: '62%' },
  { left: '45.5%', bottom: '55.5%' } // red finish
]
