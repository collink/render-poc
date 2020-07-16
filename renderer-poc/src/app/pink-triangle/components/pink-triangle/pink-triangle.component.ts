import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { ItemsService } from '../../../item-count/services/items/items.service';
import { ItemRendererService } from 'item-renderer';
import { GreenCircleFactory } from '../../../green-circle/services/green-circle-factory/green-circle-factory.service';

@Component({
  selector: 'app-pink-triangle',
  styleUrls: [ './pink-triangle.component.scss' ],
  template: ''
})
export class PinkTriangleComponent implements OnInit {
  constructor(private items: ItemsService, @Inject('ItemRendererService') private itemRenderer: ItemRendererService<GreenCircleFactory>, private vcr: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.items.debouncedCount$
      .subscribe(c => this.itemRenderer.render(this.vcr, c));
  }
}
