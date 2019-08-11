import { SET_SEARCH_FILTER, SET_CURRENT_SONG } from '../actions/actions';
import { combineReducers } from 'redux';
import mockSongList from './../../mock-data/mock-songs';
import { SET_SONG_LIST } from './../actions/actions';

const searchFilter = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return action.text;
    default:
      return state;
  }
};

const currentSong = (state = '0', action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return action.id;
    default:
      return state;
  }
};

const songList = (state = mockSongList, action) => {
  switch (action.type) {
    case SET_SONG_LIST:
      return action.songList;
    default:
      return state;
  }
};
const AppReducer = combineReducers({
  searchFilter,
  currentSong,
  songList,
});

export default AppReducer;
