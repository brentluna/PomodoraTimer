import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {timeDetailStyles} from './styles';

const TimeDetail = ({started, ended, working}) => (
	<View style={working === 'Working' ? timeDetailStyles.workingContainer : timeDetailStyles.breakContainer} >
		<View>
			<Text style={timeDetailStyles.time} >
				Activity
			</Text>
			<Text style={timeDetailStyles.time} >
				{working}
			</Text>
		</View>
		<View>
			<Text style={timeDetailStyles.time} >
				Started	
			</Text>
			<Text style={timeDetailStyles.time} >
				{started}
			</Text>
		</View>
		<View>
			<Text style={timeDetailStyles.time} >
				Ended	
			</Text>
			<Text style={timeDetailStyles.time} >
				{ended}
			</Text>
		</View>
	</View>
);




export default TimeDetail;