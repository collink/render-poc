import { ComponentFactory, ComponentFactoryResolver, Injectable } from '@angular/core';
import { ItemFactory } from 'item-renderer';
import { BlueHexagonItemComponent } from '../../../blue-hexagon/components/blue-hexagon-item/blue-hexagon-item.component';
import { GreenCircleItemComponent } from '../../components/green-circle-item/green-circle-item.component';

@Injectable({
  providedIn: 'root'
})
export class GreenCircleFactory extends ItemFactory<GreenCircleItemComponent> {
  constructor(private cfr: ComponentFactoryResolver) {
    super(GreenCircleItemComponent, cfr);
  }
}
