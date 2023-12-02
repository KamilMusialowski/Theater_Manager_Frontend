import {Component, OnInit} from '@angular/core';
import {
  ExpandableCreateSectionComponent
} from "./create-art/expandable-create-section/expandable-create-section.component";
import {AgGridModule} from "ag-grid-angular";
import {ColDef} from "ag-grid-community";
import {ArtService} from "../../core/services/art.service";
import {NavigationExtras, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CreateTheaterModalComponent} from "../theaters-view/create-theater-modal/create-theater-modal.component";
import {CreateRehearsalComponent} from "../rehearsal-view/create-rehearsal/create-rehearsal.component";
import {RehearsalService} from "../../core/services/rehearsal.service";
import {CharacterModel} from "../../core/models/art-models/character-models/character-model";
import {TheaterService} from "../../core/services/theater.service";
import {waitForAsync} from "@angular/core/testing";

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

  art: any;
  characters: CharacterModel[] = [];
  actors: any[] = [];
  assignedActors: { id: string, character: string, actorId: string }[] = [];

  ngOnInit(): void {
    this.getDirectorsArts();
  }

  constructor(private theaterService: TheaterService, private artService: ArtService, private router: Router, private dialog: MatDialog, private rehearsalService: RehearsalService) {
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
      width: 500,
      sortable: true
    }
  ];

  rowData: any[] = [];

  selectedRow: any;

  onRowSelected(event: any) {
    if (event.node.selected) {
      this.selectedRow = event.node.data;
    }
  }

  getDirectorsArts() {
    this.artService.getDirectorsArts().then(response => {
      this.rowData = response.data;
    })
  }

  async clickAssignRoles() {
    await this.prepareDataForView();
    let navExtras: NavigationExtras = {
      state: {
        artId: this.selectedRow.theatreArt.id,
        theatreId: this.selectedRow.theatreArt.theatre.id,
        art: this.art,
        characters: this.characters,
        actors: this.actors,
        assignedActors: this.assignedActors
      }
    }
    this.router.navigate(['main-view/assign-art-roles'], navExtras);
  }

  async prepareDataForView() {
    this.art = null;
    this.characters = [];
    this.actors = [];
    this.assignedActors = [];
    let artId = this.selectedRow.theatreArt.id;
    let theatreId = this.selectedRow.theatreArt.theatre.id
    await this.theaterService.getActors(theatreId).then(response => {
      this.actors = response.data;
    });
    await this.artService.getTheaterArt(artId).then(r => {
      this.getTheaterArtResponse(r);
    });
  }

  private getTheaterArtResponse(r: any) {
    this.art = r.data;
    this.characters = this.art.characters;
    for (const element of this.characters) {
      this.assignedActors.push({
        id: '',
        character: element.name,
        actorId: ''
      })
    }
    for (const element of this.art.involvedPersonel) {
      for (const value of this.assignedActors) {
        if (value.character && element.character && element.character.name && value.character === element.character.name) {
          value.actorId = element.involvedUser.id;
          value.id = element.id
        }
      }
    }
  }

  clickCreateRehearsal() {
    this.rehearsalService.artId = this.selectedRow.theatreArt.id;
    this.rehearsalService.theaterId = this.selectedRow.theatreArt.theatre.id;
    let createRehearsalDialog = this.dialog.open(CreateRehearsalComponent, {
      height: '400px',
      width: '500px'
    });
  }
}
