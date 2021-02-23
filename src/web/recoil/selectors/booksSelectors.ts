import {selector} from 'recoil';
import {currentBookIdState} from '@atoms/booksAtoms';
import {getBookById, getBooks} from '../../api/books/api';

export const getAllBooks = selector({
  key: 'GetAllBooks',
  get: async () => {
    return await getBooks();
  },
});

export const getBookDetail = selector({
  key: 'GetBookDetail',
  get: async ({ get }) => {
    // atom一旦被修改的话 selector跟着变化
    // const response = await fetch("地址")
    return await getBookById(get(currentBookIdState));
  },
});
