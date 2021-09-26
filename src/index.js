import { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';
import './bootstrap.min.css'
import App from './App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector('#root')
);
