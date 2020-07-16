import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { ItemRendererService } from 'item-renderer';
import { ItemsService } from '../../../item-count/services/items/items.service';
import { GreenCircleFactory } from '../../services/green-circle-factory/green-circle-factory.service';

@Component({
  selector: 'app-green-circle',
  styleUrls: [ './green-circle.component.scss' ],
  template: ''
})
export class GreenCircleComponent implements OnInit {
  constructor(private items: ItemsService, @Inject('ItemRendererService') private itemRenderer: ItemRendererService<GreenCircleFactory>, private vcr: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.items.debouncedCount$
      .subscribe(c => this.itemRenderer.render(this.vcr, c));
  }
}
