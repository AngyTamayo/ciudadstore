import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { CiudadInterface } from '../../../models/ciudad';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.css']
})
export class PrivadoComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private publicacones : CiudadInterface[] = [];

  ngOnInit() {
    this.getListCiudades();
  }

  getListCiudades() {
    this.dataApi.getAllCiudades()
    .subscribe(publicaciones => {
      this.publicacones = publicaciones;
    });
  }
  
  onDeleteCiudad(idCiudad: string) {
    console.log('DELETE', idCiudad);
      this.dataApi.deleteCiudades(idCiudad);
    }
  }

