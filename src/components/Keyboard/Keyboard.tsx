import './Keyboard.css';

import { type LetterResult } from '../../wordle';
import { Key } from '../Key/Key';

const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
];

type Props = {
  letterResults: Partial<Record<string, LetterResult>>;
  onKey: (key: string) => void;
};

export function Keyboard({ letterResults, onKey }: Props) {
  return (
    <div className="keyboard">
      {ROWS.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map((key) => (
            <Key
              key={key}
              letter={key}
              result={letterResults[key]}
              wide={key === 'ENTER' || key === '⌫'}
              onClick={() => onKey(key)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
