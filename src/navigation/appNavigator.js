import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalContext } from '@context/context'
import AuthStack from './stack/AuthStack';
import HomeStack from './stack/HomeStack';
import SplashStack from './stack/SplashStack';
import RNSecureKeyStore from "react-native-secure-key-store";

const appNavigator = () => {
  const [auth, setAuth] = useState(false);
  const [lang, setLang] = useState('en');
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    storedUserData();
  }, [splashScreen])

  const storedUserData = async () => {
    await RNSecureKeyStore.get("@user.data").then((value) => {
      if (value && JSON.parse(value).key) {
        setAuth(true);
        setTimeout(() => {
          setSplashScreen(false);
        }, 3000);
      } else if(!value.key) {
        setAuth(false);
        setTimeout(() => {
          setSplashScreen(false);
        },3000);
      }else {
        setAuth(false);
        setTimeout(() => {
          setSplashScreen(false);
        },3000);
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  const context = {
    auth,
    lang,
    getAuth: value => {
      setAuth(value);
    },
    getLang: value => {
      setLang(value);
    }
  }

  if (splashScreen) {
    return (
      <NavigationContainer>
        <SplashStack />
      </NavigationContainer>
    )
  }
  if (auth) {
    return (
      <GlobalContext.Provider value={context}>
        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
      </GlobalContext.Provider>
    )
  } else {
    return (
      <GlobalContext.Provider value={context}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </GlobalContext.Provider>
    )
  }
}

export default appNavigator