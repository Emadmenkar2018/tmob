import * as types from "../actionTypes";

//Fetch Playlists Actions 
export const fetchPlaylistsStart = (options) => ({
    type: types.FETCH_PLAYLISTS_REQUEST,
    payload: options,
});

export const fetchPlaylistsSuccess = (options) => ({
    type: types.FETCH_PLAYLISTS_SUCCESS,
    payload: options,
});

export const fetchPlaylistsFailure = (options) => ({
    type: types.FETCH_PLAYLISTS_FAILURE,
    payload: options,
});
   
 
 
// // Deleting Reducer Items 
export const deletePlaylistState = (options) => ({
    type: types.DELETE_PLAYLIST,
    payload: options,
});
 
