import {Component, OnInit} from '@angular/core';
import {CreateTheaterModalComponent} from "./create-theater-modal/create-theater-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {AgGridModule} from "ag-grid-angular";
import {ColDef} from "ag-grid-community";
import {UserService} from "../../core/services/user.service";
import {TheaterService} from "../../core/services/theater.service";
import {AddPersonelModalComponent} from "./add-personel-modal/add-personel-modal.component";
import {single} from "rxjs";

@Component({
  selector: 'app-theaters-view',
  templateUrl: './theaters-view.component.html',
  styleUrls: ['./theaters-view.component.css'],
  imports: [
    AgGridModule
  ],
  standalone: true
})
export class TheatersViewComponent implements OnInit{

  constructor(private dialog: MatDialog, private userService: UserService, private theaterService: TheaterService) {
  }

  rowSelected: any;

  ngOnInit() {
    this.getTheatersOfManager();
  }

  columnDefs: ColDef[] = [
    {
      headerName: 'Id',
      field: 'id',
      width: 100
    }, {
      headerName: 'Name',
      field: 'name',
      width: 500
    }, {
      headerName: 'City',
      field: 'city'
    }, {
      headerName: 'Address',
      field: 'street'
    }
  ];

  private _rowData: any[] = [];

  getTheatersOfManager() {
    this.theaterService.getTheatersOfManager(this.userService.loggedInUserId).then(
      response => {
        this.rowData = response.data;
      }
    )
  }

  openCreateTheaterModal(): void {
    let createTheaterDialog = this.dialog.open(CreateTheaterModalComponent, {
      height: '700px',
      width: '500px'
    });
  }

  openAddPersonelModal(): void {
    console.log(this.rowSelected);
    let addPersonelDialog = this.dialog.open(AddPersonelModalComponent, {
      height: '700px',
      width: '1200px'
    });
  }

  onRowSelected(event: any) {
    console.log(event.node);
    if(event.node.selected) {
      this.rowSelected = event.node.data;
    }
    console.log(this.rowSelected.id);
  }

  get rowData(): any[] {
    return this._rowData;
  }

  set rowData(value: any[]) {
    this._rowData = value;
  }

  protected readonly single = single;
}
