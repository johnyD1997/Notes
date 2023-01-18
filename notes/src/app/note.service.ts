import { Injectable } from '@angular/core';
import {Note} from './note';
import { 
   collectionData,
   Firestore, 
   addDoc, 
   collection, 
   deleteDoc,
   doc,
   updateDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private afs: Firestore) { }

  // add a new note
  addNote(note: Note){
    note.id = doc(collection(this.afs, 'id')).id;
    return addDoc(collection(this.afs, 'Notes'),note);
  }

  //Get all Notes
  getNotes(): Observable<Note[]> {
    let notesRef = collection(this.afs, 'Notes');
    return collectionData(notesRef, {idField: 'id'}) as Observable<Note[]>
  }

  //Delete a notes
  deleteNotes(note: Note){
    let docRef = doc(this.afs, `Notes/${note.id}`);
    return deleteDoc(docRef);
  }

  //Update a notes
  updateNotes(note: Note, notes: any){
    let docRef = doc(this.afs, `Notes/${note.id}`);
    return updateDoc(docRef, notes);
  }
}
