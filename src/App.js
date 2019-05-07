import React from "react";
import { CookiesProvider } from "react-cookie";
import TokenAuth from "./components/TokenAuth.js";

class App extends React.Component {
  state = {};

  render() {
    return (
      <CookiesProvider>
        <TokenAuth />
      </CookiesProvider>
    );
  }
}
App.defaultProps = {};

export default App;
