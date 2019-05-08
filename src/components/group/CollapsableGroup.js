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

class CollapsableGroup extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
        >
          {this.props.group.name}{" "}
          <Badge color="success" pill>
            Members: {this.props.group.members.length}
          </Badge>
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <ListGroup>
                {this.props.group.members.map((member, index) => (
                  <ListGroupItem key={index + 1}>{member}</ListGroupItem>
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
