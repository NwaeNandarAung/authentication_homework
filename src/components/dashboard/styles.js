import { StyleSheet, Dimensions } from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
	homeContainer: {
		backgroundColor: '#dda0dd',
		height: height,
	},

	mainCardView: {
		alignItems: 'center',
		backgroundColor: '#f0e68c',
		borderRadius: 20,
		marginTop: hp(10),
		marginHorizontal: wp(10),
		paddingTop: hp(10),
		paddingBottom: hp(10),
		elevation: 20,
	},

	authUser: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16,
		fontFamily: 'Raleway-VariableFont_wght'
	},

	authEmailSection: {
		flexDirection: 'row',
		paddingTop: hp(5),
	},

	authEmailLabel: {
		color: '#ccc',
	},

	authEmail: {
		color: '#dda0dd',
		fontWeight: 'bold',
		fontFamily: 'TitanOne-Regular'
	},

	logoutContainer: {
		alignItems: 'center',
	},

	logoutButtonContainer: {
		marginTop: hp(10),
		backgroundColor: '#fff',
		width: wp(80),
		paddingVertical: hp(1.8),
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: hp(1),
	},

	logoutButtonText: {
		color: '#f0e68c',
		fontWeight: 'bold'
	}
});

export default styles;