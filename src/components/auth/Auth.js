import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {useLocal} from '../../hook/useLocal';

// Styles
import styles from './styles';

const Auth = props => {

  const local = useLocal();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={local.emailPlaceholder}
          style={styles.input}
          value={props.emailValue}
          onChangeText={props.onChangeEmail}
        />
      </View>

      {props.emailValue == '' ? (<TouchableOpacity disabled={true}
        style={styles.buttonDisableContainer}
        onPress={props.action}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableOpacity>) : (<TouchableOpacity
        style={styles.buttonContainer}
        onPress={props.action}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableOpacity>)
      }

      <View style={styles.accContainer}>
        {props.isLogin ? (
          <Text style={styles.info}>{local.noAccount} </Text>
        ) : (
          <Text style={styles.info}>{local.already}</Text>
        )}

        <TouchableOpacity onPress={props.infoAction}>
          <Text style={styles.infoExtend}>{props.infoText}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Developed by</Text>
        <Text>{' '}</Text>
        <Text style={styles.footerTextExtend}>Nwae Nandar Aung</Text>
      </View>
    </View>
  );
};

export default Auth