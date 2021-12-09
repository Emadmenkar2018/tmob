import { wp, hp } from '../../../helpers/DimensionHelper'
import { Colors } from '../../../theme'


export const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: wp(40),
        alignItems: 'center'
    },

    btn: {
        marginTop: hp(20), width: 140, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.PRIMARY, borderRadius: 4, alignSelf: 'center'
    },

}