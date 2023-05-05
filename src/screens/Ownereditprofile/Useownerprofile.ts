import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {url} from '../../constants/Apis';
function OwnerEditProfileCustomHook() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const fetchProfileData = async () => {
      const token = await AsyncStorage.getItem('token');
      try {
        const response = await fetch(`${url}/user/getUser`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const profileData = await response.json();
          setFirstName(profileData.firstName);
          setLastName(profileData.lastName);
          setEmail(profileData.email);
          setPhoneNumber(profileData.phoneNumber);
        } else {
          throw new Error('Failed to fetch profile data');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Failed to fetch profile data');
      }
    };
    fetchProfileData();
  }, []);
  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
  };
  const handleUpdate = async navigation => {
    const token = await AsyncStorage.getItem('token');
    const data = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    });
    console.log(data);
    try {
      const response = await fetch(`${url}/user/update`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: data,
      });
      console.log();
      if (response.ok) {
        openModal();
        navigation.navigate('OwnerProfile');
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Failed to update profile');
    }
  };
  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    handleReset,
    handleUpdate,
    closeModal,
    showModal,
  };
}
export default OwnerEditProfileCustomHook;
