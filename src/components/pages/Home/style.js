import { wp, hp } from '../../../helpers/DimensionHelper'


export const styles = {
    dev: {
        backgroundColor: '#000',
        height: 800,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        height: 800,
        width: 400,
    },
    container: {
        flex: 1,
        paddingHorizontal: wp(30),
        backgroundColor: '#EEEEEE'
    },
    loadingContainer: {
        width: '100%',
        height: hp(200),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(15),
        borderRadius: wp(30)
    }
}