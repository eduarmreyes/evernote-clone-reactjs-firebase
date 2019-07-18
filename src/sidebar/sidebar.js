import React from "react";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import SidebarItemComponent from "../sidebaritem/sidebaritem";

import styles from "./styles";
import sidebaritem from "../sidebaritem/sidebaritem";

class SidebarComponent extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div>
        <h1>Hello from Sidebar</h1>
        <SidebarItemComponent />
      </div>
    );
  }
}

export default withStyles(styles)(SidebarComponent);
