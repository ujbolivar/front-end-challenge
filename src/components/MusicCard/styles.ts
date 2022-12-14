import { Text } from '$/components/Text';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 15rem;
  height: 100vh;

  background-color: ${({ theme }) => theme.color.grayscale50};
`;

export const SongAdditionalInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const SongDescription = styled(Text)`
  display: -webkit-box;
  max-width: 0.7rem;
  line-clamp: 2;
`;

export const SongInfoMain = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 1.15rem;
`;

export const SongTimeline = styled(Text)`
  margin: 0 0.65rem;
  background-color: ${({ theme }) => theme.color.malibu500};
`;

export const Thumbnail = styled.div`
  display: block;
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  overflow: hidden;
  font-size: 0.7rem;
  background-color: ${({ theme }) => theme.color.grayscale100};
  border-radius: 0.375rem;
  margin-inline-end: 0.5rem;
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  max-height: 100%;
  background-size: cover;
  border-radius: 0.65rem;
`;
