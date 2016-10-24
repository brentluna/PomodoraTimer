import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {timeDetailStyles} from './styles';

const TimeDetail = ({time, working}) => (
	<View style={working === 'Working' ? timeDetailStyles.workingContainer : timeDetailStyles.breakContainer} >
		<Text style={timeDetailStyles.time} >
			{time}
		</Text>
		<Text style={timeDetailStyles.time}>
			{working}
		</Text>

	</View>
);




export default TimeDetail;