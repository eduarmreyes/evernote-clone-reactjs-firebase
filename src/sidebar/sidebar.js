import React from "react";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import SidebarItemComponent from "../sidebaritem/sidebaritem";

import styles from "./styles";
import Loading from "../loading/loading";
import EmptyStateImage from "../images/undraw_add_content_d1tf.svg";
import sidebaritem from "../sidebaritem/sidebaritem";
// import { emptyStatement } from "@babel/types";

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

  onSelectNote = () => {
    console.log("Selected NOte");
  };

  onDeleteNote = () => {
    console.log("Delete NOte");
  };

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;
    return notes ? (
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
        <List>
          {notes.map((_note, _index) => {
            return (
              <div key={_index}>
                <SidebarItemComponent
                  _note={_note}
                  _index={_index}
                  selectedNoteIndex={selectedNoteIndex}
                  selectNote={this.onSelectNote}
                  deleteNote={this.onDeleteNote}
                />
                <Divider />
              </div>
            );
          })}
        </List>
      </div>
    ) : (
      <div className={classes.sidebarContainerEmptyState}>
        <Loading />
        <img
          src={EmptyStateImage}
          alt="Empty state showing a person holding a plus sign button to demonstrate this section will be update once people start adding notes"
          width="300px "
        />
      </div>
    );
  }
}

export default withStyles(styles)(SidebarComponent);
