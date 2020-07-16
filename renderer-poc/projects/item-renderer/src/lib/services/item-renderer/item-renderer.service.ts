import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { ItemFactory } from '../../classes/item-factory.class';

@Injectable({
  providedIn: 'root'
})
export class ItemRendererService<TItemFactory extends ItemFactory<any>> {
  constructor(private factory: TItemFactory) {
  }

  public render(vcr: ViewContainerRef, count: number): void {
    vcr.clear();

    for (let i = 0; i < count; i++) {
      this.factory.createItem(vcr);
    }
  }
}
