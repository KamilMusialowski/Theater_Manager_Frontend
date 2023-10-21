import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadComponent: () =>
      import("./features/welcome/welcome.component").then((m) => m.WelcomeComponent),
  },
  {
    path:"authentication",
    loadComponent: () =>
      import("./core/authentication/auth-page/auth-page.component").then((m) => m.AuthPageComponent)
  },
  {
    path:"main-view",
    loadComponent: () =>
      import("./features/main-view/main-view.component").then((m => m.MainViewComponent))
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
