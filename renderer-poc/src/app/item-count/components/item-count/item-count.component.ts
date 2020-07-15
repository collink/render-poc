import { Component } from '@angular/core';
import { ItemsService } from '../../services/items/items.service';

@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.scss']
})
export class ItemCountComponent {
  public renderer: string;

  public get itemCount(): number {
    return this.items?.count;
  }

  public constructor(private items: ItemsService) {
  }

  public increment(): void {
    this.items.increment();
  }

  public decrement(): void {
    this.items.decrement();
  }
}
