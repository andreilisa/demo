import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeleteUpdateComponent} from "./delete-update.component";

const routes: Routes = [
  { path: '', component: DeleteUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteUpdateRoutingModule { }
