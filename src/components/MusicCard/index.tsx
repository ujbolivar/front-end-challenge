import PlayButton from '$/components/PlayButton';
import { Text } from '$/components/Text';
import { forwardRef, useState } from 'react';

import {
  Container,
  SongAdditionalInfo,
  SongDescription,
  SongInfoMain,
  SongTimeline,
  Thumbnail,
  ThumbnailImg,
} from './styles';
import { Props } from './types';

const MusicCard = forwardRef<HTMLDivElement, Props>(
  ({ className, songData }, ref) => {
    const [song] = useState(songData);
    const [songTimeline, setSongTimeline] = useState('0');

    const sound = document.createElement('audio');
    sound.src = song.audio.url;
    sound.addEventListener(
      'trackMounted',
      () => {
        setSongTimeline();
      },
      false,
    );

    return (
      <Container className={className} ref={ref}>
        <Thumbnail>
          <ThumbnailImg src={song.image} alt="Music cover" />
        </Thumbnail>
        <SongInfoMain>
          <Text tag="h3" variant="body">
            {song.name}
          </Text>
          <Text tag="p" variant="body2">
            {song.author.name}
          </Text>
          <SongDescription tag="p" variant="body">
            {song.description}
          </SongDescription>
          <SongAdditionalInfo>
            <PlayButton/>
            <SongTimeline tag="p" variant="caption">
              {songTimeline}
            </SongTimeline>
          </SongAdditionalInfo>
        </SongInfoMain>
      </Container>
    );
  },
);

export default MusicCard;