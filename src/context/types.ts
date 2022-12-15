import { Song } from '$/graphql/generated/QueryTypeDefs';

export interface ContextTypes {
  defaultSongList: Array<Song>;
  ongoingSong: Song;
  songPlaying: boolean;
  songTimeline: number;
  setDefaultSongList: (songs: Song[]) => void;
  setOngoingSong: (song: Song) => void;
  setSongPlaying: (isPlaying: boolean) => void;
  setSongTimeline: (time: number) => void;
}
