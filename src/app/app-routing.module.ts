import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./features/welcome/welcome.component").then((m) => m.WelcomeComponent),
  },
  {
    path: "authentication",
    loadComponent: () =>
      import("./core/authentication/auth-page/auth-page.component").then((m) => m.AuthPageComponent)
  },
  {
    path: "main-view",
    loadComponent: () =>
      import("./features/main-view/main-view.component").then((m => m.MainViewComponent)),
    children: [
      {
        path: "theaters-view",
        loadComponent: () =>
          import("./features/theaters-view/theaters-view.component").then((m => m.TheatersViewComponent))
      }, {
        path: "arts-view",
        loadComponent: () =>
          import("./features/arts-view/arts-view.component").then((m => m.ArtsViewComponent))
      }
    ]
  },
  {
    path: "create-art-characters",
    loadComponent: () =>
      import("./features/arts-view/create-art/add-characters-view/add-characters-view.component").then((m => m.AddCharactersViewComponent))
  },
  {
    path: "create-art-scenes",
    loadComponent: () =>
      import("./features/arts-view/create-art/add-scenes-view/add-scenes-view.component").then((m => m.AddScenesViewComponent))
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
export class AppRoutingModule {
}
