export const SET_SEARCH_FILTER = 'SET_SEARCH_FILTER';
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const SET_SONG_LIST = 'SET_SONG_LIST';

export const setSearchFilter = text => ({
  type: SET_SEARCH_FILTER,
  text,
});
export const setCurrentSong = id => ({
  type: SET_CURRENT_SONG,
  id,
});
export const setSongList = songList => ({
  type: SET_SONG_LIST,
  songList,
});
