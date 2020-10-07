import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { rejects } from 'assert';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth, public auth: AngularFireAuth) {
    
   }

  registerUser(email: string, password:string){
    return new Promise((resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(email,password)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  loginEmailUser(email: string, pass: string ){
    return new Promise((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  loginGoogleUser(){
    return this.auth.signInWithPopup( new auth.GoogleAuthProvider());
  }
  logoutUser(){
    return this.auth.signOut();
  }
  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth ));
  }
}