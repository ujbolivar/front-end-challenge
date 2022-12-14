import { forwardRef, useEffect, useState } from 'react';

import { Container, PlayIcon } from './styles';
import { Props } from './types';

const PlayButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, playing, trigger }, ref) => {
    const [play, setPlay] = useState(playing);

    const triggerPlay = () => trigger(!play);

    useEffect(() => setPlay(playing), [playing]);

    return (
      <Container className={className} onClick={triggerPlay}>
        {playing ? (
          <PlayIcon ref={ref} className="material-icon">
            &#xe030;
          </PlayIcon>
        ) : (
          <PlayIcon ref={ref} className="material-icons">
            &#xe030;
          </PlayIcon>
        )}
      </Container>
    );
  },
);

export default PlayButton;
