import {Component, OnInit} from '@angular/core';
import {TheaterService} from "../../../core/services/theater.service";
import {MatDialogRef} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {TheatreEditModel} from "../../../core/models/theatre-models/theater-edit.model";

@Component({
  selector: 'app-edit-theater-modal',
  templateUrl: './edit-theater-modal.component.html',
  styleUrls: ['./edit-theater-modal.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class EditTheaterModalComponent implements OnInit{

  theatreModel: TheatreEditModel = new TheatreEditModel('', '','','','','','','','');

  constructor(private theaterService: TheaterService, private dialogRef: MatDialogRef<EditTheaterModalComponent>) {
    this.theaterService.getTheater(this.theaterService.theaterId).then(response => {
      this.theatreModel = response.data;
    })
  }

  ngOnInit(): void {
    this.theaterService.getTheater(this.theaterService.theaterId).then(response => {
      this.theatreModel = response.data;
    })
  }

  onEditTheater() {
    this.theaterService.editTheater(this.theatreModel).then(response => {
      this.dialogRef.close();
    })
  }
}
