import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpResponse,
	HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { AppService } from './app.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(public appService: AppService) {

	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return null;
	}
}