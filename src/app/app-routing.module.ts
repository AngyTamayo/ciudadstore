import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './components/home/home.component';
import {OffersComponent } from 'src/app/components/offers/offers.component';
import { identifierModuleUrl } from '@angular/compiler';
import { DetailsCiudadComponent } from './components/details-ciudad/details-ciudad.component';
import { ListCiudadComponent } from './components/admin/list-ciudad/list-ciudad.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { NuevoComponent } from './components/users/nuevo/nuevo.component';
import { PrivadoComponent } from './components/users/privado/privado.component';
import { Page404Component } from './components/page404/page404.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'offers', component: OffersComponent},
  { path: 'ciudad/:id', component: DetailsCiudadComponent},
  { path: 'admin/list-ciudad', component: ListCiudadComponent},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/register', component: RegisterComponent},
  { path: 'user/profile', component: ProfileComponent},
  { path: 'user/nuevo', component: NuevoComponent},
  { path: 'user/privado', component: PrivadoComponent},
  { path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
