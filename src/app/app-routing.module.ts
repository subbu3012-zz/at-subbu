import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'master', loadChildren: './master/master.module#MasterModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
  { path: 'order', loadChildren: './order/order.module#OrderModule' },
  { path: '', redirectTo: 'order', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
