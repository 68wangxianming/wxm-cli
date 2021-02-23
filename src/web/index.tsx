import React from 'react';
import ReactDOM from 'react-dom';
import { PageErrorFallback } from '@components/Lib/BeautifulError';
import ErrorBoundary from '@components/Lib/ErrorBoundary';
import App from './pages/App';
ReactDOM.render(
  <ErrorBoundary fallbackRender={PageErrorFallback}>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
