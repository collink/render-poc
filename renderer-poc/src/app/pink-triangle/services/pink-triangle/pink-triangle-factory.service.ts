import { ComponentFactory, ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { ItemFactory } from 'item-renderer';
import { PinkTriangleItemComponent } from '../../components/pink-triangle-item/pink-triangle-item.component';
import { GreenCircleItemComponent } from '../../../green-circle/components/green-circle-item/green-circle-item.component';
import { BlueHexagonItemComponent } from '../../../blue-hexagon/components/blue-hexagon-item/blue-hexagon-item.component';

@Injectable({
  providedIn: 'root'
})
export class PinkTriangleFactory extends ItemFactory<PinkTriangleItemComponent> {
  constructor(private cfr: ComponentFactoryResolver) {
    super(PinkTriangleItemComponent, cfr);
  }
}
