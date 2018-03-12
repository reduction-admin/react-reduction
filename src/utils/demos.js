import random from 'faker/lib/random';

export const randomNum = (min = 0, max = 1000) => {
  return random().number({ min, max });
};
