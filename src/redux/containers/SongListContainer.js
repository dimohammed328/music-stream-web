import { connect } from 'react-redux';
import { setCurrentSong } from '../actions/actions';
import SongList from '../../components/common/SongList';

const mapStateToProps = (state, ownProps) => {
  return {
    songList: state.songList,
    searchFilter: state.searchFilter,
    type: 'SONG_LIST',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCurrentSong: songId => {
      dispatch(setCurrentSong(songId));
    },
  };
};

const SongListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
export default SongListContainer;
