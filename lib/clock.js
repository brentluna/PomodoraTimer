import React from 'react';
import {Text, View, StyleSheet, TouchableNativeFeedback} from 'react-native';

class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {totalSeconds: 60, running: false};
		this.renderTime = this.renderTime.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.updatTime = this.updateTime.bind(this);
	}

	updateTime() {
		let newSec = this.state.totalSeconds - 1;
		this.setState({totalSeconds: newSec});
	}

	startTimer() {
		if (!this.state.running) {
			this.setState({running: true});
			const timerInterval = setInterval(() => {
				this.updateTime();
				if (!this.state.running) {
					clearInterval(timerInterval);
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
					<Text style={styles.clock}>

						{this.renderTime()}
					</Text>
					</View>
				<TouchableNativeFeedback onPress={this.startTimer} 
					background={TouchableNativeFeedback.SelectableBackground()}>
					<View>
						<Text style={styles.button}>
							{this.state.running ? 'Pause' : 'Start'}	
						</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	clock: {
		fontSize: 44,
		padding: 20,
		margin: 20,
		flex: 2, 
		backgroundColor: 'powderblue',
		width: 200,
		height: 100,
		textAlign: 'center',
		justifyContent: 'space-around',
		flexDirection: 'column'
	}, 
	button: {
		flex: 1,
		fontSize: 30,
		padding: 10, 
		alignItems: 'center',
		borderWidth: 0.5,
		borderColor: 'black',
		textAlign: 'center'
	}
});

export default Clock;