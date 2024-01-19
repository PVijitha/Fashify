import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from '../features/landing/login/login.component';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class SharedModule { }
