import {StyleSheet} from 'react-native';

export const listStyles = StyleSheet.create({
	container: {
		margin: 20
	}, 
	separator: {
		flex: 1,
		height: StyleSheet.hairlineWidth,
		backgroundColor: 'black'
	}
})


export const timeDetailStyles = StyleSheet.create({
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




export const clockStyles = StyleSheet.create({
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