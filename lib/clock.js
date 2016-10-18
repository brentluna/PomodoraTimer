import React from 'react';
import {Text, View, StyleSheet, TouchableNativeFeedback} from 'react-native';

class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {totalSeconds: 1500};
		this.renderTime = this.renderTime.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.updatTime = this.updateTime.bind(this);
	}

	updateTime() {
		let newSec = this.state.totalSeconds - 1;
		this.setState({totalSeconds: newSec});
	}

	startTimer() {
		const timerInterval = setInterval(() => {
			this.updateTime();
			if (this.state.totalSeconds <= 0) {
				clearInterval(timerInterval);
			}
		}, 1000);
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
			<View>
				<TouchableNativeFeedback onPress={this.startTimer}>
					<View>
					<Text style={styles.clock}>

						{this.renderTime()}
					</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	clock: {
		fontSize: 34,
		margin: 10
	}
});

export default Clock;