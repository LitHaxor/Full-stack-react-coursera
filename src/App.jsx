import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/MainComponent';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import './App.css';
import {BrowserRouter} from  'react-router-dom';
const App = () =>{
  return(
    <div>
      <BrowserRouter>
          <Main/>
      </BrowserRouter>
    </div>
  )
}

export default App;