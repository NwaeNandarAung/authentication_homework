import React, { useState, useContext } from 'react';
import { View, ToastAndroid } from 'react-native';
import { useLocal } from '../../hook/useLocal';
import Auth from '@components/auth/Auth';
import Language from '@components/auth/Language';
import styles from '../../components/auth/styles';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState(false);

  const local = useLocal();

  const goPasswordScreen = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === true) {
      navigation.navigate('Register Security', {
        userEmail: email,
      });
    } else {
      ToastAndroid.show('Email is invalid!', ToastAndroid.SHORT);
    }
  };

  const infoHandler = () => {
    if (login) {
      navigation.navigate('Register');
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Language />
      <Auth
        title={local.register}
        buttonText={local.next}
        emailValue={email}
        onChangeEmail={val => setEmail(val)}
        action={goPasswordScreen}
        infoText={local.login}
        infoAction={infoHandler}
        isLogin={login}
      />
    </View>
  );
};

export default Register;