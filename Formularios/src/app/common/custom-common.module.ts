import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [AlertComponent, TableComponent],
  imports: [CommonModule
  ],
  exports: [AlertComponent, TableComponent]
})
export class CustomCommonModule { }
