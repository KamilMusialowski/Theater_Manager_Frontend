import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ArtCreationService} from "../../../../core/services/art-creation.service";
import {TheaterListModel} from "../../../../core/models/theatre-models/theater-list.model";
import {TheaterService} from "../../../../core/services/theater.service";
import {UserService} from "../../../../core/services/user.service";

@Component({
  selector: 'app-expandable-create-section',
  templateUrl: './expandable-create-section.component.html',
  styleUrls: ['./expandable-create-section.component.css'],
  imports: [
    NgClass,
    FormsModule,
    NgForOf
  ],
  standalone: true
})
export class ExpandableCreateSectionComponent implements OnInit{

  isExpanded: boolean = false;
  artTitle: string = '';
  author_1: string = '';
  author_2: string = '';
  author_3: string = '';
  numberOfActs: number = 1;
  selectedTheaterId: string = '';
  usersTheatersList: TheaterListModel[] = [];

  constructor(private artCreationService: ArtCreationService, private theaterService: TheaterService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.theaterService.getTheatersOfManager(this.userService.loggedInUserId).then(response => {
      this.usersTheatersList = response.data;
    })
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  startArtCreation() {
    this.artCreationService.saveArtCreateStartData(this.selectedTheaterId, this.artTitle, this.author_1, this.author_2, this.author_3, this.numberOfActs);
  }

  onTheaterSelected(theaterId: string) {
    this.selectedTheaterId = theaterId;
    const colonIndex = this.selectedTheaterId.indexOf(':');

    if (colonIndex && colonIndex !== -1) {
      this.selectedTheaterId = this.selectedTheaterId.substring(colonIndex + 1).trim();
    }
    console.log(this.selectedTheaterId);
  }
}
