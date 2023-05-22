import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddacComponent } from './addac/addac.component';
import { ViewacComponent } from './viewac/viewac.component';
import { EditacComponent } from './editac/editac.component';
import { DeleteacComponent } from './deleteac/deleteac.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'add-account',component:AddacComponent
  },
  {
    path:'view-account/:id',component:ViewacComponent
  },
  {
    path:'edit-account/:id',component:EditacComponent
  },
  {
    path:'delete-account/:id',component:DeleteacComponent
  },
  //page not found
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
