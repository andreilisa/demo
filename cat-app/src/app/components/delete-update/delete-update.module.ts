import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {DeleteUpdateComponent} from "./delete-update.component";
import {DeleteUpdateRoutingModule} from "./delete-update-routing.module";


@NgModule({
  imports: [DeleteUpdateRoutingModule, FormsModule, CommonModule],
  declarations: [DeleteUpdateComponent],
  exports: [DeleteUpdateComponent]
})
export class DeleteUpdateModule { }
