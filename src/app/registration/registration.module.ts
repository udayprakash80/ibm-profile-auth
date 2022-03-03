import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import {MaterialModule} from "../material.module";
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    ProfileDetailComponent
  ],
  exports: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    MaterialModule

  ]
})
export class RegistrationModule { }
