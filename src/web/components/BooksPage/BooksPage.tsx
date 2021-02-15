import { useRecoilValue, useRecoilState } from 'recoil';
import { getAllBooks } from '@selectors/booksSelectors';
import React, { FC, Suspense } from 'react';
import { currentBookIdState } from '@atoms/booksAtoms';
import BookDetail from './BookDetail';

const BooksPage: FC = () => {
  //它和react组件有关系 hooks
  const books = useRecoilValue(getAllBooks);
  const [currentBookID, setCurrentBookId] = useRecoilState(currentBookIdState);
  return (
    <div>
      <h2>📚 前端必学书单</h2>
      {
        (books.map((book) => (
          <div key={book.id}>
            <button onClick={() => setCurrentBookId(book.id)}>
              {book.id === currentBookID && '-'}
              {book.title}
            </button>
          </div>
        )) as unknown) as JSX.Element
      }
      {currentBookID && (
        <Suspense fallback={<span>加载图书详情中....</span>}>
          <BookDetail />
        </Suspense>
      )}
    </div>
  );
};
export default BooksPage;
