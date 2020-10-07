import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {DataApiService } from '../../services/data-api.service';
import { CiudadInterface } from '../../models/ciudad';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose') btnClose: ElementRef;

  ngOnInit(): void {
  }

  onSaveCiudad(ciudadForm: NgForm): void{
    if (ciudadForm.value.id == null){
    this.dataApi.addCiudades(ciudadForm.value);
    } else {
      this.dataApi.updateCiudades(ciudadForm.value);
    }
    ciudadForm.resetForm();
    this.btnClose.nativeElement.click();
  }

}
