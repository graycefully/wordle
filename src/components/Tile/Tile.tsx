import './Tile.css';

import { type LetterResult } from '../../wordle';

type Props = {
  letter?: string;
  result?: LetterResult;
};

export function Tile({ letter, result }: Props) {
  return <div className={`tile ${result ?? ''}`}>{letter ?? ''}</div>;
}
