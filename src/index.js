import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {App} from './App';
import App2 from './App2';
import App3 from './App3';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import {Link ,Routes,Route,BrowserRouter} from 'react-router-dom'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="App2" element={<App2 />} />
      <Route path="App3" element={<App3 />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
serviceWorker.unregister();
reportWebVitals();
