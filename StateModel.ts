export enum Playing {
  Paused = 'PAUSED',
  Playing = 'PLAYING',
}
export default interface StateModel {
  playing: Playing;
  currentSong: {
    id: string;
    duration: number;
    position: number;
    title: string;
    artist: string;
    picture: string;
  };
  queue: Song[];
  songList: Song[];
  filteredSongList: Song[];
  searchFilter: string;
  shuffled: boolean;
  looped: boolean;
}
export interface Song {
  id: string;
  title: string;
  artist: string;
  picture: string;
  duration: string;
}
