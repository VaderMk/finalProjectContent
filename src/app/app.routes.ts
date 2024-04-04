import { CartComponent } from './components/cart/cart.component';
import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'users', component: UsersComponent},
  { path: 'product', component: ProductComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'cart', component: CartComponent}
];
