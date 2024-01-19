import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./features/landing/landing.module').then((m) => m.LandingModule),
   },
   {
    path: '',
    loadChildren: () => import('./features/user/user.module').then((m) => m.UserModule)
   },
   {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule)
   },
   {
    path: '**',
    component: NotFoundComponent,
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
