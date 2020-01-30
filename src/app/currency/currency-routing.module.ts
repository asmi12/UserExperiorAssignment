import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';


const routes: Routes = [
  {
  path:"",
  component: CurrencyComponent
  }
];


export const CurrencyRoutingModule = RouterModule.forChild(routes);