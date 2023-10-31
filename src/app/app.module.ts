import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthPageComponent} from './core/authentication/auth-page/auth-page.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import {FeaturesModule} from "./features/features.module";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AgGridModule} from "ag-grid-angular";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WelcomeComponent,
    AuthPageComponent,
    FeaturesModule,
    CoreModule,
    SharedModule,
    MatDialogModule,
    MatSnackBarModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
