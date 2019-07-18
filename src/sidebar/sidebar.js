import React from "react";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import SidebarItemComponent from "../sidebaritem/sidebaritem";

import styles from "./styles";
import sidebaritem from "../sidebaritem/sidebaritem";

class SidebarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null
    };
  }

  onButtonClick = () => {
    console.log("New BTN Click");
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };

  onUpdateTitle = text => {
    this.setState({ title: text });
  };

  onNewNote = () => {
    console.log(this.state);
  };

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;
    return (
      <div className={classes.sidebarContainer}>
        <Button
          onClick={this.onButtonClick}
          className={
            this.state.addingNote ? classes.cancelNoteBtn : classes.newNoteBtn
          }
        >
          {this.state.addingNote ? "Cancel" : "New Note"}
        </Button>
        {this.state.addingNote ? (
          <div>
            <input
              type="text"
              className={classes.newNoteInput}
              placeholder="New note title"
              onKeyUp={e => this.onUpdateTitle(e.target.value)}
            />
            <Button
              className={classes.newNoteSubmitBtn}
              onClick={this.onNewNote}
            >
              Submit Note
            </Button>
          </div>
        ) : null}
        <h1>Hello from Sidebar</h1>
        <SidebarItemComponent />
      </div>
    );
  }
}

export default withStyles(styles)(SidebarComponent);
