import {
  SongListQuery,
  useSongListQuery,
} from '$/graphql/generated/QueryTypeDefs';
import { ApolloError } from '@apollo/client';

const useFetchSongList = () => {
  const { data, loading, error } = useSongListQuery();

  if (loading) return { loading };
  if (error) return ApolloError;
  if (!data) return <h2>Unable to retrieve any data!</h2>;
  if (data && data.songs) {
    const songs = data.songs.songs;
    return songs;
  }
  return [] as SongListQuery[];
};

export default useFetchSongList;
