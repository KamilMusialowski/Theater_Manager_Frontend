import {Component, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";
import {AgGridModule} from "ag-grid-angular";
import {UserService} from "../../../core/services/user.service";
import {ColDef, EventService} from "ag-grid-community";
import {EventListModel} from "../../../core/models/event-models/event-list-model";
import {RehearsalService} from "../../../core/services/rehearsal.service";

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css'],
  imports: [
    NgClass,
    AgGridModule
  ],
  standalone: true
})
export class UserEventsComponent implements OnInit {

  isExpanded: boolean = false;

  private _columnDefs: ColDef[] = [
    {
      headerName: 'Art',
      field: 'theatreArt.title',
      width: 200,
      sortable: true
    }, {
      headerName: 'Hall',
      field: 'hall.name',
      width: 100
    }, {
      headerName: 'Event type',
      field: 'eventType',
      width: 120
    }, {
      headerName: 'Start date',
      field: 'startDateString',
      width: 200,
      sortable: true
    }, {
      headerName: 'End date',
      field: 'endDateString',
      width: 200
    }
  ];

  private _rowData: EventListModel[] = [];

  ngOnInit(): void {
    this.rehearsalService.onGetUserEvents(this.userService.loggedInUserId).then(response => {
      this._rowData = response.data;
      for(const element of this._rowData) {
        let cell = element;
        cell.startDateString = cell.startDate[2] + '.' + cell.startDate[1] + '.' + cell.startDate[0] + ',  ' + cell.startDate[3] + ':' + cell.startDate[4];
        cell.endDateString = cell.endDate[2] + '.' + cell.endDate[1] + '.' + cell.endDate[0] + ',  ' + cell.endDate[3] + ':' + cell.endDate[4]
      }
    })
  }

  constructor(private userService: UserService, private rehearsalService: RehearsalService) {
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  get columnDefs(): ColDef[] {
    return this._columnDefs;
  }

  set columnDefs(value: ColDef[]) {
    this._columnDefs = value;
  }

  get rowData(): EventListModel[] {
    return this._rowData;
  }

  set rowData(value: EventListModel[]) {
    this._rowData = value;
  }
}
