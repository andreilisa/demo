import { TypeListRountingModule } from './type-list.rounting.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TypeListComponent } from './type-list.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { NzTableModule } from 'ng-zorro-antd/table';
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzPaginationModule} from "ng-zorro-antd/pagination";



@NgModule({
  imports: [TypeListRountingModule, FormsModule, CommonModule, NzTableModule, NzDividerModule, NzIconModule, NzModalModule, NzButtonModule, NzInputModule, NzPaginationModule],
  declarations: [TypeListComponent],
  exports: [TypeListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TypeListModule { }
