import { BrowserModule, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { AppRoutingModule } from './app.routes';
registerLocaleData(localeEs, 'es-hn');
import { NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbAlertModule, NgbModalModule, NgbModule, NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from './app.service';
import { AppFunctions } from './app.functions';
import { LoginGuard } from './app.loginguards';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './app.httpinterceptor';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
const config: SocketIoConfig = { url: "http://" + window.location.hostname + ":8000/api", options: {} };


@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent,
		LayoutComponent,
		HomeComponent
	],
	imports: [
		NgbModalModule,
		NgbDropdownModule,
		NgbDatepickerModule,
		NgSelectModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		NgbAlertModule,
		NgbModule,
		ReactiveFormsModule,
		InfiniteScrollModule,
		FormsModule,
		FileUploadModule,
		NgxMaskModule.forRoot(),
		CommonModule,
		ToastrModule.forRoot({
			positionClass: 'toast-top-right',
			preventDuplicates: true,
		}),
		RouterModule,
		NgbDropdownModule,
		ClickOutsideModule,
		SocketIoModule.forRoot(config)
	],
	providers: [
		Title,
		AppService,
		AppFunctions,
		LoginGuard
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }