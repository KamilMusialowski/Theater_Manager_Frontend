import {Component, OnInit} from '@angular/core';
import {ArtCreationService} from "../../../../core/services/art-creation.service";
import {UserService} from "../../../../core/services/user.service";
import {Router} from "@angular/router";
import {HeaderComponent} from "../../../main-view/header/header.component";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {CharacterModel} from "../../../../core/models/art-models/character-models/character-model";
import {SceneModel} from "../../../../core/models/art-models/scene-models/scene-model";

@Component({
  selector: 'app-add-scenes-view',
  templateUrl: './add-scenes-view.component.html',
  styleUrls: ['./add-scenes-view.component.css'],
  imports: [
    HeaderComponent,
    FormsModule,
    NgForOf
  ],
  standalone: true
})
export class AddScenesViewComponent implements OnInit{

  acts: number[];
  selectedAct: number = 1;
  characters: CharacterModel[];
  selectedCharacters: {[character: string]: boolean} = {};

  constructor(private artCreationService: ArtCreationService, public userService: UserService, private router: Router) {
    this.acts = [];
    for(let i = 1; i <= this.artCreationService.numberOfActs; i++) {
      this.acts.push(i);
    }
    this.characters = [];
    this.characters = [...this.artCreationService.creatingArt.characters];

  }

  ngOnInit(): void {
    this.acts = [];
    for(let i = 1; i <= this.artCreationService.numberOfActs; i++) {
      this.acts.push(i);
    }
    this.characters = [];
    this.characters = [...this.artCreationService.creatingArt.characters];
  }

  createScene() {
    let scene: SceneModel = new SceneModel(this.artCreationService.creatingArt.acts[this.selectedAct-1].scenes.length+1);
    for(const character of Object.keys(this.selectedCharacters)) {
      if(this.selectedCharacters[character]) {
        let characterToAdd: CharacterModel = new CharacterModel('', '');
        for(let c of this.characters) {
          if(c.name === character) {
            characterToAdd = c;
            break;
          }
        }
        scene.theatreCharacters.push(characterToAdd);
      }
    }
    console.log(scene);
    this.artCreationService.addSceneToAct(this.selectedAct-1, scene);
    console.log(this.artCreationService.creatingArt);
  }

  onCreateArt() {
    this.artCreationService.onCreateArt().then(response => {
      this.router.navigate(['main-view/arts-view']);
    });
  }
}
