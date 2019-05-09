import React, { Component } from "react";
import CollapsableGroup from "./CollapsableGroup";
import * as Api from "../../lib/Api";
import { Button } from "reactstrap";
import GroupModal from "./GroupModal";

class GroupContainer extends Component {
  state = {
    modal: false
  };

  componentDidMount() {
    console.log(this.props);
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
    Api.getGroups(jwt).then(res => this.setState({ groups: res }));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        {this.state.jwt && (
          <Button
            color="primary"
            onClick={this.toggle}
            style={{ marginBottom: "40px" }}
          >
            Add Group
            <GroupModal
              token={this.state.jwt}
              toggle={this.toggle}
              modal={this.state.modal}
              refresh={this.fetchGroups}
            />
          </Button>
        )}

        {this.state.groups && this.state.jwt
          ? this.state.groups.map((group, index) => (
              <CollapsableGroup key={index} group={group} />
            ))
          : null}
      </div>
    );
  }
}

export default GroupContainer;
