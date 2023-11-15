import {Component, OnInit} from '@angular/core';
import {
  ExpandableCreateSectionComponent
} from "./create-art/expandable-create-section/expandable-create-section.component";
import {AgGridModule} from "ag-grid-angular";
import {ColDef} from "ag-grid-community";
import {ArtService} from "../../core/services/art.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-arts-view',
  templateUrl: './arts-view.component.html',
  styleUrls: ['./arts-view.component.css'],
  imports: [
    ExpandableCreateSectionComponent,
    AgGridModule
  ],
  standalone: true
})
export class ArtsViewComponent implements OnInit {

  ngOnInit(): void {
    this.getDirectorsArts();
  }

  constructor(private artService: ArtService, private router: Router) {
  }

  columnDefs: ColDef[] = [
    {
      headerName: 'Title',
      field: 'theatreArt.title',
      width: 500
    },
    {
      headerName: 'Theater',
      field: 'theatreArt.theatre.name',
      width: 500
    }
  ];

  rowData: any[] = [];

  selectedRow: any;

  onRowSelected(event: any) {
    if(event.node.selected) {
      this.selectedRow = event.node.data;
    }
    console.log(this.selectedRow);
  }

  getDirectorsArts() {
    this.artService.getDirectorsArts().then(response => {
      this.rowData = response.data;
    })
  }

  clickAssignRoles() {
    let navExtras: NavigationExtras = {
      state: {
        artId: this.selectedRow.theatreArt.id,
        theatreId: this.selectedRow.theatreArt.theatre.id
      }
    }
    this.router.navigate(['main-view/assign-art-roles'], navExtras);
  }
}
