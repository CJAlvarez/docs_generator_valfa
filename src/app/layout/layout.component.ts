import { Component } from '@angular/core';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {

	h_clicked = false;

	year = new Date().getFullYear();
}
