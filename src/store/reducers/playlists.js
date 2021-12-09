import * as types from "../actionTypes";


const initialState = {
    playlist: {},
    playlistItems: [],
    finsihDeliveryStatus: "",
    activatedDeliveryItemId: "",
    isLoading: false,
    error: null,
}

const playlists = (state = initialState, action) => {
    switch (action.type) {

        //fetch PLAYLIST
        case types.FETCH_PLAYLISTS_REQUEST:
            return {
                ...state,
                isLoading: true

            };

        case types.FETCH_PLAYLISTS_SUCCESS:
            return {
                ...state,
                playlist: action.payload,
                playlistItems: [...state.playlistItems, ...action.payload.items],
                isLoading: false,
            };
        case types.FETCH_PLAYLISTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        //delete PLAYLIST
        case types.DELETE_PLAYLIST:
            return {
                ...state,
                playlist: {},
                playlistItems: [],
            };

        default:
            return state;
    }
};

export default playlists;
