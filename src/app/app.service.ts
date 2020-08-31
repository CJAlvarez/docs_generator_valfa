import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpUrlEncodingCodec, HttpParameterCodec, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

// import { Socket } from 'ngx-socket-io';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import { Socket } from 'ngx-socket-io';
import * as socketIo from 'socket.io-client';


declare var io: {
	connect(url: string): Socket;
};

export class FormQueryEncoder implements HttpParameterCodec {
	encodeKey(k: string): string { return encodeURIComponent(k); }
	encodeValue(v: string): string { return encodeURIComponent(v); }
	decodeKey(k: string): string { return encodeURIComponent(k); }
	decodeValue(v: string): string { return encodeURIComponent(v); }
}

@Injectable()
export class AppService {
	private endpoint: string;
	private user_session_name: string;
	socketComment: Socket
	socketChange: Socket
	observer: Observer<any>;
	flagNewComment: boolean
	flagNewChange: boolean

	set pageTitle(value: string) {
		this.titleService.setTitle(`Docs Generator | ${value}`);
	}

	public host = "";

	constructor(private httpClient: HttpClient, public router: Router, public activeRoute: ActivatedRoute, private titleService: Title) {
		this.host = "https://" + window.location.hostname;
		this.endpoint = this.host + "/api";

		this.user_session_name = 'docs_generator_session';
	}

	get_endpoint = () => this.host;

	// _______________________________________________________________________________________
	// 									   	  UTIL

	redirect_to = url => this.router.navigateByUrl(url);


	// 									   	  UTIL
	// _______________________________________________________________________________________

	// _______________________________________________________________________________________
	// 									   	  SESSION


	get_session = (session = localStorage.getItem(this.user_session_name)) =>
		session
			? JSON.parse(session)
			: null

	set_session = session => {
		localStorage.setItem(this.user_session_name, JSON.stringify(session))
	};

	reset_session = () => {
		localStorage.removeItem(this.user_session_name)
	};


	// 									   	  SESSION
	// _______________________________________________________________________________________

	// _______________________________________________________________________________________
	// 									   	  CATALOGS

	// 									   	  CATALOGS
	// _______________________________________________________________________________________

	// _______________________________________________________________________________________
	// 									   	  USER

	// 									   	  USER
	// _______________________________________________________________________________________

	// _______________________________________________________________________________________
	// 									   	  PROGRAM


	// 									   	  PROGRAM
	// _______________________________________________________________________________________

	// _______________________________________________________________________________________
	// 									   	  CHAPTER


	// 									   	  CHAPTER
	// _______________________________________________________________________________________

	// _______________________________________________________________________________________
	// 									   	  SCORES

	// 									   	  SCORES
	// _______________________________________________________________________________________

}

