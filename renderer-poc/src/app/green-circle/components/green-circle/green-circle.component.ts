import { Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ItemRendererService } from 'item-renderer';
import { ItemsService } from '../../../item-count/services/items/items.service';
import { GreenCircleFactory } from '../../services/green-circle-factory/green-circle-factory.service';

@Component({
  selector: 'app-green-circle',
  styleUrls: [ './green-circle.component.scss' ],
  template: '<ng-container #vcr></ng-container>'
})
export class GreenCircleComponent implements OnInit {
  @ViewChild('vcr', { read: ViewContainerRef }) private vcr: ViewContainerRef;

  constructor(private items: ItemsService, @Inject('ItemRendererService') private itemRenderer: ItemRendererService<GreenCircleFactory>) {
  }

  ngOnInit(): void {
    this.items.debouncedCount$
      .subscribe(c => this.itemRenderer.render(this.vcr, c));
  }
}
