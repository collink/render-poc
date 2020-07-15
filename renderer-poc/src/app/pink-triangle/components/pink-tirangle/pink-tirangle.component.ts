import { Component, Inject, OnInit } from '@angular/core';
import { ItemsService } from '../../../item-count/services/items/items.service';
import { ItemRendererService } from 'item-renderer';
import { GreenCircleFactory } from '../../../green-circle/services/green-circle-factory/green-circle-factory.service';

@Component({
  selector: 'app-pink-tirangle',
  templateUrl: './pink-tirangle.component.html',
  styleUrls: [ './pink-tirangle.component.scss' ]
})
export class PinkTirangleComponent implements OnInit {
  constructor(private items: ItemsService, @Inject('ItemRendererService') private itemRenderer: ItemRendererService<GreenCircleFactory>) {
  }

  ngOnInit(): void {
    this.itemRenderer.render();
  }
}
