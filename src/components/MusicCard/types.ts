// import { Scalars, Song } from '$/graphql/generated/QueryTypeDefs';
import { HTMLAttributes } from 'react';

interface Song {
  id: number;
  name: string;
  image: string;
  description: string;
  genre: string;
  audio: { url: string };
  author: { name: string };
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  songData: Song;
}
