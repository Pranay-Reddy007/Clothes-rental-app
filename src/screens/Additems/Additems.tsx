/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Ownerstyles from './Additemsstyle';
import {ScrollView} from 'react-native-gesture-handler';
import GenderDropdown from '../../components/atoms/GenderDropdown';
import EventsDropdown from '../../components/atoms/EventsDropdown';
import TypeDropdown from '../../components/atoms/TypeDropdown';
import OutfitDropdown from '../../components/atoms/OutfitDropdown';
import Useadditems from './Useadditems';
import Colors from '../../constants/Colors';
import Styles from '../LoginScreen/LoginStyle';
import Lottie from 'lottie-react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const Additems = () => {
  const {
    name,
    description,
    setGender,
    setEventType,
    setOutfitType,
    setItemType,
    handleGenderChange,
    handleEventTypeChange,
    handleOutfitChange,
    handleItemTypeChange,
    handleNameChange,
    isLoading,
    handleDescriptionChange,
    handleBlur,
    formik,
  } = Useadditems();
  // const {formik} = AddItemsformik();
  return (
    <ScrollView>
      {isLoading ? (
        <>
          <SkeletonPlaceholder>
            <View
              style={{
                backgroundColor: Colors.main,
                height: '100%',
                width: '100%',
              }}>
              <Text style={Ownerstyles.Imageitem}></Text>
            </View>
            <View style={Ownerstyles.Scrollcontainer}>
              <View style={Ownerstyles.scroll}>
                <Text style={Ownerstyles.Itemname}></Text>
                <TextInput style={Ownerstyles.Namefield} />

                <Text style={Ownerstyles.Itemname}></Text>
                <TextInput style={Ownerstyles.Descriptionfield} />

                <Text style={Ownerstyles.Itemname}></Text>
                <GenderDropdown
                  onSelectGender={setGender}
                  onChange={handleGenderChange}
                />
                <Text style={Ownerstyles.Itemname}></Text>
                <TypeDropdown
                  onSelectType={setItemType}
                  onChange={handleItemTypeChange}
                />
                <Text style={Ownerstyles.Itemname}></Text>
                <EventsDropdown
                  onSelectEvent={setEventType}
                  onChange={handleEventTypeChange}
                />
                <Text style={Ownerstyles.Itemname}></Text>
                <OutfitDropdown
                  onSelectOutfit={setOutfitType}
                  onChange={handleOutfitChange}
                />
                <View style={Ownerstyles.mainButton}>
                  <TouchableOpacity
                    style={[
                      Ownerstyles.mainTouchable,
                      {
                        backgroundColor: formik.isValid
                          ? Colors.iconscolor
                          : '#A5C9CA',
                      },
                    ]}>
                    <Text style={Ownerstyles.touchableText}></Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SkeletonPlaceholder>
        </>
      ) : (
        <>
          <Text style={Ownerstyles.Titletext}> Add Items </Text>
          <View>
            <Image
              style={Ownerstyles.Imageitem}
              source={require('../../../Assets/additems1.png')}
            />
          </View>
          <View style={Ownerstyles.Scrollcontainer}>
            {/* <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleItems}>
              {({
                handleChange,
                handleBlur,
                isValid,
                dirty,
                handleSubmit,
                values,
                errors,
              }) => ( */}
            <View style={Ownerstyles.scroll}>
              <Text style={Ownerstyles.Itemname}>Name *</Text>
              <TextInput
                style={Ownerstyles.Namefield}
                // onChangeText={setName}
                value={name}
                // value={values.name}
                onChangeText={handleNameChange}
                onBlur={() => handleBlur('name')}
              />
              {formik.touched.name && formik.errors.name && (
                <Text style={Styles.errorText}>{formik.errors.name}</Text>
              )}
              <Text style={Ownerstyles.Itemname}>Description *</Text>
              <TextInput
                style={Ownerstyles.Descriptionfield}
                // onChangeText={setDescription}
                multiline
                // value={description}
                onChangeText={handleDescriptionChange}
                onBlur={() => handleBlur('description')}
                value={description}
              />
              {formik.touched.description && formik.errors.description && (
                <Text style={Styles.errorText}>
                  {formik.errors.description}
                </Text>
              )}
              <Text style={Ownerstyles.Itemname}>Select Gender *</Text>
              <GenderDropdown
                onSelectGender={setGender}
                onChange={handleGenderChange}
              />
              {/* {errors.gender && (
                <Text style={{color: 'red'}}>{errors.gender}</Text>
              )} */}
              {formik.touched.gender && formik.errors.gender && (
                <Text style={Styles.errorText}>{formik.errors.gender}</Text>
              )}
              <Text style={Ownerstyles.Itemname}>Select Type </Text>
              <TypeDropdown
                onSelectType={setItemType}
                onChange={handleItemTypeChange}
              />
              {/* {errors.eventType && (
                <Text style={{color: 'red'}}>{errors.eventType}</Text>
              )} */}
              <Text style={Ownerstyles.Itemname}>Select Event *</Text>
              <EventsDropdown
                onSelectEvent={setEventType}
                onChange={handleEventTypeChange}
              />
              {formik.touched.eventType && formik.errors.eventType && (
                <Text style={Styles.errorText}>{formik.errors.eventType}</Text>
              )}
              <Text style={Ownerstyles.Itemname}>Select Outfit </Text>
              <OutfitDropdown
                onSelectOutfit={setOutfitType}
                onChange={handleOutfitChange}
              />
              {/* {formik.touched.outfitType && formik.errors.outfitType && (
                <Text style={Styles.errorText}>{formik.errors.outfitType}</Text>
              )} */}
              {/* <Mainbutton text="Continue" onPress={handleItems} /> */}
              <View style={Ownerstyles.mainButton}>
                <TouchableOpacity
                  disabled={!formik.isValid}
                  style={[
                    Ownerstyles.mainTouchable,
                    {
                      backgroundColor: formik.isValid
                        ? Colors.iconscolor
                        : '#A5C9CA',
                    },
                  ]}
                  onPress={formik.handleSubmit}>
                  <Text style={Ownerstyles.touchableText}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};
export default Additems;
