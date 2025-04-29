export interface DiceHistoryItem {
  id: number;
  time: string;
  guess: string;
  result: number;
  isWin: boolean;
}

export type DiceHistory = DiceHistoryItem[];

export type GuessValue = 'over' | 'under';
