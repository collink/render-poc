import { Component, OnDestroy } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements  OnDestroy {
  private _routerSub: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    this._routerSub = router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => document.body.dataset.renderer = route.snapshot.firstChild.data.renderer);
  }

  public ngOnDestroy(): void {
    this._routerSub.unsubscribe();
  }
}
