import React, { Component } from "react";
import { Button } from "reactstrap";

class CheckBox extends Component {
  state = {
    active: false
  };

  toggle = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <Button
        color="secondary"
        onClick={() => {
          this.props.trigger(this.props.tag.name);
          this.toggle();
        }}
        active={this.state.active}
        size="sm"
        key={this.props.tag.id}
        style={{ marginRight: "3px" }}
      >
        {this.props.tag.name}
      </Button>
    );
  }
}

export default CheckBox;
