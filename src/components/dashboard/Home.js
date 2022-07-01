import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useLocal } from '../../hook/useLocal';

// Styles
import styles from '@components/dashboard/styles';

const Dashboard = props => {
	const local = useLocal();

	return (
		<View style={styles.homeContainer}>
			<View style={styles.mainCardView}>
				<Text style={styles.authUser}>
					Nwae Nandar Aung
				</Text>
				<View style={styles.authEmailSection}>
					<Text style={styles.authEmailLabel}>{local.email} :</Text>
					<Text>{' '}</Text>
					<Text style={styles.authEmail}>
						{props.authEmail}
					</Text>
				</View>
			</View>
			<View style={styles.logoutContainer}>
				<TouchableOpacity
					style={styles.logoutButtonContainer}
					onPress={props.action}
					activeOpacity={0.8}>
					<Text style={styles.logoutButtonText}>{props.buttonText}</Text>
				</TouchableOpacity>
			</View>

		</View>
	);
};

export default Dashboard