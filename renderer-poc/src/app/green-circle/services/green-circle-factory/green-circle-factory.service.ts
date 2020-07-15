import { Injectable } from '@angular/core';
import { IItemFactory } from 'item-renderer';

@Injectable({
  providedIn: 'root'
})
export class GreenCircleFactory implements IItemFactory {
  public createItem(): any {
    console.log('create a green circle');
  }
}
