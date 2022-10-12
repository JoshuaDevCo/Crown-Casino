import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tw-elements';

import Routing from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);


