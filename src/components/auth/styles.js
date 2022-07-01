import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#dda0dd',
    height: height,
  },

  container: {
    alignItems: 'center',
    paddingTop: hp(20)
  },

  title: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold'
  },

  inputContainer: {
    width: wp(100),
    alignItems: 'center',
    marginTop: hp(5),
  },

  input: {
    backgroundColor: '#ccc',
    width: wp(70),
    paddingHorizontal: hp(2),
    paddingVertical: hp(1.5),
    borderRadius: hp(2),
    margin: 0,
    color: '#fff',
    fontWeight: 'bold'
  },

  errorText: {
    color: '#ff6347',
    margin: hp(1),
  },

  checkboxContainer: {
    flexDirection: "row",
    marginTop: 20,
  },

  checkbox: {
    alignSelf: "center",
  },

  checkboxLabel: {
    margin: 8,
    color: '#fff'
  },

  buttonContainer: {
    marginTop: hp(3),
    backgroundColor: '#f0e68c',
    width: wp(70),
    paddingVertical: hp(1.8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(1),
  },

  buttonDisableContainer: {
    marginTop: hp(3),
    backgroundColor: '#f0e68c',
    width: wp(70),
    paddingVertical: hp(1.8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(1),
    opacity: 0.6
  },

  buttonText: {
    color: '#dda0dd',
    fontWeight: 'bold',
  },

  accContainer: {
    flexDirection: 'row',
    marginTop: hp(4),
  },

  info: {
    color: '#808080'
  },

  infoExtend: {
    color: '#fff',
  },

  footerContainer: {
    position: 'absolute',
    top: height - 90,
    flexDirection: 'row',
  },

  footerText: {
    color: '#ccc'
  },

  footerTextExtend: {
    color: '#f0e68c'
  },

  rigthView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },

  centeredView: {
    alignItems: "flex-end",
    marginRight: wp(2),
    marginTop: hp(2)
  },

  modalView: {
    marginTop: hp(20),
    marginHorizontal: wp(10),
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: wp(5),
    paddingVertical: hp(5),
    alignItems: "center",
    elevation: 20
  },

  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },

  buttonOpen: {
    backgroundColor: "#f0e68c",
  },

  buttonClose: {
    marginTop: hp(3),
    backgroundColor: "#dda0dd",
  },

  showTextStyle: {
    color: "#dda0dd",
    fontWeight: "bold",
    textAlign: "center"
  },

  hideTextStyle: {
    color: "#f0e68c",
    fontWeight: "bold",
    textAlign: "center"
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

  backContainer: {
    marginTop: hp(2),
    marginLeft: wp(2),
  },

  backButton: {
    backgroundColor: '#f0e68c',
    borderRadius: 10,
    width: wp(20),
    paddingHorizontal: wp(1),
    paddingVertical: hp(2)
  },

  backText: {
    color: '#dda0dd',
    fontWeight: "bold",
    textAlign: "center"
  },

  langCheckboxContainer: {
    flexDirection: "row",
    marginBottom: hp(1),
  },

  langCheckboxLabel: {
    color: '#ccc',
    paddingTop: 5,
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default styles;