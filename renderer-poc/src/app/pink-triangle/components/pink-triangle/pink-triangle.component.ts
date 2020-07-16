import { Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ItemsService } from '../../../item-count/services/items/items.service';
import { ItemRendererService } from 'item-renderer';
import { GreenCircleFactory } from '../../../green-circle/services/green-circle-factory/green-circle-factory.service';

@Component({
  selector: 'app-pink-triangle',
  styleUrls: [ './pink-triangle.component.scss' ],
  template: '<ng-container #vcr></ng-container>'
})
export class PinkTriangleComponent implements OnInit {
  @ViewChild('vcr', { read: ViewContainerRef }) private vcr: ViewContainerRef;

  constructor(private items: ItemsService, @Inject('ItemRendererService') private itemRenderer: ItemRendererService<GreenCircleFactory>) {
  }

  ngOnInit(): void {
    this.items.debouncedCount$
      .subscribe(c => this.itemRenderer.render(this.vcr, c));
  }
}
