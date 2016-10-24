import React from 'react';
import {ListView, Text, View, StyleSheet} from 'react-native';
import TimeDetail from './time_detail';
import {listStyles} from './styles';

class TimeList extends React.Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: this.ds.cloneWithRows(this.props.times)
		}

	}

	componentWillReceiveProps() {
		this.setState({dataSource: this.ds.cloneWithRows(this.props.times)})
	}


	render() {
		console.log(this.props.times)
		console.log(this.state.dataSource)
		return(
			<ListView
				dataSource={this.state.dataSource}
				renderRow={(data) => <TimeDetail time={data}/>}
				style={listStyles.container}
				renderSeparator={(sectionId, rowId) => <View key={rowId} style={listStyles.separator} />} 
			/>
		 );

	}
}

export default TimeList;