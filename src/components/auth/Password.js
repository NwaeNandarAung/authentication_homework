import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useLocal } from '../../hook/useLocal';

// Styles
import styles from './styles';

const Auth = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const local = useLocal();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder={local.passwordPlaceholder}
            secureTextEntry
            value={props.passwordValue}
            onChangeText={props.onChangePassword}
            style={[styles.input, { marginTop: 20 }]}
          />
          {props.passwordValidError ? <Text style={styles.errorText}>{props.passwordValidError}</Text> : null}

          {!props.isLogin && (
            <TextInput
              placeholder={local.confirmPasswordPlaceholder}
              secureTextEntry
              value={props.confirmPasswordValue}
              onChangeText={props.onChangeConfirmPassword}
              style={[styles.input, { marginTop: 20 }]}
            />
          )}

          {props.isLogin && (<View style={styles.checkboxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
              tintColors={{ true: '#f0e68c', false: '#f0e68c' }}
            />
            <Text style={styles.checkboxLabel}>{local.confirmPasswordPlaceholder}</Text>
          </View>
          )}
        </View>

        {props.passwordValue == '' || props.confirmPasswordValue == '' ? (
          <TouchableOpacity disabled={true}
            style={styles.buttonDisableContainer}
            onPress={props.action}
            activeOpacity={0.8}>
            <Text style={styles.buttonText}>{props.buttonText}</Text>
          </TouchableOpacity>) : (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={props.action}
            activeOpacity={0.8}>
            <Text style={styles.buttonText}>{props.buttonText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Auth