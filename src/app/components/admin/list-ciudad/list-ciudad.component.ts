import { Component, OnInit } from '@angular/core';
import { CiudadInterface } from 'src/app/models/ciudad';
import { DataApiService } from '../../../services/data-api.service'

@Component({
  selector: 'app-list-ciudad',
  templateUrl: './list-ciudad.component.html',
  styleUrls: ['./list-ciudad.component.css']
})
export class ListCiudadComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public publicaciones = [];
  public ciudad = '';

  ngOnInit() {
    this.dataApi.getAllCiudades().subscribe(publicaciones => {
      console.log('CIUDADES', publicaciones);
      this.publicaciones = publicaciones;
    })
  }
  onDeleteCiudad(idCiudad: string) {
    console.log('DELETE', idCiudad);
    const confirmacion = confirm('Desea eliminarlo ?');
    if (confirmacion){
      this.dataApi.deleteCiudades(idCiudad);
    }
  }
  onPreUpdateCiudad(ciudad: CiudadInterface){
    this.dataApi.selectedCiudad = Object.assign({}, ciudad);
  }
}

