import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfeatureComponent } from './addfeature/addfeature.component';
import { ListfeaturesComponent } from './listfeatures/listfeatures.component';

const routes: Routes = [
  {path:"", component:ListfeaturesComponent},
  {path:"listfeatures", component:ListfeaturesComponent},
  {path:"showaddfeature", component:AddfeatureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
