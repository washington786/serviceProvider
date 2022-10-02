import { View } from 'react-native'
import React, { Component } from 'react';

import MultiSelect from 'react-native-multiple-select';
import { CategoryItems } from '../../data/CategoriesItems';
import { Caption } from 'react-native-paper';

export class MultiSelectCategory extends Component {
    state = {
        selectedItems : []
      };
    
      
      onSelectedItemsChange = (selectedItems) => {
        this.setState({ selectedItems });
      };
    
  render() {
    const { selectedItems } = this.state;
    return (
      <View>
        <MultiSelect
          hideTags
          items={CategoryItems}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          altFontFamily="ProximaNova-Light"
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
        <Caption>{this.multiSelect.getSelectedItemsExt(selectedItems)}</Caption>
      </View>
    )
  }
}

export default MultiSelectCategory