import './Key.css';

import { type LetterResult } from '../../wordle.ts';

type Props = {
  letter: string;
  result?: LetterResult;
  wide?: boolean;
  onClick: () => void;
};

export function Key({ letter, result, wide, onClick }: Props) {
  return (
    <div
      className={`key ${result ?? ''} ${wide ? 'wide' : ''} ${letter === 'ENTER' ? 'enter' : ''}`}
      onClick={onClick}
    >
      {letter}
    </div>
  );
}
