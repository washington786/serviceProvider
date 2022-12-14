import { View, Text, Image } from 'react-native';
import React from 'react';

import Logo from '../../Assets/logo.png';
import { AuthTopStyle } from '../../styles/AuthTop';
import { Caption } from "react-native-paper";

interface Tops{
    mainStyle: Object,
    imageStyle: Object,
    title: String,
    sub_title: String,
    titleStyle: Object,
    subTitleStyle: Object,
}

const Top = (props: Tops) => {
  return (
    <View style={[props.mainStyle,AuthTopStyle.topCon]}>
      <View style={AuthTopStyle.logoCon}>
        <Image source={Logo} style={[props.imageStyle,AuthTopStyle.logo]}/>
      </View>
      <View style={AuthTopStyle.textsCon}>
        <Text style={[AuthTopStyle.title,props.titleStyle]}>{props.title}</Text>
        <Caption style={[AuthTopStyle.subTitle,props.subTitleStyle]}>{props.sub_title}</Caption>
      </View>
    </View>
  )
}

export default Top
