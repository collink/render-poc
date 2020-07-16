import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items/items.service';

@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.scss']
})
export class ItemCountComponent implements OnInit {
  public renderer: string;
  public itemCount: number = 0;

  public constructor(private items: ItemsService) {
  }

  public ngOnInit(): void {
    this.items.count$
      .subscribe(c => this.itemCount = c);
  }

  public increment(): void {
    this.items.increment();
  }

  public decrement(): void {
    this.items.decrement();
  }
}
