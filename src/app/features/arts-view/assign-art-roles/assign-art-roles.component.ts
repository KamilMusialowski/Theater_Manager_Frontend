import {Component, OnInit} from '@angular/core';
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
export class AssignArtRolesComponent implements OnInit{

  artId: string = '';
  theatreId: string = '';
  art: any;
  characters: CharacterModel[] = [];
  actors: any[] = [];
  assignedActors: {character: string, actorId: string}[] = [];

  ngOnInit(): void {
    this.artId = history.state.artId;
    this.theatreId = history.state.theatreId;
    this.artService.getTheaterArt(this.artId).then(response => {
      this.art = response.data;
      this.characters = this.art.characters;
      for(const element of this.characters) [
        this.assignedActors.push({
          character: element.name,
          actorId: ''
        })
      ]
    });
    this.theaterService.getActors(this.theatreId).then(response => {
      this.actors = response.data;
      console.log(this.actors);
    })
  }

  constructor(private artService: ArtService, private theaterService: TheaterService, private router: Router){}

  onActorSelected(character: string, selectedActorId: string): void {
    const assignedActorIndex = this.assignedActors.findIndex(a => a.character === character);
    this.assignedActors[assignedActorIndex].actorId = selectedActorId;
    console.log(this.assignedActors);
  }

  onSaveClick() {
    this.artService.assignRolesToActors(this.artId, this.assignedActors).then(response => {
      this.router.navigate(["main-view/arts-view"]);
    })
  }

}
