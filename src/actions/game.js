'use strict';

export const restartGame = () => {
  return {type: 'RESTARTGAME'};
};

export const makeGuess = (guess) => {
  return {type: 'MAKEGUESS', guess};
};

export const generateAuralUpdate = () => {
  return {type: 'GENERATEAURALUPDATE'};
};
