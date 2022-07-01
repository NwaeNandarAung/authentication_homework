import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../pages/splash/styles';

const Splash = () => {

	return (
		<View style={styles.logoContainer}>
			<Image source={require('../../../assets/images/logo.png')} style={styles.logoImage}
			></Image>
			<View style={styles.logoTextContainer}>
				<Text>Developer</Text>
				<Text>{' '}</Text>
				<Text style={styles.logoText}>Nwae Nandar Aung</Text>
			</View>
		</View>
	)
}

export default Splash