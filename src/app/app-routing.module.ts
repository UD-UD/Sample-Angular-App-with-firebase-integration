import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoodComponent} from './food/food.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import {FoodDetailComponent} from './food-detail/food-detail.component'
const routes: Routes = [
  { path: 'foods', component: FoodComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id' , component: FoodDetailComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}
