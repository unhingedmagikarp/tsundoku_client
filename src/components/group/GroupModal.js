import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  FormGroup,
  Input,
  Container
} from "reactstrap";

import * as Api from "../../lib/Api";

class GroupModal extends Component {
  state = {};

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    Api.createGroup(this.props.token, this.state).then(res => {
      this.props.toggle();
      this.props.refresh(this.props.token);
    });
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal}>
          <ModalHeader toggle={this.props.toggle}>Create Group</ModalHeader>
          <ModalBody>
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label for="name" sm={2}>
                    Name
                  </Label>
                  <Input
                    onChange={this.handleChange}
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Name..."
                  />
                </FormGroup>
              </Form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              Create Group
            </Button>
            <Button color="secondary" onClick={this.props.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default GroupModal;
