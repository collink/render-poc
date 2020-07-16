import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SetRendererGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot): true {
    const renderer = next.data['renderer'] || null;

    localStorage.setItem('renderer', renderer);

    return true;
  }

}
