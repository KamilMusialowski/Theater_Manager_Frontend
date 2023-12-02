import {ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ArtCreationService} from "../../../../core/services/art-creation.service";
import {UserService} from "../../../../core/services/user.service";
import {NavigationExtras, Router} from "@angular/router";
import {HeaderComponent} from "../../../main-view/header/header.component";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {CharacterModel} from "../../../../core/models/art-models/character-models/character-model";
import {SceneModel} from "../../../../core/models/art-models/scene-models/scene-model";
import {ColDef, ValueFormatterParams} from "ag-grid-community";
import {ActModel} from "../../../../core/models/art-models/act-models/act-model";
import {AgGridAngular, AgGridModule} from "ag-grid-angular";

@Component({
  selector: 'app-add-scenes-view',
  templateUrl: './add-scenes-view.component.html',
  styleUrls: ['./add-scenes-view.component.css'],
  imports: [
    HeaderComponent,
    FormsModule,
    NgForOf,
    AgGridModule
  ],
  standalone: true
})
export class AddScenesViewComponent implements OnInit {

  acts: number[];
  selectedAct: number = 1;
  characters: CharacterModel[];
  selectedCharacters: { [character: string]: boolean } = {};
  actModels: ActModel[] = [];

  columnDefs: ColDef[] = [
    {
      headerName: 'Scene number',
      field: 'number',
      width: 200,
      sortable: true
    },
    {
      headerName: 'Characters',
      field: 'theatreCharacters',
      valueFormatter: this.charactersValueFormatter.bind(this),
      width: 500
    }
  ];

  charactersValueFormatter(params: ValueFormatterParams): string {
    if (params.value && Array.isArray(params.value)) {
      return params.value.map((character) => character.name).join(' ');
    } else {
      return '';
    }
  }

  constructor(private cdr: ChangeDetectorRef, private artCreationService: ArtCreationService, public userService: UserService, private router: Router) {
    this.acts = [];
    for (let i = 1; i <= this.artCreationService.numberOfActs; i++) {
      this.acts.push(i);
    }
    this.characters = [];
    this.characters = [...this.artCreationService.creatingArt.characters];
  }

  ngOnInit(): void {
    this.acts = [];
    for (let i = 1; i <= this.artCreationService.numberOfActs; i++) {
      this.acts.push(i);
    }
    this.characters = [];
    this.characters = [...this.artCreationService.creatingArt.characters];
  }

  createScene() {
    let scene: SceneModel = new SceneModel(this.artCreationService.creatingArt.acts[this.selectedAct - 1].scenes.length + 1);
    for (const character of Object.keys(this.selectedCharacters)) {
      if (this.selectedCharacters[character]) {
        let characterToAdd: CharacterModel = new CharacterModel('', '');
        for (let c of this.characters) {
          if (c.name === character) {
            characterToAdd = c;
            break;
          }
        }
        scene.theatreCharacters.push(characterToAdd);
      }
    }
    this.artCreationService.addSceneToAct(this.selectedAct - 1, scene);
    this.actModels = [...this.artCreationService.creatingArt.acts];
    for(let act of this.actModels) {
      act.scenes = [...act.scenes]
    }
  }

  onCreateArt() {
    this.artCreationService.onCreateArt().then(response => {
      const navExtras: NavigationExtras = {
        state: {
          userId: this.userService.loggedInUserId,
          userName: this.userService.loggedInUserFirstName,
          userRoles: this.userService._loggedInUserRoles
        }
      };
      this.router.navigate(['main-view/arts-view'], navExtras);
    });
  }
}
