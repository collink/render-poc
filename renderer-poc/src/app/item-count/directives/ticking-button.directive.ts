import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { delay, takeUntil } from 'rxjs/operators';
import { interval, Subject } from 'rxjs';

@Directive({
  selector: '[app-ticking-button]'
})
export class TickingButtonDirective {
  @Output() public tick = new EventEmitter<void>();
  @Input() public slowTicksPerSecond = 10;
  @Input() public slowTickDelay = 100;
  @Input() public mediumTicksPerSecond = 50;
  @Input() public mediumTickDelay = 1500;
  @Input() public fastTicksPerSecond = 500;
  @Input() public fastTickDelay = 3000;

  private _mouseUp$ = new Subject<void>();
  private _slowTickStart$ = new Subject<void>();
  private _mediumTickStart$ = new Subject<void>();
  private _fastTickStart$ = new Subject<void>();

  @HostListener('mousedown')
  public onMouseDown(): void {
    // when mouseup is triggered, emit a single tick unless the slow repeat has started
    const unsub = this._mouseUp$
      // if slow tick starts, ignore the initial click
      .pipe(
        takeUntil(this._slowTickStart$)
      )
      .subscribe(() => {
        // tick once, then unsubscribe -- this is essentially onclick
        this.tick.next();
        unsub?.unsubscribe();
      });

    this.triggerSlowTick();
    this.triggerMediumTick();
    this.triggerFastTick();
  }

  @HostListener('mouseup')
  public onMouseUp(): void {
    // notify tick streams of mouseup intent
    this._mouseUp$.next();
  }

  private triggerSlowTick(): void {
    // start an interval at the slow tick rate
    interval(1000 / this.slowTicksPerSecond)
      // delay interval by slowTickDelay
      .pipe(
        delay(this.slowTickDelay)
      )
      // if fast tick starts or mouseup fires, stop this interval immediately
      .pipe(
        takeUntil(this._mediumTickStart$),
        takeUntil(this._mouseUp$)
      )
      .subscribe(() => {
        // notify single click stream that slow tick has begun
        this._slowTickStart$.next();
        this.tick.next();
      });
  }

  private triggerMediumTick(): void {
    // start an interval at the fast tick rate
    interval(1000 / this.mediumTicksPerSecond)
      // delay interval by fastTickDelay
      .pipe(
        delay(this.mediumTickDelay)
      )
      // if mouseup fires, stop this interval immediately
      .pipe(
        takeUntil(this._fastTickStart$),
        takeUntil(this._mouseUp$)
      )
      .subscribe(() => {
        // notify slow tick stream that fast tick has begun
        this._mediumTickStart$.next();
        this.tick.next();
      });
  }

  private triggerFastTick(): void {
    // start an interval at the fast tick rate
    interval(1000 / this.fastTicksPerSecond)
      // delay interval by fastTickDelay
      .pipe(
        delay(this.fastTickDelay)
      )
      // if mouseup fires, stop this interval immediately
      .pipe(
        takeUntil(this._mouseUp$)
      )
      .subscribe(() => {
        // notify slow tick stream that fast tick has begun
        this._fastTickStart$.next();
        this.tick.next();
      });
  }
}
