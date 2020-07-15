import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ItemCountModule } from '../item-count/item-count.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [ LayoutComponent ],
    exports: [
        LayoutComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    ItemCountModule,
    MatButtonModule,
    RouterModule
  ]
})
export class LayoutModule { }
