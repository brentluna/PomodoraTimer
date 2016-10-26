import React from 'react';
import {Text, View, StyleSheet, TouchableNativeFeedback, Alert, ToastAndroid} from 'react-native';
import TimeList from './time_list.js';
import {clockStyles} from './styles';
import BackgroundTimer from 'react-native-background-timer';


class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {totalSeconds: 5, break: false, running: false, times: []};
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
			
			ToastAndroid.show(this.state.break ? 'Get To Work' : 'Take A Break', ToastAndroid.LONG);

			let newTimes = this.state.times;
			let prevTime = newTimes.pop();

			let date = new Date();
			date = date.toLocaleTimeString();
			prevTime.ended = date;
			newTimes.push(prevTime)
			newTimes.push({started: date, ended: '--:--', working: (this.state.break ? 'Break' : 'Working')});
			this.setState({times: newTimes});
			if (this.state.break) {
				newSec = 5;
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
			if (this.state.times.length === 0) {
				let date = new Date();
				date = date.toLocaleTimeString();

				let firstTime = [{started: date, ended: '--:--', working: (this.state.break ? 'Break' : 'Working') }];
				this.setState({times: firstTime, break: true});
			}
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
			<View style={clockStyles.mainContainer}>

				<View style={clockStyles.clockContainer}>
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