// react
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
//redux
// import { Provider } from 'react-redux'
// store
// import { store } from './store/store.js'
//components
import App from './components/app/App.jsx';
// utils
//global styles
import './index.scss'



ReactDOM.render(
    <React.StrictMode>
	    <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//   	<Provider store={store}>
//     	<App />
//     </Provider>	
//   </React.StrictMode>,
//   document.getElementById('root')
// );