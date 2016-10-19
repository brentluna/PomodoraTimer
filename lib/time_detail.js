import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TimeDetail = ({time}) => (
	<View style={styles.container} >
		<Text style={styles.time} >
			{time}
		</Text>
	</View>
);


const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 50,
		backgroundColor: "#eee"
	},
	time: {
		fontSize: 30,
		textAlign: 'center'
	}
});

export default TimeDetail;