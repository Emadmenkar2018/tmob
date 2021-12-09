import { all, put, call, fork, takeLatest } from 'redux-saga/effects'
import apiCall from "../../helpers/api";
import * as actions from "../actions/playlists";
import * as actionTypes from "../actionTypes";

let API_KEY = "AIzaSyCEobeERFEU69PiSoxPPMaK1FxjOtiu-ac"

const MAX_RESULT = 10;
const locationRadius = "10mi";

/**
  * Yield last call of FETCH_Playlists_REQUEST action and call fetchPlaylists
 */
function* watchPlaylists() {
    yield takeLatest(actionTypes.FETCH_PLAYLISTS_REQUEST, fetchPlaylists);
}



/**
  * Get Playlists  
  * Call fetchPlaylistsSuccess actions in Success
  * Call fetchPlaylistsFailure actions in Failure
  * 
  * @param {object} action
 */


export function* fetchPlaylists(params) {
    let {lat, lan} = params.payload.locationObj
    let pageToken = params?.payload?.nextPageToken  ?  params.payload.nextPageToken  : ""
    try {
        const res = yield call(apiCall,
            'get',
            `/search?part=snippet&location=${lat + '%2C' + lan}4&locationRadius=${locationRadius}&pageToken=${pageToken}&type=video&maxResults=${MAX_RESULT}&key=${API_KEY}`
        );
        yield put(actions.fetchPlaylistsSuccess(res.data));

    } catch (err) {
        console.log('locationObj',err.data)
        yield put(actions.fetchPlaylistsFailure(err));
    }
}



/**
  * Responsible to yield all called actions
 */
export default function* playlistsSaga() {
    yield all([
        fork(watchPlaylists),
    ]);
}

