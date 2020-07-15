import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCountComponent } from './components/item-count/item-count.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TickingButtonDirective } from './directives/ticking-button.directive';
import { MatCardModule } from '@angular/material/card';



@NgModule({
    declarations: [ ItemCountComponent, TickingButtonDirective ],
    exports: [
        ItemCountComponent
    ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ]
})
export class ItemCountModule { }
