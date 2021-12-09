import React, { useState, useEffect } from 'react'
import { RefreshControl, View, } from 'react-native'
import { TmobList, TmobVideoItem, TmobButton } from '@common/index'
import { styles } from './style'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylistsStart, deletePlaylistState } from '@actions/playlists'
import PropTypes from 'prop-types'
import { useNavigation, useRoute } from '@react-navigation/native';


const PlaylistPage = () => {
    const route = useRoute();
    const { locationObj } = route.params
    const INITIAL_PARAMS = {
        locationObj: locationObj,
        nextPageToken: "",
    };
    const dispatch = useDispatch()
    const { playlist } = useSelector(state => state.playlists);
    const { playlistItems } = useSelector(state => state.playlists);
    const { isLoading } = useSelector(state => state.playlists);
    const navigation = useNavigation()
    const [params, setParams] = useState(INITIAL_PARAMS)



    /**
     * Fetch Playlist on mounting
     *  
    */
    useEffect(() => {
        if (INITIAL_PARAMS?.locationObj?.lat) {
            dispatch(fetchPlaylistsStart(INITIAL_PARAMS))
        }
    }, [])


    /**
     * set nextPageToken params
     *  
    */
    useEffect(() => {
        if (playlist?.nextPageToken) {
            setParams({ ...params, nextPageToken: playlist.nextPageToken, })
        }
    }, [playlist])





    /**
    * Render Playlist item inside FLatList
    * 
    * @param {object} item
    * @param {String} index
   */
    const renderItem = (item, index) => {
        return (
            <TmobVideoItem
                item={item?.item}
            />
        )
    }

    /**
    * Render Playlists with init params
    *  
   */

    const handleRefresh = () => {
        dispatch(fetchPlaylistsStart(INITIAL_PARAMS))
    };


    /**
       * fetch playlists with new params
       *  
      */
    const loadMoreResults = () => {
        dispatch(fetchPlaylistsStart(params))
    };


     /**
       * clean state and go back
       *  
      */
      const goBack = () => {
        dispatch(deletePlaylistState(locationObj))
        navigation.goBack()
    };


    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>


            <TmobList
                style={styles.container}
                data={playlistItems}
                renderItem={renderItem}
                onEndReached={loadMoreResults}
                onEndReachedThreshold={1}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />}
            />

            <TmobButton
                onPress={goBack}
                title="Back To Map"
                style={styles.btn}
                titleStyle={{ color: '#fff' }}
            />

        </View >
    )

}

export default PlaylistPage

PlaylistPage.propTypes = {
    /**
     *locationObj represent locationObj from prev screen
     */
    locationObj: PropTypes.object,
}
