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
  Input
} from "reactstrap";

import * as Api from "../../lib/Api";

class BookmarkModal extends Component {
  state = {
    private: false
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    Api.postBookmark(this.props.token, this.state).then(res =>
      console.log(res)
    );
    this.props.toggle();
    window.location.reload();
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal}>
          <ModalHeader toggle={this.props.toggle}>New Bookmark</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label for="title" sm={2}>
                  Title
                </Label>
                <Input
                  onChange={this.handleChange}
                  type="title"
                  name="title"
                  id="title"
                  placeholder="Title..."
                />
              </FormGroup>
              <FormGroup row>
                <Label for="url" sm={2}>
                  URL
                </Label>
                <Input
                  onChange={this.handleChange}
                  type="url"
                  name="url"
                  id="url"
                  placeholder="Url..."
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              Do Something
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

export default BookmarkModal;