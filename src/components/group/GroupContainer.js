import React, { Component } from "react";
import CollapsableGroup from "./CollapsableGroup";

class GroupContainer extends Component {
  state = {
    groups: [
      {
        name: "Group 1",
        members: ["Ranjit", "Pete", "Myrto"],
        bookmarks: [
          { title: "title 1", url: "url 1" },
          { title: "title 2 ", url: "url 2" },
          { title: "title 3", url: "url 3" }
        ]
      },
      {
        name: "Group 2",
        members: ["Ranjit", "Pete", "Myrto"],
        bookmarks: [
          { title: "title 1", url: "url 1" },
          { title: "title 2 ", url: "url 2" },
          { title: "title 3", url: "url 3" }
        ]
      },
      {
        name: "Group 3",
        members: ["Ranjit", "Pete", "Myrto"],
        bookmarks: [
          { title: "title 1", url: "url 1" },
          { title: "title 2 ", url: "url 2" },
          { title: "title 3", url: "url 3" }
        ]
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.groups
          ? this.state.groups.map(group => <CollapsableGroup group={group} />)
          : null}
      </div>
    );
  }
}

export default GroupContainer;
