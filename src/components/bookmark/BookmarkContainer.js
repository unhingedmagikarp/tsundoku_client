import React from "react";
import { Container, Row, Col } from "reactstrap";
import Bookmark from "./Bookmark";
import GroupContainer from "../group/GroupContainer";
import * as Api from "../../lib/Api";
import { Redirect } from "react-router-dom";

class BookmarkContainer extends React.Component {
  state = {};

  componentWillMount() {
    this.fetchBookmarks();
  }

  fetchBookmarks = () => {
    const { cookies } = this.props;
    let jwt = cookies.get("rails-react-token-auth-jwt");
    this.setState({ jwt: jwt });
    if (!jwt) {
      return;
    }
    Api.getBookmarks(jwt)
      .then(response => {
        this.setState({
          bookmarks: response.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg="3" sm="3">
            <GroupContainer jwt={this.props} />
          </Col>
          <Col lg="7" sm="7">
            <div>
              {this.state.bookmarks && this.state.jwt
                ? this.state.bookmarks.map((item, index) => (
                    <Bookmark data={item} key={index} />
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
