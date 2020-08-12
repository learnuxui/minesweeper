import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import configureStore from "./store/ConfigureStore";
import InitialState from "./store/InitialState";
import { Provider } from "react-redux";
import AppContainer from "./containers/AppContainer";
const store = configureStore(InitialState);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
        <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

