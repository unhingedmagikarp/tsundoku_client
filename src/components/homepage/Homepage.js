import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";
import HomeImage from "./image.png";

import "./homepage.css";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Card>
          <CardImg className="cardImg" src={HomeImage} />
          <CardBody>
            <CardSubtitle className="cardSubtitle">
              積む (tsumu, “to pile up”) +‎ 読 (doku, “to read, reading”,
              on'yomi)
            </CardSubtitle>

            <CardText className="cardText">Curate bookmarks.</CardText>
            <CardText className="cardText">Share them with peers.</CardText>
            <CardText className="cardText">Discover.</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default HomePage;
