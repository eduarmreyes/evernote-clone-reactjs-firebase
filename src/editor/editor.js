import React from "react";
import ReactQuill from "react-quill";
import BorderColor from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";

import debounce from "../helpers";
import styles from "./styles";

class EditorComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: "",
      id: ""
    };
  }

  componentDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id
    });
  };

  componentDidUpdate = () => {
    // this.setState({text: this.state.text})
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        text: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id
      });
    }
  };

  onUpdateBody = async valueOfBody => {
    await this.setState({ text: valueOfBody });
    this.onUpdate();
  };

  onUpdate = debounce(() => {
    this.props.onNoteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.text
    });
    //TODO: actually implement the code
  }, 1500);

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.editorContainer}>
        <ReactQuill value={this.state.text} onChange={this.onUpdateBody} />
      </div>
    );
  }
}

export default withStyles(styles)(EditorComponent);
