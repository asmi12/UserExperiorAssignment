import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageComponent } from './language/language.component';


const routes: Routes = [
  {
    path: "",
    component: LanguageComponent
  }
];


export const LanguageRoutingModule = RouterModule.forChild(routes);