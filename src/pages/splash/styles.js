import { StyleSheet, Dimensions } from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
	logoContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f0e68c'
	},
	logoTextContainer: {
		flexDirection: 'row',
		marginTop: hp(4),
	},
	logoText: {
		color: '#dda0dd',
	},
});

export default styles;