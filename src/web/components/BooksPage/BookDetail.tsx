import { getBookDetail } from '@selectors/booksSelectors';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

const BookDetail: FC = () => {
  const currentBook = useRecoilValue(getBookDetail);
  return currentBook.id !== -1 ? (
    <>
      <h2>电子书地址如下：</h2>
      <p>URL</p>
      <a href={currentBook.url}>{currentBook.url}</a>
    </>
  ) : (
    <h4>暂无资料</h4>
  );
};
export default BookDetail;
