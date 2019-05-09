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
  Container,
  ButtonGroup
} from "reactstrap";

import * as Api from "../../lib/Api";
import CheckBox from "./CheckBox";

class BookmarkModal extends Component {
  state = { private: false, cSelected: [] };

  componentDidMount() {
    this.fetchTags();
  }

  onSelect = selected => {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  };

  fetchTags = () => {
    const jwt = this.props.token;
    this.setState({ jwt: this.props.token });

    Api.getTags(jwt)
      .then(response => {
        this.setState({
          tags: response.data
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleTag = e => this.setState({ [e.target.name]: [e.target.value] });

  handleSubmit = e => {
    e.preventDefault();
    Api.postBookmark(this.props.token, {
      title: this.state.title,
      url: this.state.url,
      tags: this.state.cSelected
    }).then(res => {
      console.log(res);
      this.props.toggle();
      window.location.reload();
    });
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal}>
          <ModalHeader toggle={this.props.toggle}>New Bookmark</ModalHeader>
          <ModalBody>
            <Container>
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
                <FormGroup row>
                  <Label for="tags" sm={2}>
                    Tags
                  </Label>
                  <ButtonGroup>
                    {this.state.tags &&
                      this.state.tags.map((item, index) => (
                        <CheckBox
                          key={index}
                          tag={item}
                          trigger={this.onSelect}
                        />
                      ))}
                  </ButtonGroup>
                </FormGroup>
              </Form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              Add bookmark
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
