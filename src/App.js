import React, { Component } from "react";
import Movies from "./components/movies";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

library.add(faHeart, faSortUp, faSortDown);

class App extends Component {
  state = {};
  render() {
    return <Movies />;
  }
}

export default App;
