import React, { Component } from 'react';
import { Image, Dimensions, TouchableWithoutFeedback, View } from 'react-native';

const DWidth = Dimensions.get('window').width;

export class YellowPointers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Y1index: 0,
      Y2index: 0,
      Y3index: 0,
      Y4index: 0,
      Y1left: '25%',
      Y2left: '17%',
      Y3left: '17%',
      Y4left: '9%',
      Y1bottom: '20%',
      Y2bottom: '28%',
      Y3bottom: '12%',
      Y4bottom: '20%'
    }
  }

  movePos = (name, dice) => {

    switch (name) {
      case 'Y1':
        this.state.Y1index < 56 ?
          this.setState({
            Y1index: this.state.Y1index + 1,
            Y1left: Path[this.state.Y1index].left,
            Y1bottom: Path[this.state.Y1index].bottom
          }) :
          this.setState({
            Y1left: Path[this.state.Y1index].left,
            Y1bottom: Path[this.state.Y1index].bottom
          })
        break;
      case 'Y2':
        this.state.Y2index < 56 ?
          this.setState({
            Y2index: this.state.Y2index + 1,
            Y2left: Path[this.state.Y2index].left,
            Y2bottom: Path[this.state.Y2index].bottom
          }) :
          this.setState({
            Y2left: Path[this.state.Y2index].left,
            Y2bottom: Path[this.state.Y2index].bottom
          })
        break;
      case 'Y3':
        this.state.Y3index < 56 ?
          this.setState({
            Y3index: this.state.Y3index + 1,
            Y3left: Path[this.state.Y3index].left,
            Y3bottom: Path[this.state.Y3index].bottom
          }) :
          this.setState({
            Y3left: Path[this.state.Y3index].left,
            Y3bottom: Path[this.state.Y3index].bottom
          })
        break;
      case 'Y4':
        this.state.Y4index < 56 ?
          this.setState({
            Y4index: this.state.Y4index + 1,
            Y4left: Path[this.state.Y4index].left,
            Y4bottom: Path[this.state.Y4index].bottom
          }) :
          this.setState({
            Y4left: Path[this.state.Y4index].left,
            Y4bottom: Path[this.state.Y4index].bottom
          })
        break;
    } // switch name


  }

  render() {

    return (
      <View style={{ flex: 1, width: DWidth * 0.95, height: DWidth * 0.95, position: 'absolute' }}>
        {/* <TouchableWithoutFeedback onPress={() => this.movePos('Y1', this.props.dice)} >
          <Image source={require('../../../media/images/pointeryellow.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.Y1left,
            bottom: this.state.Y1bottom
          }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.movePos('Y2', this.props.dice)} >
          <Image source={require('../../../media/images/pointeryellow.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.Y2left,
            bottom: this.state.Y2bottom
          }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.movePos('Y3', this.props.dice)} >
          <Image source={require('../../../media/images/pointeryellow.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.Y3left,
            bottom: this.state.Y3bottom
          }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.movePos('Y4', this.props.dice)} >
          <Image source={require('../../../media/images/pointeryellow.png')} style={{
            width: DWidth * 0.08,
            height: DWidth * 0.08,
            position: 'absolute',
            zIndex: 1,
            left: this.state.Y4left,
            bottom: this.state.Y4bottom
          }} />
        </TouchableWithoutFeedback> */}
      </View>
    );
  }
}

const Path = [
  // {left: '39%', bottom: '5%'}, // yellow before start
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
  { left: '2%', bottom: '55%' },
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
  { left: '89.5%', bottom: '42%' },
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
  { left: '45.5%', bottom: '11%' },
  { left: '45.5%', bottom: '17%' },
  { left: '45.5%', bottom: '24%' },
  { left: '45.5%', bottom: '30%' },
  { left: '45.5%', bottom: '36%' },
  { left: '45.5%', bottom: '42%' } // yellow finish
]
