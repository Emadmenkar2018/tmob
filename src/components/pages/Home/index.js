import React, { useState } from 'react'
import { View } from 'react-native'
import { TmobText, TmobCallout } from '@common/index'
import { styles } from './style'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation()
    const [locationObj, setlocationObj] = useState({ lat: "40.8982", lan: "29.3599" })



    return (
        <View style={styles.dev}>

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                onPress={(x) => {
                    if (x) setlocationObj({ lat: x?.nativeEvent?.coordinate?.latitude, lan: x?.nativeEvent?.coordinate?.longitude })
                }}
                region={{
                    latitude: 40.8982,
                    longitude: 29.3599,
                    latitudeDelta: 6.215,
                    longitudeDelta: 6.2121,
                }}
            >
                {locationObj?.lat &&
                    <Marker
                        coordinate={{
                            latitude: parseFloat(locationObj?.lat),
                            longitude: parseFloat(locationObj?.lan),
                        }}
                        title='Accident'>

                        <Callout
                            onPress={() => navigation.navigate('PlaylistPage', { locationObj })}
                            style={styles.customView}>

                            <TmobCallout >
                                <TmobText fontSize={1.7}>Check Videos</TmobText>
                            </TmobCallout>

                        </Callout>
                    </Marker>
                }
            </MapView>

        </View>
    )

}

export default Home

Home.propTypes = {
}

