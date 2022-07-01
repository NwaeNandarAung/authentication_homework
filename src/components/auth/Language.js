import React, { useState, useContext } from 'react';
import { View, Text, ToastAndroid, TouchableOpacity, Modal, onPress, Pressable } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { GlobalContext } from '@context/context';
import { useLocal } from '../../hook/useLocal';
import styles from '@components/auth/styles';

const Language = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const checkboxValues = [
    { label: 'English', value: 'en', checked: false },
    { label: 'မြန်မာ', value: 'mm', checked: false },
  ]
  const [checkboxValue, setCheckboxValue] = React.useState(checkboxValues)

  const { getLang } = useContext(GlobalContext);

  const local = useLocal();

  const checkboxHandler = (value, index) => {
    const newValue = checkboxValue.map((checkbox, i) => {
      if (i !== index)
        return {
          ...checkbox,
          checked: false,
        }
      if (i === index) {
        const item = {
          ...checkbox,
          checked: !checkbox.checked,
        }
        getLang(item.value)

        return item
      }
      return checkbox
    })
    setCheckboxValue(newValue)
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.rightView}>
          <View style={styles.modalView}>
            {checkboxValue.map((checkbox, i) => (
              <View style={styles.langCheckboxContainer} key={i}>
                <CheckBox
                  value={checkbox.checked}
                  onValueChange={(value) => checkboxHandler(value, i)}
                  tintColors={{ true: '#f0e68c', false: '#f0e68c' }}
                />
                <Text style={styles.langCheckboxLabel}>{checkbox.label}</Text>
              </View>
            ))}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.hideTextStyle}>{local.close}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.showTextStyle}>{local.language}</Text>
      </Pressable>
    </View>
  );
}

export default Language