import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useLocal } from '../../hook/useLocal';

import styles from '@components/auth/styles';

const Back = props => {
	const local = useLocal();

	return (
		<View style={styles.backContainer}>
			<TouchableOpacity style={styles.backButton}
				onPress={props.action}
				activeOpacity={0.8}>
				<Text style={styles.backText}>{local.back}</Text>
			</TouchableOpacity>
		</View>
	);
}

export default Back