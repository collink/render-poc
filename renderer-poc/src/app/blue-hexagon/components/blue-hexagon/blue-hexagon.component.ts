import { Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ItemRendererService } from 'item-renderer';
import { BlueHexagonFactory } from '../../services/blue-hexagon-factory/blue-hexagon-factory.service';
import { ItemsService } from '../../../item-count/services/items/items.service';

@Component({
  selector: 'app-blue-hexagon',
  styleUrls: [ './blue-hexagon.component.scss' ],
  template: '<ng-container #vcr></ng-container>',
})
export class BlueHexagonComponent implements OnInit {
  @ViewChild('vcr', { read: ViewContainerRef }) private vcr: ViewContainerRef;

  constructor(private items: ItemsService, @Inject('ItemRendererService') private itemRenderer: ItemRendererService<BlueHexagonFactory>) {
  }

  ngOnInit(): void {
    this.items.debouncedCount$
      .subscribe(c => this.itemRenderer.render(this.vcr, c));
  }
}
