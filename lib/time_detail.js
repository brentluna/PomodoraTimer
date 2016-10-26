import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {timeDetailStyles} from './styles';

const TimeDetail = ({started, ended, working}) => (
	<View style={working === 'Working' ? timeDetailStyles.workingContainer : timeDetailStyles.breakContainer} >
		<Text style={timeDetailStyles.time} >
			{started}
			{ended}
		</Text>
		<Text style={timeDetailStyles.time}>
			{working}
		</Text>

	</View>
);




export default TimeDetail;