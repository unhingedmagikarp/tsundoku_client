import React from "react";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from "./navigation/NavigationBar";
import AuthSignIn from "./AuthSignIn.js";
import AuthSignOut from "./AuthSignOut.js";
// import PageHome from './PageHome.js'
// import Page from './Page.js'

import BookmarkContainer from "./bookmark/BookmarkContainer";

const Api = require("../lib/Api.js");

class TokenAuthComponent extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  render() {
    return (
      <Router>
        <div>
          <NavigationBar appState={this.state} />

          <Route exact path="/" component={BookmarkContainer} />

          <Route
            exact
            path="/bookmarks/:id"
            render={routeProps => (
              <BookmarkContainer {...routeProps} appState={this.state} />
            )}
          />

          {!this.state.jwt && (
            <Route
              exact
              path="/sign-in"
              render={routeProps => (
                <AuthSignIn
                  {...routeProps}
                  propagateSignIn={this.propagateSignIn}
                />
              )}
            />
          )}

          {this.state.jwt && (
            <Route
              exact
              path="/sign-out"
              render={routeProps => (
                <AuthSignOut
                  {...routeProps}
                  propagateSignOut={this.propagateSignOut}
                />
              )}
            />
          )}
        </div>
      </Router>
    );
  }

  componentDidMount() {
    this.getUser();
    this.getBookmarks();
  }

  defaultState() {
    return {
      cookieName: "rails-react-token-auth-jwt",
      email: undefined,
      jwt: undefined,
      user_id: undefined,
      bookmarks: []
    };
  }

  constructor(props) {
    super(props);

    this.state = this.defaultState();

    this.propagateSignIn = this.propagateSignIn.bind(this);
    this.propagateSignOut = this.propagateSignOut.bind(this);
  }

  propagateSignIn(jwt, history = undefined) {
    const { cookies } = this.props;
    cookies.set(this.state.cookieName, jwt, { path: "/" });
    this.getUser(history);
  }

  propagateSignOut(history = undefined) {
    const { cookies } = this.props;
    cookies.remove(this.state.cookieName);
    this.setState({
      email: undefined,
      user_id: undefined,
      jwt: undefined
    });
    if (history) history.push("/");
  }

  getBookmarks() {
    Api.getBookmarks().then(response => {
      this.setState({
        bookmarks: response
      });
    });
  }

  getUser(history = undefined) {
    const { cookies } = this.props;
    let jwt = cookies.get(this.state.cookieName);
    if (!jwt) return null;
    console.log(this.props);

    Api.getCurrentUser(jwt).then(response => {
      if (response !== undefined) {
        this.setState({
          email: response.email,
          user_id: response.id,
          jwt: jwt
        });
        console.log(this.state);
        if (history) history.push("/");
      } else {
        // user has cookie but cannot load current user
        cookies.remove(this.state.cookieName);
        this.setState({
          email: undefined,
          user_id: undefined,
          jwt: undefined
        });
      }
    });
  }
}

export default withCookies(TokenAuthComponent);
