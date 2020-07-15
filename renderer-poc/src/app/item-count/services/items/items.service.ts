import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private _count = 0;

  public get count(): number {
    return this._count;
  }

  public increment(): void {
    this._count++;
  }

  public decrement(): void {
    --this._count < 0 && (this._count = 0);
  }
}
