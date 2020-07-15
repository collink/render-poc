import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectToRendererGuard implements CanActivate {
  public constructor(private router: Router) {
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const renderer = localStorage.getItem('renderer') || 'blue-hexagon';

    this.router.navigate([ renderer ])

    return false;
  }
}
