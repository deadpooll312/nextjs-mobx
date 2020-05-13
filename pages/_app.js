import React from "react";
import { Provider } from "mobx-react";
// local files
import "../styles/main.scss";
import store from "../store";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}