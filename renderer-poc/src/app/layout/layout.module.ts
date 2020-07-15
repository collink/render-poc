import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ItemCountModule } from '../item-count/item-count.module';



@NgModule({
    declarations: [ LayoutComponent ],
    exports: [
        LayoutComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    ItemCountModule
  ]
})
export class LayoutModule { }
