import React from "react";
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

class BookmarkContainer extends React.Component {
  componentDidMount() {
    this.fetchBookmarks();
  }

  fetchBookmarks = () => {
    axios
      .get("http://localhost:3000/bookmarks")
      .then(res => {
        console.log(res.data.data);

        return this.setState({ bookmarks: res.data });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    );
  }
}

export default BookmarkContainer;
