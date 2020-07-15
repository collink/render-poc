import { Injectable } from '@angular/core';
import { IItemFactory } from 'item-renderer';

@Injectable({
  providedIn: 'root'
})
export class PinkTriangleFactory implements IItemFactory {
  public createItem(): any {
    console.log('create a pink triangle');
  }
}
