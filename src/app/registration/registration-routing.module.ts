import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import {ProfileDetailComponent} from "./profile-detail/profile-detail.component";
import {
  AuthGuardService as AuthGuard
} from '../auth-guard.service';

const routes: Routes = [{ path: '', component: RegistrationComponent },
  { path: 'profile',
    component: ProfileDetailComponent,
    canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
