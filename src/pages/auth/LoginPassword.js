import React, { useState, useContext } from 'react';
import { View, ToastAndroid } from 'react-native';
import Password from '@components/auth/Password';
import Back from '@components/auth/Back';
import { GlobalContext } from '@context/context';
import { useLocal } from '../../hook/useLocal';
import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";
import styles from '@components/auth/styles';

const LoginPassword = ({ route, navigation }) => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);

  const { getAuth } = useContext(GlobalContext);

  const local = useLocal();

  const actionHandler = async () => {
    await RNSecureKeyStore.get("@user.data").then((value) => {
      goLogin(JSON.parse(value));
    }).catch((err) => {
      console.log(err)
    })
  };

  const backHandler = () => {
    navigation.goBack();
  }

  const goLogin = async (value) => {
    if (value.userEmail === route.params.userEmail && value.userPassword === password) {
      let data = {
        userEmail: route.params.userEmail,
        userPassword: password,
        key: 'userKey',
      }
  
      await RNSecureKeyStore.set("@user.data", JSON.stringify(data), { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY })
        .then((res) => {
        }, (err) => {
          console.log(err);
        });
      getAuth(true);
    } else {
      ToastAndroid.show('Email or Password is wrong!', ToastAndroid.SHORT);
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Back action={backHandler} />
      <Password
        title={local.security}
        buttonText={local.login}
        passwordValue={password}
        onChangePassword={val => setPassword(val)}
        action={actionHandler}
        isLogin={login}
      />
    </View>
  );
}

export default LoginPassword