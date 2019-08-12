import { connect } from 'react-redux';
import { setCurrentSong } from '../actions/actions';
import Queue from '../../components/common/Queue';

const mapStateToProps = (state, ownProps) => {
  return {
    songList: state.songList,
    searchFilter: state.searchFilter,
    type: 'QUEUE',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCurrentSong: songId => {
      dispatch(setCurrentSong(songId));
    },
  };
};

const QueueContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Queue);
export default QueueContainer;
