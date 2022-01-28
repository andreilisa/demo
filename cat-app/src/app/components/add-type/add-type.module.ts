import { NgModule } from '@angular/core';

import { AddTypeRoutingModule } from './add-type-routing.module';

import { AddTypeComponent } from './add-type.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [AddTypeRoutingModule, FormsModule, CommonModule],
  declarations: [AddTypeComponent],
  exports: [AddTypeComponent]
})
export class AddTypeModule { }
