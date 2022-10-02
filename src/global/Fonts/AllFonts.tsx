import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

interface Fonts{
    inter_black:String,
    inter_bold:String,
    inter_extrabold:String,
    inter_light:String,
    inter_extraLight:String,
    inter_medium:String,
    inter_regular:String,
    inter_semibold:String,
    inter_thin:String,
    robot_black:String,
    robot_bold:String,
    robot_light:String,
    robot_medium:String,
    robot_regular:String,
    robot_thin:String,
}
const AllFonts = (props: Fonts) => {
    useFonts({
    'inter-black': require('../global/Fonts/Inter-Black.ttf'),
    'inter-bold': require('../global/Fonts/Inter-Bold.ttf'),
    'inter-extrabold': require('../global/Fonts/Inter-ExtraBold.ttf'),
    'inter-light': require('../global/Fonts/Inter-Light.ttf'),
    'inter-extraLight': require('../global/Fonts/Inter-ExtraLight.ttf'),
    'inter-medium': require('../global/Fonts/Inter-Medium.ttf'),
    'inter-regular': require('../global/Fonts/Inter-Regular.ttf'),
    'inter-semibold': require('../global/Fonts/Inter-SemiBold.ttf'),
    'inter-thin': require('../global/Fonts/Inter-Thin.ttf'),
    'robot-black': require('../global/Fonts/Roboto-Black.ttf'),
    'robot-bold': require('../global/Fonts/Roboto-Bold.ttf'),
    'robot-light': require('../global/Fonts/Roboto-Light.ttf'),
    'robot-medium': require('../global/Fonts/Roboto-Medium.ttf'),
    'robot-regular': require('../global/Fonts/Roboto-Regular.ttf'),
    'robot-thin': require('../global/Fonts/Roboto-Thin.ttf'),

}
)
  return (
    <View>
      <Text>AllFonts</Text>
    </View>
  )
}

export default AllFonts