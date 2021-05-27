import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleInteriorRoutingModule } from './people-interior-routing.module';
import { PeopleInteriorComponent } from './people-interior.component';
import { NavbarComponent } from '../navbar/navbar.component';


@NgModule({
	declarations: [
	PeopleInteriorComponent,
	],
	imports: [
		CommonModule,
		PeopleInteriorRoutingModule
	]
})
export class PeopleInteriorModule { }
