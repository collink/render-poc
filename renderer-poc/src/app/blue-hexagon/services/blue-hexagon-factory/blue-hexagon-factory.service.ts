import { ComponentFactoryResolver, Injectable} from '@angular/core';
import { ItemFactory } from 'item-renderer';
import { BlueHexagonItemComponent } from '../../components/blue-hexagon-item/blue-hexagon-item.component';

@Injectable({
  providedIn: 'root'
})
export class BlueHexagonFactory extends ItemFactory<BlueHexagonItemComponent> {
  constructor(private cfr: ComponentFactoryResolver) {
    super(BlueHexagonItemComponent, cfr);
  }
}
