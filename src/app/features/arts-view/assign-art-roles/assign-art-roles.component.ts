import {AfterViewInit, ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {ArtService} from "../../../core/services/art.service";
import {CharacterModel} from "../../../core/models/art-models/character-models/character-model";
import {TheaterService} from "../../../core/services/theater.service";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-assign-art-roles',
  templateUrl: './assign-art-roles.component.html',
  styleUrls: ['./assign-art-roles.component.css'],
  imports: [
    NgForOf,
    FormsModule
  ],
  standalone: true
})
export class AssignArtRolesComponent implements OnInit {

  artId: string = '';
  theatreId: string = '';
  art: any;
  characters: CharacterModel[] = [];
  actors: any[] = [];
  assignedActors: {id: string, character: string, actorId: string}[] = [];

  async ngOnInit() {
    this.artId = history.state.artId;
    this.theatreId = history.state.theatreId;
    this.assignedActors = history.state.assignedActors;
    this.art = history.state.art;
    this.actors = history.state.actors;
    this.characters = history.state.characters;
  }

  constructor(private artService: ArtService, private theaterService: TheaterService, private router: Router, private ngZone: NgZone, private spectator: ChangeDetectorRef){}

  onActorSelected(character: string, selectedActorId: string): void {
    const assignedActorIndex = this.assignedActors.findIndex(a => a.character === character);
    this.assignedActors[assignedActorIndex].actorId = selectedActorId;
  }

  onSaveClick() {
    this.artService.assignRolesToActors(this.artId, this.assignedActors).then(response => {
      this.router.navigate(["main-view/arts-view"]);
    })
  }

}
