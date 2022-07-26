import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { CartComponent } from './component/cart/cart.component';
import { DiscountComponent } from './component/discount/discount.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { EditProductComponent } from './component/manage/edit-product/edit-product.component';
import { EditUsersComponent } from './component/manage/edit-users/edit-users.component';
import { ManageProductsComponent } from './component/manage/products/products.component';
import { UsersComponent } from './component/manage/users/users.component';
import { ProductCategoryComponent } from './component/product-category/product-category.component';
import { ProductsComponent } from './component/products/products.component';
import { SignupComponent } from './component/signup/signup.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',
    redirectTo: 'home' },
    {path: 'home', component:HomeComponent},
    {path: 'login',component:LoginComponent},
    {path: 'signup', component:SignupComponent},
    {path:'admin', component:AdminComponent},
    { path: 'admin/manage/users', component: UsersComponent },
    { path: 'admin/manage/products', component: ManageProductsComponent },
     //{path:'', redirectTo: 'products',pathMatch: 'full'},
    {path:'products', component: ProductsComponent},
    {path:'product/category', component: ProductCategoryComponent},
    {path:'cart',component:CartComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'discount', component:DiscountComponent},
    {path:'edit/product/:id' , component: EditProductComponent},
  {path:'edit/user/:id' , component: EditUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
