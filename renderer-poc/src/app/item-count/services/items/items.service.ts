import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private _count = new BehaviorSubject<number>(1)
  public count$ = this._count.asObservable();
  public debouncedCount$ = this._count.asObservable()
    .pipe(debounceTime(110)) // default slow rate is 10/s, or 100ms, +10ms


  public increment(): void {
    this._count.next(this._count.value + 1);
  }

  public decrement(): void {
    this._count.next(this._count.value === 0 ? 0 : this._count.value - 1)
  }
}
