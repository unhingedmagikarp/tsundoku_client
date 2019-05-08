import React from "react";
import {
  Col,
  Row,
  Container,
  Card,
  CardHeader,
  CardText,
  Button
} from "reactstrap";
import "./bookmark.css";

class Bookmark extends React.Component {
  state = {};

  render() {
    return (
      <Container className="bookmarkContainer">
        <Row>
          <Col lg="12" sm="12">
            <Row className="clearfix">
              <Col lg="6" sm="6">
                <Card className="cardCont">
                  <CardHeader className="header">
                    {this.props.data.title}
                  </CardHeader>
                  <CardText className="textBox">
                    <a className="urlLink" href={this.props.data.url}>
                      {this.props.data.url}
                    </a>
                  </CardText>
                </Card>
              </Col>
              <Col lg="4" sm="4" />
              <Col lg="1" sn="1" className="float-right">
                <Button close />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Bookmark;
