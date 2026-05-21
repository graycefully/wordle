import './Row.css';

import { type LetterResult } from '../../wordle';
import { Tile } from '../Tile/Tile';

type Props = {
  guess?: string;
  results?: LetterResult[];
};

export function Row({ guess = '', results = [] }: Props) {
  const tiles = Array.from({ length: 5 }, (_, i) => (
    <Tile key={i} letter={guess[i]} result={results[i]} />
  ));

  return <div className="row">{tiles}</div>;
}
