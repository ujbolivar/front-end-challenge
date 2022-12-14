import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  playing: boolean;
  trigger: (a: boolean) => void;
}
