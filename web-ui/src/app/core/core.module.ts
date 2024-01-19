import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DialogModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
