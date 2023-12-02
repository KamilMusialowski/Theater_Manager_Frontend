import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../../core/services/user.service";
import {TheaterService} from "../../../core/services/theater.service";
import {ColDef} from "ag-grid-community";
import {AgGridModule} from "ag-grid-angular";

@Component({
  selector: 'app-theater-personel-view',
  templateUrl: './theater-personel-view.component.html',
  styleUrls: ['./theater-personel-view.component.css'],
  imports: [
    AgGridModule
  ],
  standalone: true
})
export class TheaterPersonelViewComponent implements OnInit {

  constructor(private dialog: MatDialog, private userService: UserService, private theaterService: TheaterService) {
    this.theaterService.getTheaterPersonel().then(response => {
      this.rowData = response.data;
    })
  }

  ngOnInit(): void {
    this.theaterService.getTheaterPersonel().then(response => {
      this.rowData = response.data;
    })
  }

  columnDefs: ColDef[] = [
    {
      headerName: 'Name',
      field: 'userFirstName1',
      width: 200
    }, {
      headerName: 'Lastname',
      field: 'userLastName',
      width: 200
    }, {
      headerName: 'Role',
      field: 'roleEnum',
      width: 150
    }
  ];

  private _rowData: any[] = [];

  rowSelected: any;

  onRowSelected(event: any) {
    if (event.node.selected) {
      this.rowSelected = event.node.data;
    }
  }

  onDeletePersonel() {
    this.theaterService.deleteTheaterPersonel(this.rowSelected.id).then(response => {
      this.theaterService.getTheaterPersonel().then(response => {
        this.rowData = response.data;
      })
    });
  }

  get rowData(): any[] {
    return this._rowData;
  }

  set rowData(value: any[]) {
    this._rowData = value;
  }
}
