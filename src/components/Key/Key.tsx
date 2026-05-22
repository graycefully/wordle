import './Key.css';

import { type LetterResult } from '../../wordle.ts';

type Props = {
  letter: string;
  result?: LetterResult;
  onClick: () => void;
};

export function Key({ letter, result, onClick }: Props) {
  return (
    <div className={`key ${result ?? ''}`} onClick={onClick}>
      {letter}
    </div>
  );
}
