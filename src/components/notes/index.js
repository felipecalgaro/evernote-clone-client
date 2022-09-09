import React, { Fragment, useEffect, useState } from 'react';
import { Column, Button } from "rbx";
import "../../styles/notes.scss";
import { push as Menu } from 'react-burger-menu'
import List from "../notes/list";
import Editor from "../notes/editor";
import Search from "../notes/search";
import NotesService from '../../services/notes';

function Notes(props) {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ title: "", body: "", id: "" });

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const response = await NotesService.index();
    if (response.data.length >= 1) {
      setNotes(response.data.reverse())
      setCurrentNote(response.data[0])
    } else {
      setNotes([])
    }
  }

  const createNote = async (params) => {
    const note = await NotesService.create();
    fetchNotes();
  }

  const searchNotes = async (query) => {
    const response = await NotesService.search(query)
    setNotes(response.data)
  }

  const selectNote = (id) => {
    const note = notes.find((note) => {
      return note._id === id;
    })
    setCurrentNote(note);
  }

  const updateNote = async (oldNote, params) => {
    const updatedNote = await NotesService.update(oldNote._id, params);
    const index = notes.indexOf(oldNote);
    const newNotes = notes;
    newNotes[index] = updatedNote.data;
    setNotes(newNotes);
    setCurrentNote(updatedNote.data);
  }

  const deleteNote = async (note) => {
    await NotesService.delete(note._id)
    fetchNotes()
  }

  return (
    <Fragment>
      <Column.Group className="notes" id="notes">
        <Menu
          pageWrapId={"notes-editor"}
          isOpen={props.isOpen}
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          disableAutoFocus
          outerContainerId={"notes"}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <Column.Group>
            <Column size={10} offset={1}>
              <Search searchNotes={searchNotes} fetchNotes={fetchNotes} />
            </Column>
          </Column.Group>
          <List
            notes={notes}
            selectNote={selectNote}
            createNote={createNote}
            deleteNote={deleteNote}
            currentNote={currentNote} />
        </Menu>


        <Column size={12} className="notes-editor" id="notes-editor">
          <Editor note={currentNote} updateNote={updateNote} />
        </Column>
      </Column.Group>
    </Fragment>
  )
}

export default Notes;