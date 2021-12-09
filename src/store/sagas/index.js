import { all, fork } from "redux-saga/effects"; 
import playlistsSaga from "./playlistsSaga"; 

export default function* sagas() { 
  yield all([fork(playlistsSaga)]);  
}
