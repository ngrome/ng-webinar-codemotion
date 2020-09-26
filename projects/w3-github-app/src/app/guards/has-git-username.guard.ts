import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserProfileService} from '../services/user-profile.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HasGitUsernameGuard implements CanActivate {
  constructor(private userProfile: UserProfileService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.userProfile.getProfile().pipe(map(profile => {
      const hasGitLogin = !!profile.gitLogin;
      console.log('HasGitUsernameGuard, il profilo ha un valore per `git login`?', hasGitLogin);
      return hasGitLogin;
    }));

  }

}
