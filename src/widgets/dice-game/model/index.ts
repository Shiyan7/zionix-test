import { atom } from '@/shared/factory';
import { debounce } from 'patronum';
import { createEvent, createStore, sample } from 'effector';
import type { DiceHistory, DiceHistoryItem, GuessValue } from './types';
import { getCurrentTime } from '@/shared/lib/get-current-time';

export const diceGameModel = atom(() => {
  // сторы
  const $generatedNumber = createStore<number>(0);
  const $history = createStore<DiceHistory>([]);
  const $guess = createStore<GuessValue>('under');
  const $expectedNumber = createStore<number>(20);
  const $isWin = createStore(false);
  const $isAlertShowed = createStore(false);

  // эвенты
  const guessChanged = createEvent<GuessValue>();
  const playClicked = createEvent();
  const expectedNumberChanged = createEvent<number>();
  const historyItemAdded = createEvent<DiceHistoryItem>();
  const shouldHideAlert = debounce(historyItemAdded, 2000);

  // запись в стор напрямую когда вызвались эвенты
  $guess.on(guessChanged, (_, newGuess) => newGuess);
  $expectedNumber.on(expectedNumberChanged, (_, newNumber) => newNumber);
  $history.on(historyItemAdded, (state, item) => [item, ...state].slice(0, 10));
  $isAlertShowed.on(shouldHideAlert, () => false);
  $isAlertShowed.on(historyItemAdded, () => true);
  $generatedNumber.on(playClicked, () => Math.floor(Math.random() * 100) + 1);

  // определение победила ли ставка
  sample({
    clock: playClicked,
    source: {
      expected: $expectedNumber,
      generated: $generatedNumber,
      guess: $guess,
    },
    fn: ({ expected, generated, guess }) => {
      const isUnder = guess === 'under';
      return isUnder ? generated <= expected : generated >= expected;
    },
    target: $isWin,
  });

  // собираем объкт из созданных данных и отправляем его в историю
  sample({
    clock: playClicked,
    source: {
      expected: $expectedNumber,
      generated: $generatedNumber,
      guess: $guess,
      isWin: $isWin,
    },
    fn: ({ expected, generated, guess, isWin }) => {
      const isUnder = guess === 'under';

      return {
        id: Math.random(),
        time: getCurrentTime(),
        guess: `${isUnder ? 'Under' : 'Over'} ${expected}`,
        result: generated,
        isWin,
      };
    },
    target: historyItemAdded,
  });

  return {
    isWin: $isWin,
    generatedNumber: $generatedNumber,
    guess: $guess,
    expectedNumber: $expectedNumber,
    history: $history,
    isAlertShowed: $isAlertShowed,
    guessChanged,
    expectedNumberChanged,
    playClicked,
  };
});
