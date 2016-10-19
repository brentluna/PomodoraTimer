import React from 'react';
import {ListView, Text, View, StyleSheet} from 'react-native';
import TimeDetail from './time_detail';

class TimeList extends React.Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(this.props.times)
		}

	}

	// renderRows() {

	// 	this.props.times.forEach(time => {

	// 	});
	// }

	render() {
		return(
			<ListView
				dataSource={this.state.dataSource}
				renderRow={(data) => <TimeDetail time={data}/>}
				style={styles.container}
				renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />} 
			/>
		);

	}
}
const styles = StyleSheet.create({
	container: {
		margin: 20
	}, 
	separator: {
		flex: 1,
		height: StyleSheet.hairlineWidth,
		backgroundColor: 'black'
	}
})
export default TimeList;