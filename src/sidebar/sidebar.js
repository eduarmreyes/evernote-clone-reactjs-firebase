import React from "react";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import SidebarItemComponent from "../sidebaritem/sidebaritem";

import styles from "./styles";

class SidebarComponent extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return <h1>Hello from Sidebar</h1>;
  }
}

export default withStyles(styles)(SidebarComponent);
