import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';

@NgModule({
  declarations: [PeopleComponent],
  imports: [CommonModule, HttpClientModule, PeopleRoutingModule],
})
export class PeopleModule {}
