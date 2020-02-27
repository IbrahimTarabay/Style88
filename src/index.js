import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';/*to keep your UI in sync with the URL*/ 
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store';
/*Provider gives us ability to use store and reducers*/
/*provider is component which is parent of everything in our app*/

ReactDOM.render(
   <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   </Provider>,
 document.getElementById('root'));