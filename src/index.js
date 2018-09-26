import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './step4/Login';
//import Route from './step4/Router';
//import { BrowserRouter as Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Login />, document.getElementById('root'));
/*ReactDOM.render((
        <BrowserRouter>
        <Route />
    </BrowserRouter>
), document.getElementById('root')); */
registerServiceWorker();
