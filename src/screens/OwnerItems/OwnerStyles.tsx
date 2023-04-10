import {StyleSheet} from 'react-native';

const Ownerstyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ECF2FF',
    height: '100%',
    width: 400,
  },
  Titletext: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3E54AC',
    marginTop: 70,
    marginLeft: 30,
  },
  Imageitem: {
    height: 190,
    width: 190,
    // justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 90,
    marginRight: 90,
    marginTop: 20,
  },
  scrollView: {
    height: 100,
    width: 200,

    justifyContent: 'center',
  },
  Itemname: {
    color: '#3E54AC',
    fontSize: 18,
    fontFamily: 'poppins',
    // marginLeft: 35,
    fontWeight: '700',
    marginTop: 15,
  },
  Namefield: {
    height: 48,
    width: 250,
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#3E54AC',
    shadowOpacity: 3,
  },
  scroll: {
    marginLeft: 54,
    width: 280,
    height: '100%',
    // alignItems : 'center',
  },
  Descriptionfield: {
    height: 110,
    width: 250,
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#3E54AC',
    shadowOpacity: 3,
    shadowRadius: 3,
  },
  Scrollcontainer: {
    // height: 500,
    // width: 900,
  },
  genderText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3E54AC',
    marginTop: 20,
    alignItems: 'center',
  },
  dropdowntext: {
    justifyContent: 'center',
    color: '#3E54AC',
    fontSize: 18,
    fontFamily: 'poppins',
    fontWeight: '700',
    marginTop: 15,
    alignItems: 'center',
  },
  dropdownContainer: {
    height: 48,
    width: 250,
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    borderRadius: 10,
    // elevation: 3,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    borderRadius: 10,
    height: 48,
    width: 250,
    alignItems: 'center',
  },
  dropConatiner: {
    height: '100%',
    alignItems: 'center',
  },
});

export default Ownerstyles;
