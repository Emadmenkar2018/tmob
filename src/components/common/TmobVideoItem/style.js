import { hp } from '../../../helpers/DimensionHelper'
import {Colors} from '../../../theme'


export const styles = {
    container: {
        height:hp(100),
        flexDirection: 'row', 
        width: '100%',
        alignItems: 'center',
        elevation: 3,
        marginVertical: hp(5),
        justifyContent: 'center',
        paddingVertical: hp(10),
        paddingHorizontal: hp(15),
        backgroundColor: '#fff',
        borderRadius: 20
    },
    title: {
        marginBottom: hp(10),
        fontWeight: "600",
        color:Colors.PRIMARY
    },
    subtitle: {
        fontWeight: "400",
        color:Colors.PRIMARY_LIGHT
    }

}