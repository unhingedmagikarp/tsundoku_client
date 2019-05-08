import React from "react";
import { Container, Row, Col } from "reactstrap";
import Bookmark from "./Bookmark";
import GroupContainer from "../group/GroupContainer";
import * as Api from "../../lib/Api";
import AuthSignInComponent from "../AuthSignIn";
import { Redirect } from "react-router-dom";

class BookmarkContainer extends React.Component {
  state = {};

  componentWillMount() {
    this.fetchBookmarks();
  }

  fetchBookmarks = () => {
    const { cookies } = this.props;
    let jwt = cookies.get("rails-react-token-auth-jwt");
    if (!jwt) {
      return <Redirect to="/sign-in" />;
    }
    Api.getBookmarks(jwt)
      .then(response => {
        this.setState({
          bookmarks: response.data
        });
      })
      .catch(err => console.log(err));
  };

  handleDelete = id => {
    const { cookies } = this.props;
    let jwt = cookies.get("rails-react-token-auth-jwt");
    if (!jwt) {
      return <Redirect to="/sign-in" />;
    }
    Api.deleteBookmark(id, jwt).then(() => this.fetchBookmarks());
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg="3" sm="3">
            <GroupContainer> </GroupContainer>
          </Col>
          <Col lg="7" sm="7">
            <div>
              {this.state.bookmarks
                ? this.state.bookmarks.map((item, index) => (
                    <Bookmark
                      onDelete={() => this.handleDelete(item.id)}
                      data={item}
                      key={index}
                    />
                  ))
                : null}
            </div>
          </Col>
          <Col lg="2" sm="2" />
        </Row>
      </Container>
    );
  }
}

export default BookmarkContainer;
