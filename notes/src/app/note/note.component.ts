import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NoteService } from '../note.service';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  noteForm!: FormGroup

  constructor(private note_service: NoteService, private formBuilder: FormBuilder) {
      this.noteForm = this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required]
      })
   }

  ngOnInit(){
  }

  addNote(){
    const { value } = this.noteForm
    console.log(value);
   }


}
