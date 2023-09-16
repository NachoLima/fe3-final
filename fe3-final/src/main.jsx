import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ContextProvider } from './Components/utils/global.context.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
