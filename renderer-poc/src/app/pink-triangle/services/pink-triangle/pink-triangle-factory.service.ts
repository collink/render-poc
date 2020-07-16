import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { ItemFactory } from 'item-renderer';
import { PinkTriangleItemComponent } from '../../components/pink-triangle-item/pink-triangle-item.component';

@Injectable({
  providedIn: 'root'
})
export class PinkTriangleFactory extends ItemFactory<PinkTriangleItemComponent> {
  constructor(private cfr: ComponentFactoryResolver) {
    super(PinkTriangleItemComponent, cfr);
  }
}
