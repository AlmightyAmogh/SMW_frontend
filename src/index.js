// import React from "react";
// import ReactDOM from 'react-dom/client';

// import App from './App';
// import './index.css';
// import {BrowserRouter as Router} from 'react-router-dom'
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// ReactDOM.render(<Router><App/></Router>,document.getElementById('root') )



import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);