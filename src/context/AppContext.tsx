import { Song } from '$/graphql/generated/QueryTypeDefs';
import { createContext } from 'react';

import { ContextTypes } from './types';

const AppContext = createContext<ContextTypes>({
  defaultSongList: [] as Song[],
  ongoingSong: {} as Song,
  songPlaying: false,
  songTimeline: 0,
  setDefaultSongList: () => {},
  setOngoingSong: () => {},
  setSongPlaying: () => {},
  setSongTimeline: () => {},
});

export default AppContext;
