import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Ownerstyles from '../../screens/Additems/Additemsstyle';
import Colors from '../../constants/Colors';
import axios from 'axios';
import Useadditems from '../../screens/Additems/Useadditems';

const DropdownComponent = ({value, onChange}) => {
  const {subOutfitCategoriesData} = Useadditems();

  // const [categoriesData, setCategoriesData] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://fakestoreapi.com/products/categories',
  //       );
  //       const categoriesArray = response.data.map((category: any) => ({
  //         value: category,
  //         label: category,
  //       }));
  //       setCategoriesData(categoriesArray);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <View style={Ownerstyles.scrollView}>
      <View style={styles.dropdownContainer}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemTextStyle={styles.itemTextStyle}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          itemContainerStyle={styles.itemContainerStyle}
          selectedItemContainerStyle={styles.selectedItemContainerStyle}
          iconStyle={styles.iconStyle}
          data={subOutfitCategoriesData}
          search
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Outfit' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            onChange(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    </View>
  );
};

export default DropdownComponent;
const styles = StyleSheet.create({
  dropdownContainer: {
    height: 50,
    width: 255,
    backgroundColor: '#fff',
    marginTop: 15,
    marginLeft: -3,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
    shadowColor: '#3E54AC',
    shadowOpacity: 3,
  },
  dropdown: {
    height: '50%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  placeholderStyle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.iconscolor,
    marginLeft: 15,
  },
  selectedTextStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.iconscolor,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  iconStyle: {
    width: 25,
    height: 25,
    marginRight: 15,
    color: Colors.iconscolor,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 18,
    backgroundColor: Colors.white,
    color: Colors.iconscolor,
  },
  itemTextStyle: {
    fontSize: 16,
    fontWeight: '900',
    color: Colors.iconscolor,
    padding: 10,
  },
  selectedItemTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.iconscolor,
    // padding: 10,
  },
  itemContainerStyle: {
    backgroundColor: Colors.white,
    borderRadius: 10, // Add this line
  },
  selectedItemContainerStyle: {
    backgroundColor: '#3E54AC',
    borderRadius: 10,
  },
});
