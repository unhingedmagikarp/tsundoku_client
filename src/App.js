import React from "react";
import axios from "axios";
import NavigationBar from "./components/navigation/NavigationBar";
import BookmarkContainer from "./components/bookmark/Bookmark";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <BookmarkContainer />
      </div>
    );
  }
}

export default App;
