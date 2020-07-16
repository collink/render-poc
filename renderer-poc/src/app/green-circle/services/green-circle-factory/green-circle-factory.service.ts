import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { ItemFactory } from 'item-renderer';
import { GreenCircleItemComponent } from '../../components/green-circle-item/green-circle-item.component';

@Injectable({
  providedIn: 'root'
})
export class GreenCircleFactory extends ItemFactory<GreenCircleItemComponent> {
  constructor(private cfr: ComponentFactoryResolver) {
    super(GreenCircleItemComponent, cfr);
  }
}
