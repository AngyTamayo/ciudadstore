import { Component, OnInit } from '@angular/core';
import{ AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private AuthService: AuthService,  public auth: AngularFireAuth) { }
  public app_name: string = 'Viajes Por El Mundo';
  public isLogged: boolean = false;
  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser(){
    this.AuthService.isAuth().subscribe( auth => {
      if (auth){
        console.log('user logged');
        this.isLogged = true;
      }else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }
  onlogout() {
    this.auth.signOut();
  }

}
