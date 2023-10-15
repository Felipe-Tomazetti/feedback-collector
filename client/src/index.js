import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>,
document.getElementById("root"));


// // 1) Import ReactDOM library
// import ReactDOM from "react-dom/client";
 
// // 2) Import App component as usual
// import App from './components/App';
 
// // 3) Get a reference to the div with ID root
// const el = document.getElementById("root");
 
// // 4) Tell React to take control of that element
// const root = ReactDOM.createRoot(el);
 
// // 5) Show the component on the screen
// root.render(<App />);