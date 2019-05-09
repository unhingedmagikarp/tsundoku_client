import React from "react";
import {
  Col,
  Row,
  Container,
  Card,
  CardHeader,
  CardText,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { MdShare } from "react-icons/md";
import * as Api from "../../lib/Api";
import "./bookmark.css";

class Bookmark extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggleShare = () => {
    console.log(this.props);
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  handleSubmit = e => {
    Api.shareBookmark(
      this.props.token,
      { bookmark_id: this.props.data.id },
      e.target.id
    ).then(res => console.log(res));
  };

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
              <Col lg="3" sm="3" />
              <Col lg="2" sm="2">
                <Col style={{ marginLeft: "-70px", marginTop: "5px" }}>
                  {/* <MdShare
                    style={{
                      marginTop: "17px",
                      cursor: "pointer",
                      color: "grey"
                    }}
                    onClick={this.toggleShare}
                  /> */}
                  <ButtonDropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                  >
                    <DropdownToggle caret>Share</DropdownToggle>
                    <DropdownMenu>
                      {this.props.groups.map((item, index) => {
                        return (
                          <DropdownItem
                            key={index}
                            id={item.id}
                            onClick={this.handleSubmit}
                          >
                            {item.name}
                          </DropdownItem>
                        );
                      })}
                    </DropdownMenu>
                  </ButtonDropdown>
                </Col>
                <Col>
                  <Button
                    onClick={this.props.onDelete}
                    style={{ marginTop: "-30px" }}
                    close
                  />
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Bookmark;
