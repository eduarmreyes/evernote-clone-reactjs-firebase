import React from "react";
import firebase from "firebase";

import SidebarCoponent from "./sidebar/sidebar";
import EditorComponent from "./editor/editor";
import EditorBlankStateImage from "./images/undraw_selection_92i4.svg";
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

  onNoteUpdate = (id, noteObject) => {
    firebase
      .firestore()
      .collection("notes")
      .doc(id)
      .update({
        title: noteObject.title,
        body: noteObject.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
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
        {this.state.selectedNote ? (
          <EditorComponent
            selectedNote={this.state.selectedNote}
            selectedNoteIndex={this.state.selectedNoteIndex}
            notes={this.state.notes}
            onNoteUpdate={this.onNoteUpdate}
          />
        ) : (
          <img
            src={EditorBlankStateImage}
            alt="A vector illustration showcasing a person in the middle and somewhat selected notes near this person"
            width="600px"
          />
        )}
      </div>
    );
  }
}

export default App;
