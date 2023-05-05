import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
import Colors from '../../constants/Colors';
const style = StyleSheet.create({
  container: {
    width: 380,
    height: 850,
    left: 10,
    backgroundColor: '#ECF2FF',
  },
  cardStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 20,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
    // borderRadius: 8,
    shadowColor: 'black',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    // padding: 5,
    marginLeft: 38,
    color: '#3E54AC',
    fontSize: 20,
    fontFamily: 'poppins',
    fontWeight: '900',
    top: 10,
  },
  input: {
    textAlign: 'left',
    backgroundColor: '#ECF2FF',
    marginTop: 25,
    top: 10,
    margin: 40,
    // textAlign: 'center',
    fontSize: 18,
    color: '#3E54AC',
    fontWeight: 'bold',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnfield: {
    alignItems: 'center',
    width: 330,
    height: 59,
    backgroundColor: '#3E54AC',
    borderRadius: 8,
    marginLeft: 5,
    top: 40,
  },
  btnfield1: {
    alignItems: 'center',
    width: 160,
    height: 59,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    top: 40,
  },
  btntext: {
    // position: 'absolute',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    marginLeft: 5,
    fontSize: 20,
    color: 'white',
  },
  btntext1: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    color: '#3E54AC',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 60,
    marginLeft: 20,
    marginRight: 20,
  },
  whiteBtn: {
    alignItems: 'center',
    textAlign: 'center',
    width: 300,
    height: 59,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnPText: {
    position: 'absolute',
    left: 120,
    top: 15,
    height: 29,
    width: 104,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    color: '#3E54AC',
  },
  radioChecked: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'black',
  },
  radioUnchecked: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 45,
  },
  containerRadio: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
  },
  radioButtonText: {
    marginLeft: 8,
    marginRight: 30,
    color: 'blue',
    fontSize: 18,
    fontFamily: 'poppins',
    fontWeight: '900',
  },
  radioText2: {
    marginLeft: 8,
    color: 'blue',
    fontSize: 18,
    fontFamily: 'poppins',
    fontWeight: '900',
  },
  addAddressHeader: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: Colors.main,
  },
  backBtn: {
    marginTop: 10,
    marginLeft: 15,
    flexDirection: 'row',
    color: 'black',
  },
  btnImage: {width: 24, height: 24, marginTop: 15},
  addAddressText1: {
    marginBottom: 25,
    // marginTop: -50,
    marginLeft: 120,
    fontSize: 20,
    color: '#3E54AC',
    fontWeight: 'bold',
  },
  line: {
    width: '100%',
    height: 1.5,
    // top: 40,
    backgroundColor: '#3E54AC',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
export default style;
