import React from 'react';
import {Text, View, StyleSheet, TouchableNativeFeedback, Alert, ToastAndroid} from 'react-native';
import TimeList from './time_list.js';
import {clockStyles} from './styles';
import BackgroundTimer from 'react-native-background-timer';


class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {totalSeconds: 3, break: false, running: false, times: [(new Date()).toDateString()]};
		this.renderTime = this.renderTime.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.updatTime = this.updateTime.bind(this);
	}





	alertNotif() {
		Alert.alert(
		  'Alert Title',
		  'My alert Message',
		  [
		   {text: 'Pause', onPress: () => console.log('paused')},
		   {text: 'Okay', onPress: () => console.log('okay')}
		  ]
		)
	}

	updateTime() {
		let newSec = this.state.totalSeconds - 1;
		let newBreak;
		if (newSec === -1) {
			// this.alertNotif();
			ToastAndroid.show(this.state.break ? 'Get To Work' : 'Take A Break', ToastAndroid.LONG);
			let newTimes = this.state.times;
			let date = new Date();
			newTimes.push(date.toDateString());
			this.setState({times: newTimes});
			if (this.state.break) {
				newSec = 10;
				newBreak = false;
			} else {
				newSec = 3;
				newBreak = true;
			}
			
			this.setState({break: newBreak, totalSeconds: newSec});
		} else {
			this.setState({totalSeconds: newSec});
		}
	}

	startTimer() {
		if (!this.state.running) {
			this.setState({running: true});
			const timerInterval = BackgroundTimer.setInterval(() => {
				this.updateTime();
				if (!this.state.running) {
					BackgroundTimer.clearInterval(timerInterval);
				}
			}, 1000);
		} else {
			this.setState({running: false});
		}
	}

	renderTime() {
		let mins = Math.floor(this.state.totalSeconds / 60);
		let secs = this.state.totalSeconds % 60;
		let result = mins < 10 ? `0${mins}` : `${mins}`;
		if (secs < 10) {
			result += `:0${secs}`;
		} else {
			result += `:${secs}`;
		}
		return result;
	}

	render() {

		return(
			<View style={{flex: 1}}>

				<View>
					<Text style={clockStyles.clock}>
						{this.renderTime()}
					</Text>
				</View>

				<TouchableNativeFeedback onPress={this.startTimer} 
					background={TouchableNativeFeedback.SelectableBackground()}>
					<View>
						<Text style={clockStyles.button}>
							{this.state.running ? 'Pause' : 'Start'}	
						</Text>
					</View>
				</TouchableNativeFeedback>

				<View>
					<TimeList times={this.state.times} />
				</View>

			</View>
		)
	}
}





export default Clock;