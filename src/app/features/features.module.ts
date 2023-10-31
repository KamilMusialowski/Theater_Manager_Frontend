import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainViewComponent} from './main-view/main-view.component';
import {HeaderComponent} from './main-view/header/header.component';
import {TheatersViewComponent} from './theaters-view/theaters-view.component';
import {NavbarComponent} from './main-view/navbar/navbar.component';
import {CreateTheaterModalComponent} from './theaters-view/create-theater-modal/create-theater-modal.component';
import {AddPersonelModalComponent} from './theaters-view/add-personel-modal/add-personel-modal.component';
import {AgGridModule} from "ag-grid-angular";


@NgModule({
  declarations: [],
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
    AgGridModule
  ]
})
export class FeaturesModule {
}
