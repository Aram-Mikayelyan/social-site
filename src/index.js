import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
// import  { Provider } from './StoreContext';
import { Provider } from "react-redux";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  rerenderEntireTree(store.getState());
});

reportWebVitals();
