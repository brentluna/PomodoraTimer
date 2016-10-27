import {StyleSheet} from 'react-native';

export const listStyles = StyleSheet.create({
	container: {
		margin: 20, 
		borderWidth: 1, 
		maxHeight: 400
	}, 
	separator: {
		flex: 1,
		height: StyleSheet.hairlineWidth,
		backgroundColor: 'black'
	}
})


export const timeDetailStyles = StyleSheet.create({
	workingContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 300,
		height: 60,
		padding: 10,
		backgroundColor: "#E0F2F1"
	},
	breakContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 300, 
		height: 60,
		padding: 10,
		backgroundColor: '#FAFAFA'
	},
	time: {
		fontSize: 16,
		textAlign: 'center'
	}
});




export const clockStyles = StyleSheet.create({
	clock: {
		fontSize: 44,
		padding: 20,
		margin: 20,
		flex: 2, 
		width: 300,
		height: 100,
		textAlign: 'center',
		justifyContent: 'space-around',
		flexDirection: 'column'
	}, 
	button: {
		flex: 1,
		width: 150,
		fontSize: 30,
		padding: 10, 
		alignItems: 'center',
		borderWidth: 0.5,
		borderColor: 'black',
		textAlign: 'center'
	}, 
	buttonContainer: {
		flexDirection: 'row', 
		justifyContent: 'space-between'
	},
	clockContainer: {
		justifyContent: 'space-around'
	}, 
	mainContainer: {
		flex: 1
	}
});