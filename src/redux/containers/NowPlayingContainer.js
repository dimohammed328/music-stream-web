import { connect } from 'react-redux';
import NowPlaying from './../../components/NowPlaying/NowPlaying';

const mapStateToProps = (state, ownProps) => {
  return {
    currentSong: state.songList[Number(state.currentSong)],
    position: state.position,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const NowPlayingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);
export default NowPlayingContainer;
