import React from "react";

import Footer from "./Footer";
import Header from "./Header";
//import Navbar from "./Navbar";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Footer />
      </div>
    );
  }
}
