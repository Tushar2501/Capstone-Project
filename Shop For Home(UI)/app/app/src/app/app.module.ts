import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './component/cart/cart.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './component/admin/admin.component';
import { DiscountComponent } from './component/discount/discount.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { FooterComponent } from './component/footer/footer.component';
import { EditProductComponent } from './component/manage/edit-product/edit-product.component';
import { ProductCategoryComponent } from './component/product-category/product-category.component';
import { EditUsersComponent } from './component/manage/edit-users/edit-users.component';
import { UsersComponent } from './component/manage/users/users.component';
import { ManageProductsComponent } from './component/manage/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    SignupComponent,
    LoginComponent,
    UsersComponent,
    ManageProductsComponent,
    AdminComponent,
    HomeComponent,
    DiscountComponent,
    WishlistComponent,
    FooterComponent,
    EditProductComponent,
    ProductCategoryComponent,
    EditUsersComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    

    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
