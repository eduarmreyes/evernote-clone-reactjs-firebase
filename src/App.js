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

  onNewNote = async title => {
    const note = {
      title: title,
      body: ""
    };
    const newFromDB = await firebase
      .firestore()
      .collection("notes")
      .add({
        title: note.title,
        body: note.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    const newID = newFromDB.id;
    await this.setState({ notes: [...this.state.notes, note] });
    const newNoteIndex = this.state.notes.indexOf(
      this.state.notes.filter(_note => _note.id === newID)[0]
    );
    this.setState({
      selectedNote: this.state.notes[newNoteIndex],
      selectedNoteIndex: newNoteIndex
    });
  };

  onDeleteNote = async note => {
    // const noteIndex = this.state.notes.indexOf(note);
    // if (this.state.selectedNoteIndex === noteIndex) {
    // } else {
    //   this.state.notes.length > 1
    //     ? this.onSelectNote(
    //         this.state.notes[this.state.selectedNoteIndex - 1],
    //         this.state.selectedNoteIndex - 1
    //       )
    //     : this.setState({ selectedNoteIndex: null, selectedNote: null });
    // }
    await firebase
      .firestore()
      .collection("notes")
      .doc(note.id)
      .delete();
    await this.setState({
      notes: this.state.notes.filter(_note => _note !== note)
    });
    this.setState({ selectedNoteIndex: null, selectedNote: null });
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
