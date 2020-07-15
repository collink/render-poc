import { Component, Inject, OnInit } from '@angular/core';
import { ItemRendererService } from 'item-renderer';
import { ItemsService } from '../../../item-count/services/items/items.service';
import { GreenCircleFactory } from '../../services/green-circle-factory/green-circle-factory.service';

@Component({
  selector: 'app-green-circle',
  templateUrl: './green-circle.component.html',
  styleUrls: ['./green-circle.component.scss'],
})
export class GreenCircleComponent implements OnInit {
  constructor(private items: ItemsService, @Inject('ItemRendererService') private itemRenderer: ItemRendererService<GreenCircleFactory>) {
  }

  ngOnInit(): void {
    this.itemRenderer.render();
  }
}
