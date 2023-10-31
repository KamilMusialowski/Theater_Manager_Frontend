import { Component } from '@angular/core';
import {TheatreCreateModel} from "../../../core/models/theatre-models/theatre-create-model";
import {TheaterService} from "../../../core/services/theater.service";
import {FormsModule} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-theater-modal',
  templateUrl: './create-theater-modal.component.html',
  styleUrls: ['./create-theater-modal.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class CreateTheaterModalComponent {

  constructor(private theaterService: TheaterService, private dialogRef: MatDialogRef<CreateTheaterModalComponent>) {
  }

  theatreModel: TheatreCreateModel = new TheatreCreateModel('','','','','','','','');

  onCreateTheater(): void {
    this.theaterService.onCreate(
      this.theatreModel
    ).then(
      response => {
        this.dialogRef.close();
      })
    this.theatreModel = new TheatreCreateModel('','','','','','','','');
  }
}
