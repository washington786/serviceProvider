import { StyleSheet} from 'react-native'
import { GlobalColors } from '../global/Colors/GlobalColors'

export const MainContainerStyles = StyleSheet.create({
    root:{
        flex: 1,
        backgroundColor: GlobalColors.white,
        paddingHorizontal:20,
        paddingVertical:15,
    },safeArea:{
        flex: 1,
        backgroundColor: GlobalColors.white,
    },
    container:{
        paddingHorizontal:5,
        marginHorizontal:15
    },
    modal:{
        flex: 1,
        backgroundColor: GlobalColors.white,
    }
})
