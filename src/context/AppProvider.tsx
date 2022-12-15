import { Song } from '$/graphql/generated/QueryTypeDefs';
import { ReactNode, useState } from 'react';

import AppContext from './AppContext';

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [defaultSongList, setDefaultSongList] = useState([] as Song[]);
  const [ongoingSong, setOngoingSong] = useState({} as Song);
  const [songPlaying, setSongPlaying] = useState(false);
  const [songTimeline, setSongTimeline] = useState(0);

  return (
    <AppContext.Provider
      value={{
        defaultSongList,
        ongoingSong,
        songPlaying,
        songTimeline,
        setDefaultSongList,
        setOngoingSong,
        setSongPlaying,
        setSongTimeline,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
