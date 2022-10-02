import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import MultiSelect from 'react-native-multiple-select';
import { CategoryItems } from '../../data/CategoriesItems';
import { Caption } from 'react-native-paper';

const SelectedCategoryCard = () => {
    const [selectedItems,setSelectedItems] = React.useState([]);
    
    const onSelectedItemsChange=()=>{
      setSelectedItems(selectedItems);
    }

  return (
    <View>
        <MultiSelect
          hideTags
          items={CategoryItems}
          uniqueKey="id"
          // ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          // altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
        <Caption>{selectedItems}</Caption>
      </View>
  )
}

export default SelectedCategoryCard

const styles = StyleSheet.create({})