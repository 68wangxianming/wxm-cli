import { atom } from 'recoil';

export const currentBookIdState = atom({
  key: 'currentBookID',
  default: 0,
});
