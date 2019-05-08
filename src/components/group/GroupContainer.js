import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardHeader,
  Button
} from "reactstrap";

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
          ? this.state.groups.map(group => (
              <Card>
                <CardBody>
                  <CardHeader>{group.name}</CardHeader>

                  {group.members.map(member => (
                    <CardText> {member} </CardText>
                  ))}
                </CardBody>
              </Card>
            ))
          : null}
      </div>
    );
  }
}

export default GroupContainer;
