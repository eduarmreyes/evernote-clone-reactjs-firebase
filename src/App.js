import React from "react";
import firebase from "firebase";

import SidebarCoponent from "./sidebar/sidebar";
import EditorComponent from "./editor/editor";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { selectedNoteIndex: null, selectedNote: null, notes: null };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes });
      });
  }

  onSelectNote = (note, index) => {
    this.setState({ selectedNoteIndex: index, selectedNote: note });
  };

  render() {
    return (
      <div className="app-container">
        <SidebarCoponent
          notes={this.state.notes}
          selectedNoteIndex={this.state.selectedNoteIndex}
          onDeleteNote={this.onDeleteNote}
          onSelectNote={this.onSelectNote}
          onNewNote={this.onNewNote}
        />
        <EditorComponent />
      </div>
    );
  }
}

export default App;
