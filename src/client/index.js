import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import './index.css'

createRoot(document.getElementById('tetris')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

