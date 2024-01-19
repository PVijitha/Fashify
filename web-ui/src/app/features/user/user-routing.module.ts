import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoreModule } from 'src/app/core/core.module';

const routes: Routes = [
  {
    path: '', component: UserLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'cart', component: CartComponent},
      { path: 'categories', component: CategoriesComponent},
      { path: 'about-us', component: AboutUsComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
