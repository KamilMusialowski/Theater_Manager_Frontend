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
    AssignArtRolesComponent
  ]
})
export class FeaturesModule {
}
