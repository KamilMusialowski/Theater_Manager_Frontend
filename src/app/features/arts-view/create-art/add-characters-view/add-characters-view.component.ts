import {Component, OnInit} from '@angular/core';
import {CharacterModel} from "../../../../core/models/art-models/character-models/character-model";
import {ArtCreationService} from "../../../../core/services/art-creation.service";
import {UserService} from "../../../../core/services/user.service";
import {HeaderComponent} from "../../../main-view/header/header.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {ColDef} from "ag-grid-community";
import {AgGridModule} from "ag-grid-angular";

@Component({
  selector: 'app-add-characters-view',
  templateUrl: './add-characters-view.component.html',
  styleUrls: ['./add-characters-view.component.css'],
  imports: [
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule
  ],
  standalone: true
})
export class AddCharactersViewComponent implements OnInit{

  newCharacter: CharacterModel = new CharacterModel('', '');
  characters: CharacterModel[] = [];

  columnDefs: ColDef[] = [
    {
      headerName: 'Characters name',
      field: 'name',
      width: 400
    },
    {
      headerName: 'Characters sex',
      field: 'sex',
      width: 200,
      sortable: true
    }
  ];

  constructor(private artCreationService: ArtCreationService, public userService: UserService, private router: Router) {
    this.newCharacter = new CharacterModel('', '');
    this.characters = [];
  }

  ngOnInit(): void {
    this.newCharacter = new CharacterModel('', '');
    this.characters = [];
  }

  onSexSelected(value: string): void {
    this.newCharacter.sex = value;
  }

  onAddCharacter() {
    this.characters.push(this.newCharacter);
    this.characters = [...this.characters]
    this.newCharacter = new CharacterModel('', '');
  }

  onContinue() {
    this.artCreationService.saveCharacters([...this.characters]);
    this.newCharacter = new CharacterModel('', '');
    this.characters = [];
    this.router.navigate(['create-art-scenes']);
  }
}
