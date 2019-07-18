import React from "react";
import ReactQuill from "react-quill";
import BorderColor from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";

import debounce from "../helpers";
import styles from "./styles";

class EditorComponent extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return <h1>Hello from Editor</h1>;
  }
}

export default withStyles(styles)(EditorComponent);
