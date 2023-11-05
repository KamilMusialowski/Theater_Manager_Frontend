import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {CreateTheaterModalComponent} from "../create-theater-modal/create-theater-modal.component";
import {AgGridModule} from "ag-grid-angular";
import {ColDef, ValueFormatterParams} from "ag-grid-community";
import {UserService} from "../../../core/services/user.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TheaterService} from "../../../core/services/theater.service";

@Component({
  selector: 'app-add-personel-modal',
  templateUrl: './add-personel-modal.component.html',
  styleUrls: ['./add-personel-modal.component.css'],
  imports: [
    AgGridModule,
    ReactiveFormsModule,
    FormsModule
  ],
  standalone: true
})
export class AddPersonelModalComponent implements OnInit{

  ngOnInit() {
    this.getUsersToGrid();
  }

  constructor(private userService: UserService, private theaterService: TheaterService, private dialogRef: MatDialogRef<CreateTheaterModalComponent>) {
  }

  columnDefs: ColDef[] = [
    {
      headerName: 'First name',
      field: 'firstName1',
      width: 150
    }, {
      headerName: 'Last name',
      field: 'lastName',
      width: 200
    }, {
      headerName: 'Email',
      field: 'email',
      width: 300
    }, {
      headerName: 'Roles',
      field: 'systemRoles',
      valueFormatter: this.userRolesFormatter.bind(this),
      width: 400
    }
  ];

  private _rowData: any[] = [];

  selectedRow: any;
  selesctedRole = null;

  getUsersToGrid() {
    this.userService.getUsers().then(
      response => {
        this.rowData = response.data;
        console.log(this.rowData);
      }
    )
  }

  onRowSelected(event: any) {
    if(event.node.selected) {
      this.selectedRow = event.node.data;
    }
  }

  userRolesFormatter(params: ValueFormatterParams): string {
    if (params.value && Array.isArray(params.value)) {
      return params.value.map((role: { systemRole: string }) => role.systemRole).join(' ');
    } else {
      return '';
    }
  }

  onSubmitAddPersonel() {
    this.theaterService.addNewPersonel(this.selectedRow.email, this.theaterService.theaterId, this.selesctedRole).then(
      respond => {
        this.dialogRef.close();
      }
  )
  }

  get rowData(): any[] {
    return this._rowData;
  }

  set rowData(value: any[]) {
    this._rowData = value;
  }
}
