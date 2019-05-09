import React, { Component } from "react";
import CollapsableGroup from "./CollapsableGroup";
import * as Api from "../../lib/Api";
import { Button, InputGroup, Input, InputGroupAddon } from "reactstrap";
import GroupModal from "./GroupModal";

import "./groupcontainer.css";

class GroupContainer extends Component {
  state = {
    modal: false
  };

  componentDidMount() {
    const { cookies } = this.props.jwt;
    let jwt = cookies.get("rails-react-token-auth-jwt");
    if (!jwt) {
      return;
    } else {
      this.setState({ jwt: jwt });
    }
    this.fetchGroups(jwt);
  }

  fetchGroups = jwt => {
    Api.getGroups(jwt).then(res => {
      this.setState({ groups: res });
      this.props.getGroups(res);
    });
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    Api.searchGroup(this.state.jwt, { search: this.state.search }).then(res =>
      this.setState({ groups: res })
    );
  };

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        {this.state.jwt && (
          <div style={{ marginTop: "50px" }}>
            <InputGroup style={{ width: "250px" }}>
              <Input
                placeholder="..."
                className="round"
                name="search"
                onChange={this.handleChange}
              />
              <InputGroupAddon addonType="append">
                <Button
                  color="primary"
                  className="round"
                  style={{ marginLeft: "10px" }}
                  onClick={this.handleSubmit}
                >
                  Search
                </Button>
              </InputGroupAddon>
            </InputGroup>
            <Button
              className="round"
              color="primary"
              onClick={this.toggle}
              style={{ marginBottom: "40px", marginTop: "30px" }}
            >
              Create Group
              <GroupModal
                token={this.state.jwt}
                toggle={this.toggle}
                modal={this.state.modal}
                refresh={this.fetchGroups}
              />
            </Button>
          </div>
        )}

        {this.state.groups && this.state.jwt
          ? this.state.groups.map((group, index) => (
              <CollapsableGroup
                refresh={this.props.refresh}
                key={index}
                group={group}
                jwt={this.state.jwt}
              />
            ))
          : null}
      </div>
    );
  }
}

export default GroupContainer;
