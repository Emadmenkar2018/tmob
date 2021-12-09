import React from 'react'
import { TouchableOpacity, View,Image } from 'react-native'
import { TmobText } from '../index'
import { styles } from './style' 
import PropTypes from 'prop-types'
import { wp } from 'src/helpers/DimensionHelper'


const TmobVideoItem = (props) => {
    const { item } = props

    return (
        <TouchableOpacity testID="TouchableOpacity"  style={{ ...styles.container  }}>


                <View style={{ flex: .4 }}>
                    <Image resizeMode="cover" source={{uri:item.snippet.thumbnails.default.url}}  style={{flex:1,borderRadius:4}}/>
                </View>

                <View style={{ flex: .6 ,marginLeft:wp(10)}}>
                    <TmobText style={styles.title} fontSize={1.7}>{item?.snippet?.title}</TmobText>

                    <TmobText style={styles.subtitle} fontSize={1.5}>{item?.snippet?.channelTitle}</TmobText>
                </View> 
                
        </TouchableOpacity>
    )

}

export default TmobVideoItem

TmobVideoItem.propTypes = {
    /**
     * Delivery Item
     */
    item: PropTypes.object.isRequired,
}