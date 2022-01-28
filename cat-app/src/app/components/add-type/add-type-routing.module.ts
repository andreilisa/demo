import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTypeComponent } from './add-type.component';

const routes: Routes = [
  { path: '', component: AddTypeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTypeRoutingModule { }
