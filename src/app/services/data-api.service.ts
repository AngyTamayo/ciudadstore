import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { CiudadInterface } from '../models/ciudad';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private ciudadDoc: AngularFirestoreDocument<CiudadInterface>;
  ciudad: Observable<CiudadInterface>;

  constructor(private afs: AngularFirestore) { 
    
    this.publicacionesCollection = afs.collection<CiudadInterface>('publicaciones');
    this.publicaciones = this.publicacionesCollection.valueChanges();
  }
  private publicacionesCollection: AngularFirestoreCollection<CiudadInterface>;
  private publicaciones: Observable<CiudadInterface[]>;
  public selectedCiudad: CiudadInterface = {
    id: null
  };
 
  
 
  getAllCiudades(){
    return this.publicaciones = this.publicacionesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as CiudadInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  addCiudades(ciudad: CiudadInterface): void {
    this.publicacionesCollection.add(ciudad);
  }

  updateCiudades(ciudad: CiudadInterface): void {
    let idCiudad = ciudad.id;
    this.ciudadDoc = this.afs.doc<CiudadInterface>(`publicaciones/${idCiudad}`);
    this.ciudadDoc.update(ciudad);
  }
  deleteCiudades(idCiudad: string,): void {
    this.ciudadDoc = this.afs.doc<CiudadInterface>(`publicaciones/${idCiudad}`);
    this.ciudadDoc.delete();
  }
}