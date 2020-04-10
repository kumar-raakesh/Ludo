import React, { Component } from 'react';
import { Image, Dimensions, TouchableWithoutFeedback, View } from 'react-native';

const DWidth = Dimensions.get('window').width;

export class GreenPointers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      G1index: 0,
      G2index: 0,
      G3index: 0,
      G4index: 0,
      G1left: '17%',
      G2left: '25%',
      G3left: '17%',
      G4left: '9%',
      G1bottom: '68.5%',
      G2bottom: '76.5%',
      G3bottom: '84.5%',
      G4bottom: '76.5%'
    }
  }

  movePos = (posisi, GNum) => {
    switch (posisi) {
      case 'gotSix':
        switch (GNum) {
          case 'G1':
            this.state.G1index < 56 ?
              this.setState({
                G1index: this.state.G1index + 1,
                G1left: Path[this.state.G1index].left,
                G1bottom: Path[this.state.G1index].bottom
              }) :
              this.setState({
                G1left: Path[this.state.G1index].left,
                G1bottom: Path[this.state.G1index].bottom
              })
            break;
          case 'G2':
            this.state.G2index < 56 ?
              this.setState({
                G2index: this.state.G2index + 1,
                G2left: Path[this.state.G2index].left,
                G2bottom: Path[this.state.G2index].bottom
              }) :
              this.setState({
                G2left: Path[this.state.G2index].left,
                G2bottom: Path[this.state.G2index].bottom
              })
            break;
          case 'G3':
            this.state.G3index < 56 ?
              this.setState({
                G3index: this.state.G3index + 1,
                G3left: Path[this.state.G3index].left,
                G3bottom: Path[this.state.G3index].bottom
              }) :
              this.setState({
                G3left: Path[this.state.G3index].left,
                G3bottom: Path[this.state.G3index].bottom
              })
            break;
          case 'G4':
            this.state.G4index < 56 ?
              this.setState({
                G4index: this.state.G4index + 1,
                G4left: Path[this.state.G4index].left,
                G4bottom: Path[this.state.G4index].bottom
              }) :
              this.setState({
                G4left: Path[this.state.G4index].left,
                G4bottom: Path[this.state.G4index].bottom
              })
            break;
        }
        break;
    }
  }

  render() {

    return (
      <View style={{ flex: 1, width: DWidth * 0.95, height: DWidth * 0.95, position: 'absolute' }}>
        <TouchableWithoutFeedback onPress={() => this.movePos(this.props.dice, 'G1')} >
          <Image source={require('../../../media/images/pointergreen.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.G1left,
            bottom: this.state.G1bottom
          }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.movePos(this.props.dice, 'G2')} >
          <Image source={require('../../../media/images/pointergreen.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.G2left,
            bottom: this.state.G2bottom
          }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.movePos(this.props.dice, 'G3')} >
          <Image source={require('../../../media/images/pointergreen.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.G3left,
            bottom: this.state.G3bottom
          }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.movePos(this.props.dice, 'G4')} >
          <Image source={require('../../../media/images/pointergreen.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.G4left,
            bottom: this.state.G4bottom
          }} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const Path = [
  // {left: '2%', bottom: '55%'}, // green before start
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
  { left: '52%', bottom: '93%' },
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
  { left: '8%', bottom: '48%' },
  { left: '14%', bottom: '48%' },
  { left: '20.5%', bottom: '48%' },
  { left: '26.5%', bottom: '48%' },
  { left: '33%', bottom: '48%' },
  { left: '39.5%', bottom: '48%' } // green finish
]
