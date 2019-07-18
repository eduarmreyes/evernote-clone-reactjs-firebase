import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";

import { removeHTMLTags } from "../helpers";
import styles from "./styles";

class SidebarItemComponent extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return <h1>Hello from SidebarItem</h1>;
  }
}

export default withStyles(styles)(SidebarItemComponent);
