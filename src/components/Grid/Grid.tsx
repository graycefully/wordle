import './Grid.css';

import { type LetterResult } from '../../wordle';
import { Row } from '../Row/Row';

type Props = {
  guesses: string[];
  results: LetterResult[][];
};

export function Grid({ guesses, results }: Props) {
  const rows = Array.from({ length: 6 }, (_, i) => (
    <Row key={i} guess={guesses[i]} results={results[i]} />
  ));

  return <div className="grid">{rows}</div>;
}
