import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeContextWrapper } from './service/ThemeContext';
import { LoaderContextWrapper } from './service/LoaderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <LoaderContextWrapper>
        <App />
      </LoaderContextWrapper>
    </ThemeContextWrapper>
  </React.StrictMode>
);