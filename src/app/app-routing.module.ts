import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateCountryComponent } from './crud/create/create-country/create-country.component';
import { MyCountryComponent } from './crud/read/my-country/my-country.component';
import { UpdateCountryComponent } from './crud/update/update-country/update-country.component';
import { AuthGuard } from './guards/auth.guard';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageOriginPaysComponent } from './pages/page-origin-pays/page-origin-pays.component';
import { PageProduitComponent } from './pages/page-produit/page-produit.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';

const routes: Routes = [
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent },
  // { path: '', component: PageAccueilComponent },
  { path: 'accueil', component: PageAccueilComponent },
  { path: 'produit', component: PageProduitComponent },
  { path: 'sign-in', component: PageSignInComponent },
  { path: 'sign-up', component: PageSignUpComponent },
  {
    path: 'country/:id-country',
    component: PageOriginPaysComponent,
  },
  {
    path: 'create-country',
    component: CreateCountryComponent,
  },
  { path: 'my-country', component: MyCountryComponent },
  { path: 'update-country/:id-country', component: UpdateCountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
