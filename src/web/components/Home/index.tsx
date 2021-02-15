import BooksPage from '@components/BooksPage/BooksPage';
import React from 'react';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Home: FC<{}> = () => {
  return (
    <>
      <span>
        <NavLink to="demos/1/">测试页</NavLink>
      </span>
      <h2>京程一灯🏮</h2>
      <hr />
      <BooksPage />
    </>
  );
};
export default Home;
