import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { NotesProvider } from './context/NotesContext';

ReactDOM.render(
  <BrowserRouter>
    <NotesProvider>
      <App />
    </NotesProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
