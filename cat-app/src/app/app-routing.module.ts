import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddTypeModule} from "./components/add-type/add-type.module";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/type' },
  { path: 'type', loadChildren: () => import('./components/type-list/type-list.module').then(m => m.TypeListModule) },
  { path: 'create', loadChildren: () => import ("./components/add-type/add-type.module").then(m => m.AddTypeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
