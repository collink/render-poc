import { ElementRef, Injectable } from '@angular/core';
import { IItemFactory } from '../../interfaces/item-factory.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemRendererService<TItemFactory extends IItemFactory> {
  constructor(private factory: TItemFactory) {
  }

  // public render(count: Number, host: ElementRef): void {
  public render(): void {
    this.factory.createItem()
  }
}
