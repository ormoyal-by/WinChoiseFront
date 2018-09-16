import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BiladiComponent} from './biladi/biladi.component';
import {ProductdetailsComponent} from './productdetails/productdetails.component';
import {BirthpackagesComponent} from './birthpackages/birthpackages.component';

const routes: Routes = [
    {
        path:'',
        component:BirthpackagesComponent
    },
    {
        path:'biladi',
        component:BiladiComponent
    },
    {
        path:'productdetails',
        component:ProductdetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
