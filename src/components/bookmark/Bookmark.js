import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

import "./bookmark.css";

class Bookmark extends React.Component {
  state = {};

  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <Container>
        <Row>
          <Col lg="12">
            <Row className="clearfix">
              <Col lg="1" className="float-left">
                <input type="checkbox" />
                <span>logo</span>
              </Col>
              <Col lg="6">
                {this.props.data.title} -{" "}
                <a href={this.props.data.url}>{this.props.data.url}</a>
              </Col>
              <Col lg="4" />
              <Col lg="1" className="float-right">
                button
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Bookmark;
