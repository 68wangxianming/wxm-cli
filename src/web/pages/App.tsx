import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import routes from '../routes/index';
const App: FC = () => {
  return (
    <RecoilRoot>
      <Router basename="/">{routes()}</Router>
    </RecoilRoot>
  );
};
export default App;
