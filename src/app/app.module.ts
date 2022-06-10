import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageProduitComponent } from './pages/page-produit/page-produit.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageOriginPaysComponent } from './pages/page-origin-pays/page-origin-pays.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './crud/update/update.component';

import { AdminComponent } from './admin/admin.component';
import { CreateCountryComponent } from './crud/create/create-country/create-country.component';
import { CreateProductComponent } from './crud/create/create-product/create-product.component';
import { CreateBrandComponent } from './crud/create/create-brand/create-brand.component';
import { CreateCategoryComponent } from './crud/create/create-category/create-category.component';
import { MyCountryComponent } from './crud/read/my-country/my-country.component';
import { MyProductComponent } from './crud/read/my-product/my-product.component';
import { MyBrandComponent } from './crud/read/my-brand/my-brand.component';
import { MyCategoryComponent } from './crud/read/my-category/my-category.component';
import { UpdateCountryComponent } from './crud/update/update-country/update-country.component';
import { UpdateBrandComponent } from './crud/update/update-brand/update-brand.component';
import { UpdateCategoryComponent } from './crud/update/update-category/update-category.component';
import { UpdateProductComponent } from './crud/update/update-product/update-product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageAccueilComponent,
    PageProduitComponent,
    PageSignInComponent,
    PageSignUpComponent,
    PageOriginPaysComponent,
    UpdateComponent,
    AdminComponent,
    CreateCountryComponent,
    CreateProductComponent,
    CreateBrandComponent,
    CreateCategoryComponent,
    MyCountryComponent,
    MyProductComponent,
    MyBrandComponent,
    MyCategoryComponent,
    UpdateCountryComponent,
    UpdateBrandComponent,
    UpdateCategoryComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
