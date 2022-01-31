import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {DeleteUpdateComponent} from "./delete-update.component";
import {DeleteUpdateRoutingModule} from "./delete-update-routing.module";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";


@NgModule({
  imports: [DeleteUpdateRoutingModule, FormsModule, CommonModule, NzIconModule, NzTableModule, NzDividerModule],
  declarations: [DeleteUpdateComponent],
  exports: [DeleteUpdateComponent]
})
export class DeleteUpdateModule { }
