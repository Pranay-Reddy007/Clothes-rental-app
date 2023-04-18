import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Dispatch} from 'redux';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const OTP_REQUEST = 'OTP_REQUEST';
export const OTP_SUCCESS = 'OTP_SUCCESS';
export const OTP_FAILURE = 'OTP_FAILURE';
export const VERIFY_OTP_REQUEST = 'VERIFY_OTP_REQUEST';
export const VERIFY_OTP_SUCCESS = 'VERIFY_OTP_SUCCESS';
export const VERIFY_OTP_FAILURE = 'VERIFY_OTP_FAILURE';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const DELETE_ADDRESS = 'DELETE_ADDRESS';
export const REMOVE_ADDRESS = 'REMOVE_ADDRESS';
export const ADD_NAME = 'ADD_NAME';
export const ADD_DESCRIPTION = 'ADD_DESCRIPTION';
export const ADD_GENDER = 'ADD_GENDER';
export const ADD_EVENT = 'ADD_EVENT';
export const ADD_SIZE = 'ADD_SIZE';
export const ADD_TYPE = 'ADD_TYPE';
export const ADD_OUTFIT = 'ADD_OUTFIT';
export const addname = (Name: any) => ({
  type: ADD_NAME,
  payload: Name,
});
export const addtype = (subcategoryIds: any) => ({
  type: ADD_TYPE,
  payload: subcategoryIds,
});
export const addoutfit = (subcategoryIds: any) => ({
  type: ADD_TYPE,
  payload: subcategoryIds,
});
export const addItemsData = (Description: any) => ({
  type: ADD_DESCRIPTION,
  payload: Description,
});
export const addGender = (CategoryId: any) => ({
  type: ADD_GENDER,
  payload: CategoryId,
});
export const addevent = (subcategoryIds: any) => ({
  type: ADD_EVENT,
  payload: subcategoryIds,
});
export const addsize = (selected: any) => ({
  type: ADD_SIZE,
  payload: selected,
});
export const removeAddress = (id: number, index: any) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(
        `${'https://64343e5f582420e231779819.mockapi.io/ADDRESS'}/addresses/${id}`,
      );
      dispatch({type: REMOVE_ADDRESS, payload: id, index});
    } catch (error) {
      console.log('remove address error', error);
    }
  };
};
export const addAddress = (data: {
  adddressLine1: string;
  addressLine2: string;
  addressType: string;
  city: string;
  country: string;
  postalCode: string;
  state: string;
}) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(
        'https://e5b5-122-172-176-124.ngrok-free.app/api/v1/address/add?token=7799a9f1-52a2-461d-9146-c91db88ea8ef',
        data,
      );
      console.log('address added', response.data);
      dispatch({
        type: ADD_ADDRESS,
        payload: response.data,
      });
    } catch (error) {
      console.log('address add error', error.message);
    }
  };
};

export const deleteAddress = (index: any) => ({
  type: 'DELETE_ADDRESS',
  payload: index,
});
export const Init = () => {
  return async (dispatch: Dispatch) => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log('token fetched');
      dispatch({
        type: LOGIN_SUCCESS,
        payload: token,
      });
    }
  };
};
export const getOTP = (phoneNo: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({type: VERIFY_OTP_REQUEST});
    try {
      const response = await axios.post(
        'http://7269-180-151-121-182.ngrok.io/api/phoneNo',
        {
          phoneNo,
        },
      );
      console.log('otp send');
      dispatch({type: VERIFY_OTP_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch({type: VERIFY_OTP_FAILURE, payload: error.message});
    }
  };
};

export const submitOTP = (phoneNo: string, otp: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({type: LOGIN_REQUEST});
    try {
      const response = await axios.post(
        'http://7269-180-151-121-182.ngrok.io/api/otplogin',
        {
          phoneNo: phoneNo,
          otp: otp,
        },
      );
      const token = response.data.access_token;
      await AsyncStorage.setItem('token', token);
      dispatch({type: LOGIN_SUCCESS, payload: token});
    } catch (error) {
      dispatch({type: LOGIN_FAILURE, payload: error.message});
    }
  };
};

export const Login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: LOGIN_REQUEST,
      });
      const response = await axios.post(
        'https://3566-180-151-121-182.ngrok-free.app/api/login',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            // Authorization: `Bearer ${await AsyncStorage.getItem(
            //   'access_token',
            // )}`,
          },
        },
      );
      const token = response.headers.access_token;
      await AsyncStorage.setItem('token', token);
      console.log('token stored');
      console.log(token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: token,
      });
    } catch (error) {
      console.log('login error', error);
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.message,
      });
    }
  };
};
export const SignupAndLogin = (
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  password: string,
) => {
  return async (dispatch: Dispatch) => {
    axios
      .post('http://7269-180-151-121-182.ngrok.io/api/user/save', {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      })
      .then((response: {data: any}) => {
        console.log('signup success');
        payload: response.data;
      })
      .catch(error => {
        console.log('signup error', error);
        dispatch({
          type: LOGIN_FAILURE,
          payload: error.message,
        });
      });
  };
};
export const Logout = () => {
  return async (dispatch: Dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT',
    });
  };
};

export const addGenderData = genderData => {
  return {
    type: 'ADD_GENDER_DATA',
    payload: genderData,
  };
};
