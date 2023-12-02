import {Component, OnInit} from '@angular/core';
import {HallModel} from "../../../core/models/hall-models/hall.model";
import {FormsModule} from "@angular/forms";
import {TheaterService} from "../../../core/services/theater.service";
import {AgGridModule} from "ag-grid-angular";
import {ColDef} from "ag-grid-community";

@Component({
  selector: 'app-add-room-modal',
  templateUrl: './add-room-modal.component.html',
  styleUrls: ['./add-room-modal.component.css'],
  imports: [
    FormsModule,
    AgGridModule
  ],
  standalone: true
})
export class AddRoomModalComponent implements OnInit{

  hallName: string = '';
  hallCapacity: number = 10;
  halls: any[] = [];

  columnDefs: ColDef[] = [
    {
      headerName: 'Id',
      field: 'id',
      width: 50
    }, {
      headerName: 'Name',
      field: 'name',
      width: 100
    }, {
      headerName: 'Capacity',
      field: 'capacity',
      sortable: true
    }
  ];

  constructor(private theaterService: TheaterService) {
  }

  ngOnInit(): void {
    this.hallName = '';
    this.hallCapacity = 10;
    this.theaterService.getTheaterHalls(this.theaterService.theaterId).then(response => {
      this.halls = response.data;
    })
  }

  onHallCreate() {
    const hallModel: HallModel = new HallModel(this.hallName, this.hallCapacity);
    this.theaterService.createTheatreHall(hallModel, this.theaterService.theaterId).then();
  }
}
