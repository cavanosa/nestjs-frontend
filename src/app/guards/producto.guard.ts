import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoGuard implements CanActivate {

  realRol: string;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = next.data.expectedRol;
    this.realRol = this.tokenService.isAdmin() ? 'admin' : 'user';
    if (!this.tokenService.isLogged() || expectedRol.indexOf(this.realRol) < 0) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}
