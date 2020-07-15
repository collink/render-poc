import { Injectable } from '@angular/core';
import { IItemFactory } from 'item-renderer';

@Injectable({
  providedIn: 'root'
})
export class BlueHexagonFactory implements IItemFactory {
  public createItem(): any {
    console.log('create a blue hexagon');
  }
}
