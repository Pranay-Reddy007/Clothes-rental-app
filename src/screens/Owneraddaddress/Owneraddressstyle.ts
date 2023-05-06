import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const OwnerAddressStyles = StyleSheet.create({
  header: {flexDirection: 'row', justifyContent: 'space-between'},
  maincontainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.main,
  },
  textField: {
    color: '#3E54AC',
    fontWeight: '700',
    fontSize: 18,
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 30,
  },
  headerText: {
    marginTop: 25,
    marginLeft: 25,
    fontSize: 20,
    color: '#3E54AC',
    flexDirection: 'row',
    fontWeight: '600',
  },
  btnContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    borderWidth: 0.2,
    padding: 8,
    backgroundColor: '#3E54AC',
    borderRadius: 8,
  },
  btnText: {
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    color: 'white',
  },
  card: {
    // height: '100%',
    backgroundColor: 'white',
    width: '90%',
    // borderWidth: 0.2,
    borderColor: '#8E8E8E',
    // backgroundColor: 'pink',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  deleteBtn: {
    padding: 7,
    borderWidth: 0.2,
    marginRight: 20,
    backgroundColor: '#3E54AC',
    borderRadius: 10,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteBtnText: {
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 12,
    color: 'white',
  },
  btnfield: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 60,
    height: 59,
    marginTop: 30,
    backgroundColor: '#3E54AC',
    borderRadius: 8,
  },
  btntext: {
    position: 'absolute',
    alignItems: 'center',
    left: 120,
    top: 15,
    height: 29,
    width: 104,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 18,
    color: 'white',
  },
  input: {marginLeft: 15, color: Colors.iconscolor, fontWeight: '500'},
  stateName: {
    marginLeft: 15,
    marginBottom: 10,
    color: Colors.iconscolor,
    fontWeight: '500',
  },
  liststyle: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.main,
  },
  city: {
    marginLeft: 15,
    marginTop: 10,
    color: Colors.iconscolor,
    fontWeight: '700',
  },
  addAddressHeader: {flexDirection: 'row'},
  backBtn: {
    marginTop: 17,
    marginLeft: 23,
    flexDirection: 'row',
    // color: Colors.iconscolor,
  },
  btnImage: {width: 24, height: 24, marginTop: 15},
  addAddressContainer: {
    // alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    marginLeft: 28,
  },
  addAddressText: {
    marginTop: 15,
    marginLeft: 80,
    fontSize: 20,
    color: '#3E54AC',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // inputMargin: {marginTop: 20},
  inputAddress: {
    backgroundColor: Colors.main,
    // opacity: 0.05,
    // marginTop: 20,
    marginLeft: 30,
    // marginRight: 10,
    // marginHorizontal: 10,
    paddingHorizontal: 10,
    width: 252,
    height: 40,
    // textAlign: 'center',
    // justifyContent: 'flex-start',
    fontSize: 18,
    color: Colors.iconscolor,
    alignItems: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: '#000',
    elevation: 5,
  },
  btnfieldAddress: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 179,
    height: 59,
    marginTop: 50,
    backgroundColor: '#3E54AC',
    borderRadius: 8,
  },
  btntextAddress: {
    // position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    // left: 120,
    // top: 15,
    // height: 29,
    // width: 104,
    // marginTop: 7,
    fontWeight: '900',
    fontFamily: 'Poppins',
    fontSize: 20,
    color: 'white',
  },
  subContainer: {
    height: 540,
    width: 312,
    backgroundColor: Colors.white,
    // alignItems: 'center',
    borderRadius: 10,
    // justifyContent: 'center',
    marginLeft: 40,
    marginTop: 20,
  },
  cityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
    width: 250,
    marginLeft: 30,
    borderRadius: 5,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
    width: 250,
    marginLeft: 5,
    borderRadius: 5,
  },
  smalltextInputs: {
    height: 40,
    width: 105,
    backgroundColor: Colors.main,
    paddingHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: '#000',
    elevation: 5,
    // textAlign: 'center',
    // justifyContent: 'space-between',
    fontSize: 18,
    color: Colors.iconscolor,
    // alignItems: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
  },
  Titletext: {
    marginTop: 15,
    marginLeft: 90,
    // marginBottom: 40,
    fontSize: 20,
    color: '#3E54AC',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  titleContainer: {
    color: Colors.iconscolor,
    marginLeft: 20,
    fontSize: 20,
  },
  containerRadio: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 8,
  },
  optionRadio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRadio: {
    marginLeft: 5,
    color: '#3E54AC',
    fontSize: 18,
    fontFamily: 'poppins',
    fontWeight: '700',
  },
  containerCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 30,
  },
  textCheckbox: {
    color: '#3E54AC',
    fontSize: 18,
    fontFamily: 'poppins',
    fontWeight: '700',
    marginLeft: 10,
  },
  checkboxContainer: {
    borderColor: 'black',
    marginLeft: 30,
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  noAddressText: {
    color: '#3E54AC',
    // marginTop:500,
    fontSize: 18,
    // justifyContent:'center',
    // alignItems:'center',
    textAlign: 'center',
    // color:'black',
    fontWeight: 'bold',
  },
  line2: {
    color: '#3E54AC',
    fontSize: 14,
    textAlign: 'center',
    marginLeft: -90,
  },
  titleTextContainer: {
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  imageS: {
    borderRadius: 150,
    width: 300,
    height: 300,
    marginLeft: 40,
    // paddingRight: 30,
  },
  noAddressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  textContainerAddress: {
    alignItems: 'center',
    justifyContent: 'center',
    //  flexDirection: 'row',
    // justifyContent: 'center',
    textAlign: 'center',
    height: 45,
    width: 250,
    marginTop: 50,
    marginLeft: 30,
    borderRadius: 5,
  },
  noAddressContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  titleTextContainer1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  imageS1: {
    width: 250,
    height: 250,
    borderRadius: 130,
  },
  textContainer1: {
    alignItems: 'center',
  },
  noAddressText1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    color: '#3E54AC',
  },
  line21: {
    fontSize: 16,
    color: '#8E8E8E',
  },
});
export default OwnerAddressStyles;
