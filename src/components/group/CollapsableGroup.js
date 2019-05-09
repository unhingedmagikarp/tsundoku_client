import React, { Component } from "react";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  ListGroup,
  ListGroupItem,
  Badge
} from "reactstrap";
import { MdPeople } from "react-icons/md";

class CollapsableGroup extends Component {
  state = { collapse: false };

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  };

  render() {
    return (
      <div style={{ width: "250px" }}>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: "1rem", width: "100%", textAlign: "start" }}
          className="round"
        >
          {this.props.group.name}
          <Badge color="light float-right" pill style={{ top: "2px" }}>
            <MdPeople /> {this.props.group.users.length}
          </Badge>
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <ListGroup>
                {this.props.group.users.map((member, index) => (
                  <ListGroupItem key={index + 1}>{member.name}</ListGroupItem>
                ))}
              </ListGroup>
              <Button color="primary" style={{ marginTop: "1rem" }}>
                Display Bookmarks
              </Button>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default CollapsableGroup;
