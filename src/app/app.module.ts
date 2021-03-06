import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCiudadComponent } from './components/admin/list-ciudad/list-ciudad.component';
import { DetailsCiudadComponent } from './components/details-ciudad/details-ciudad.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { FormsModule} from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { NuevoComponent } from './components/users/nuevo/nuevo.component';
import { PrivadoComponent } from './components/users/privado/privado.component';
import {AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
@NgModule({
  declarations: [
    AppComponent,
    ListCiudadComponent,
    DetailsCiudadComponent,
    HeroComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    OffersComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component,
    NuevoComponent,
    PrivadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,

  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
