import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/MainComponent';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import './App.css';
import {BrowserRouter} from  'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/ConfigureStore';
const store= ConfigureStore();
const App = () =>{
  return(
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;