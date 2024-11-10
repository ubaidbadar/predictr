import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx'
import './scss/index.scss';
import GlobalContext from './contexts/index.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <GlobalContext>
      <App />
    </GlobalContext>
  </>,
)