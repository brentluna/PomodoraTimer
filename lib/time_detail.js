import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {timeDetailStyles} from './styles';

const TimeDetail = ({time, working}) => (
	<View style={timeDetailStyles.container} >
		<Text style={timeDetailStyles.time} >
			{time}
		</Text>
		<Text>
			{working}
		</Text>

	</View>
);




export default TimeDetail;