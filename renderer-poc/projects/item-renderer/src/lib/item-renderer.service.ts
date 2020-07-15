import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemRendererService<TItemFactory> {
  constructor(private factory: TItemFactory) { }

  // public render(count: Number, host: ElementRef): void {
  public render(): void {

  }
}
