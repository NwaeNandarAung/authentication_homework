import React, { useState, useContext } from 'react';
import { View, ToastAndroid } from 'react-native';
import Password from '@components/auth/Password';
import Back from '@components/auth/Back';
import { GlobalContext } from '@context/context';
import { useLocal } from '../../hook/useLocal';
import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";
import styles from '@components/auth/styles';

const RegisterPassword = ({ route, navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [login, setLogin] = useState(false);

  const { getAuth } = useContext(GlobalContext);

  const local = useLocal();

  const actionHandler = async () => {
    let data = {
      userEmail: route.params.userEmail,
      userPassword: password,
      key: 'userKey',
    }

    await RNSecureKeyStore.set("@user.data", JSON.stringify(data), { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY })
      .then((res) => {
        goRegister();
      }, (err) => {
        console.log(err);
      });
  };

  const goRegister = async () => {
    if (password === confirmPassword) {
      getAuth(true);
    } else {
      ToastAndroid.show('Passwords are not matched!', ToastAndroid.SHORT);
    }
  }

  const backHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.mainContainer}>
      <Back action={backHandler} />
      <Password
        title={local.security}
        buttonText={local.register}
        passwordValue={password}
        confirmPasswordValue={confirmPassword}
        onChangePassword={val => setPassword(val)}
        onChangeConfirmPassword={val => setConfirmPassword(val)}
        action={actionHandler}
        isLogin={login}
      />
    </View>
  );
}

export default RegisterPassword