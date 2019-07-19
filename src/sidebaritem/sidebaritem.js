import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";

import { removeHTMLTags } from "../helpers";
import styles from "./styles";

class SidebarItemComponent extends React.Component {
  onSelectNote = (_note, _index) => {
    this.props.selectNote(_note, _index);
  };
  onDeleteNote = _note => {
    if (window.confirm(`Are you sure you want to delete ${_note.title}?`)) {
      this.props.deleteNote(_note);
    }
  };
  render() {
    const { _index, _note, classes, selectedNoteIndex } = this.props;
    return (
      <ListItem
        className={classes.listItem}
        selected={selectedNoteIndex === _index}
        alignItems="flex-start"
        onClick={() => this.onSelectNote(_note, _index)}
        onKeyPress={() => {
          console.log("pressed");
        }}
        role="button"
        tabIndex="0 "
      >
        <div className={classes.textSection}>
          <ListItemText
            primary={_note.title}
            secondary={removeHTMLTags(_note.body.substring(0, 30)) + "..."}
          >
            <p>textSection</p>
          </ListItemText>
        </div>
        <DeleteIcon
          onClick={() => this.onDeleteNote(_note)}
          className={classes.deleteIcon}
        />
      </ListItem>
    );
  }
}

export default withStyles(styles)(SidebarItemComponent);
