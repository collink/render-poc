import { Component, Inject, OnInit } from '@angular/core';
import { ItemRendererService } from 'item-renderer';
import { BlueHexagonFactory } from '../../services/blue-hexagon-factory/blue-hexagon-factory.service';
import { ItemsService } from '../../../item-count/services/items/items.service';

@Component({
  selector: 'app-blue-hexagon',
  templateUrl: './blue-hexagon.component.html',
  styleUrls: [ './blue-hexagon.component.scss' ]
})
export class BlueHexagonComponent implements OnInit {
  constructor(private items: ItemsService, @Inject('ItemRendererService') private itemRenderer: ItemRendererService<BlueHexagonFactory>) {
  }

  ngOnInit(): void {
    this.itemRenderer.render();
  }
}
