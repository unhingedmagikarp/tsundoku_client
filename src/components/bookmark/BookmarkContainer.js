import React from "react";
import axios from "axios";
import { ListGroup, Container, Row, Col } from "reactstrap";
import Bookmark from "./Bookmark";

class BookmarkContainer extends React.Component {
  state = {};

  componentWillMount() {
    this.fetchBookmarks();
  }

  fetchBookmarks = () => {
    axios
      .get("http://localhost:3000/bookmarks")
      .then(res => this.setState({ bookmarks: res.data.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg="3" style={{ border: "1px solid black", height: "800px" }} />
          <Col lg="7">
            <div style={{ border: "1px solid red", height: "800px" }}>
              {this.state.bookmarks
                ? this.state.bookmarks.map((item, index) => (
                    <Bookmark data={item} key={index} />
                  ))
                : null}
            </div>
          </Col>
          <Col lg="2" />
        </Row>
      </Container>
    );
  }
}

export default BookmarkContainer;
