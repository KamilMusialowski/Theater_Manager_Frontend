import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainViewComponent} from './main-view/main-view.component';
import {HeaderComponent} from './main-view/header/header.component';
import {TheatersViewComponent} from './theaters-view/theaters-view.component';
import {NavbarComponent} from './main-view/navbar/navbar.component';
import {CreateTheaterModalComponent} from './theaters-view/create-theater-modal/create-theater-modal.component';
import {AddPersonelModalComponent} from './theaters-view/add-personel-modal/add-personel-modal.component';
import {AgGridModule} from "ag-grid-angular";
import { ArtsViewComponent } from './arts-view/arts-view.component';
import { ExpandableCreateSectionComponent } from './arts-view/create-art/expandable-create-section/expandable-create-section.component';
import { AddCharactersViewComponent } from './arts-view/create-art/add-characters-view/add-characters-view.component';
import { AddScenesViewComponent } from './arts-view/create-art/add-scenes-view/add-scenes-view.component';
import { AssignArtRolesComponent } from './arts-view/assign-art-roles/assign-art-roles.component';
import { AddRoomModalComponent } from './theaters-view/add-room-modal/add-room-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CreateRehearsalComponent } from './rehearsal-view/create-rehearsal/create-rehearsal.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEventsComponent } from './user-view/user-events/user-events.component';
import { ChangePasswordViewComponent } from './user-view/change-password-view/change-password-view.component';
import { EditTheaterModalComponent } from './theaters-view/edit-theater-modal/edit-theater-modal.component';
import { TheaterPersonelViewComponent } from './theaters-view/theater-personel-view/theater-personel-view.component';


@NgModule({
  declarations: [
  ],
  exports: [
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    NavbarComponent,
    MainViewComponent,
    TheatersViewComponent,
    CreateTheaterModalComponent,
    AddPersonelModalComponent,
    AgGridModule,
    ArtsViewComponent,
    ExpandableCreateSectionComponent,
    AddCharactersViewComponent,
    AddScenesViewComponent,
    AssignArtRolesComponent,
    ReactiveFormsModule,
    AddRoomModalComponent,
    CreateRehearsalComponent,
    UserViewComponent,
    UserEventsComponent,
    ChangePasswordViewComponent,
    EditTheaterModalComponent,
    TheaterPersonelViewComponent
  ]
})
export class FeaturesModule {
}
