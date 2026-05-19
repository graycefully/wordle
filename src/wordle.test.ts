import { describe, expect, it } from "vitest";
import { checkGuess, type LetterResult } from "./wordle.ts";

type TestCase = {
  description: string;
  guess: string;
  answer: string;
  expected: LetterResult[];
};

const cases: TestCase[] = [
  {
    description: "returns all green for a correct guess",
    guess: "slate",
    answer: "slate",
    expected: ["green", "green", "green", "green", "green"],
  },
  {
    description: "returns all grey for a guess with no matching letters",
    guess: "xxxxx",
    answer: "slate",
    expected: ["grey", "grey", "grey", "grey", "grey"],
  },
  {
    description: "marks a correct letter in the wrong position as yellow",
    guess: "txxxx",
    answer: "slate",
    expected: ["yellow", "grey", "grey", "grey", "grey"],
  },
  {
    description: "only marks the first occurrence of a repeated letter as yellow when the answer has one instance",
    guess: "eexxx",
    answer: "slate",
    expected: ["yellow", "grey", "grey", "grey", "grey"],
  },
  {
    description: "marks repeated letters in the correct positions as green before yellow",
    guess: "abbey",
    answer: "label",
    expected: ["yellow", "grey", "green", "green", "grey"],
  },
  {
    description: "marks repeated letters in the guess as yellow when the answer has the same letters in different positions",
    guess: "xxxll",
    answer: "llama",
    expected: ["grey", "grey", "grey", "yellow", "yellow"],
  },
  {
    description: "handles mixed green, yellow, and grey results in one guess",
    guess: "allee",
    answer: "label",
    expected: ["yellow", "yellow", "yellow", "green", "grey"],
  },
];

describe("checkGuess", () => {
  cases.forEach(({ description, guess, answer, expected }) => {
    it(description, () => {
      expect(checkGuess(guess, answer)).toEqual(expected);
    });
  });
});
