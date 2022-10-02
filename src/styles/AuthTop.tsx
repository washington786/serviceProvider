
import { StyleSheet } from 'react-native'

export const AuthTopStyle = StyleSheet.create({
    topCon:{
        marginVertical:15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width: 150,
        height:150,
        resizeMode:'contain'
    },
    logoCon:{
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:10
    },
    textsCon:{
        width:'100%',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    title:{
        fontFamily:'robot-bold',
        fontSize: 18,
    },
    subTitle:{
        fontFamily:'robot-light',
        fontSize: 14,
    }
})