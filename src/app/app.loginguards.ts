import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Injectable()
export class LoginGuard implements CanActivate {

	constructor(private router: Router, private appService: AppService) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return true;
	}
}