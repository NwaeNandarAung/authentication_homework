import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import { GlobalContext } from '@context/context';
import { useLocal } from '../../hook/useLocal';
import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";
import Home from '@components/dashboard/Home';

const Dashboard = () => {

  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');

  useEffect(() => {
    getAuthData();
  }, []);

  const { getAuth } = useContext(GlobalContext);

  const local = useLocal();

  const logoutHandler = async () => {
    let data = {
      userEmail: authEmail,
      userPassword: authPassword,
    }

    await RNSecureKeyStore.set("@user.data", JSON.stringify(data), { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY })
      .then((res) => {
        console.log("data", data)
        goLogout();
      }, (err) => {
        console.log(err);
      });
  }

  const goLogout = async () => {
    getAuth(false);
  }

  const getAuthData = async () => {
    await RNSecureKeyStore.get("@user.data").then((value) => {
      if (value) {
        setAuthEmail(JSON.parse(value).userEmail)
        setAuthPassword(JSON.parse(value).userPassword)
      }
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <View>
      <Home authEmail={authEmail}
        action={logoutHandler}
        buttonText={local.logout} />
    </View>
  )
}

export default Dashboard