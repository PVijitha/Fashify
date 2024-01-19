import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CoreModule } from 'src/app/core/core.module';
import { DialogModule} from 'primeng/dialog';
@NgModule({
  declarations: [
    SignupComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    CoreModule,
    DialogModule
  ]
})
export class LandingModule { }
