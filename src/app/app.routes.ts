import { NgModule } from '@angular/core';
import { Routes, RouterModule, NavigationStart, Router } from '@angular/router';

import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/plataforma',
		pathMatch: 'full'
	},
	{
		path: 'plataforma',
		component: LayoutComponent,
		children: [
			{
				path: '',
				component: HomeComponent,
				pathMatch: 'full'
			},
		]
	},
	{
		path: '404',
		component: LayoutComponent,
		children: [
			{
				path: '',
				component: NotFoundComponent,
				pathMatch: 'full'
			}
		]
	},
	{
		path: '**',
		redirectTo: '/404',
		pathMatch: 'full'
	}
];
// *******************************************************************************
//

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
	exports: [RouterModule]
})

export class AppRoutingModule {
}
