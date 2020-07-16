import { ComponentFactory, ComponentFactoryResolver, Injectable, Type, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class ItemFactory<TItem> {
  protected _factory: ComponentFactory<TItem>;

  protected constructor(factoryType: Type<TItem>, private componentFactoryResolver: ComponentFactoryResolver) {
    this._factory = this.componentFactoryResolver.resolveComponentFactory(factoryType);
  }

  public createItem(vcr: ViewContainerRef): void {
    vcr.createComponent(this._factory);
  };
}
