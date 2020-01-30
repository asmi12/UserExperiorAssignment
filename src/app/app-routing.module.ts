import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CurrencyModule } from './currency/currency.module';
import { LanguageModule } from './language/language.module';
import { HomeModule } from './home/home.module';
import { FullComponent } from './layout/full/full.component';



const routes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: () =>
          import('./home/home.module').then(mod => mod.HomeModule),
      },
      {
        path: 'currency',
        loadChildren: () =>
          import('./currency/currency.module').then(mod => mod.CurrencyModule),
      },
      {
        path: 'language',
        loadChildren: () =>
          import('./language/language.module').then(mod => mod.LanguageModule),
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
