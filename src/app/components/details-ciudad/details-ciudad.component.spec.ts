import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCiudadComponent } from './details-ciudad.component';

describe('DetailsCiudadComponent', () => {
  let component: DetailsCiudadComponent;
  let fixture: ComponentFixture<DetailsCiudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCiudadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
