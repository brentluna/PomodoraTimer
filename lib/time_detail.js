import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {timeDetailStyles} from './styles';

const TimeDetail = ({time}) => (
	<View style={timeDetailStyles.container} >
		<Text style={timeDetailStyles.time} >
			{time}
		</Text>
	</View>
);




export default TimeDetail;