import React from "react";
import axios from "axios";
import { ListGroup, Container, Row, Col } from "reactstrap";
import Bookmark from "./Bookmark";
import { withCookies, Cookies } from "react-cookie";

class BookmarkContainer extends React.Component {
  state = {};

  componentWillMount() {
    this.fetchBookmarks();
  }

  fetchBookmarks = () => {
    // console.log(cookies.get());
    axios
      .get("http://localhost:3000/api/bookmarks")
      .then(res => this.setState({ bookmarks: res.data.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col
            lg="3"
            sm="3"
            style={{ border: "1px solid black", height: "800px" }}
          />
          <Col lg="7" sm="7">
            <div style={{ border: "1px solid red", height: "800px" }}>
              {this.state.bookmarks
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
