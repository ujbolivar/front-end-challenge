import { Text } from '$/components/Text';
import styled from 'styled-components';

export const AnimationOverlay = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.75rem;
`;

export const Container = styled.div`
  display: flex;
  min-width: 15rem;
  margin: 1rem 0.5rem;
`;

export const SongAdditionalInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const SongDescription = styled(Text)`
  display: -webkit-box;
  max-width: 22rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const SongInfoMain = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
`;

export const SongTimeline = styled(Text)`
  margin: 0 0.65rem;
  color: ${({ theme }) => theme.color.black};
`;

export const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  min-width: 8rem;
  min-height: 8rem;
  position: relative;
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  max-height: 100%;
  border-radius: 0.65rem;
`;
