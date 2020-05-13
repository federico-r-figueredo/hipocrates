import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitirPacienteComponent } from './admitir-paciente.component';

describe('AdmitirPacienteComponent', () => {
  let component: AdmitirPacienteComponent;
  let fixture: ComponentFixture<AdmitirPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmitirPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmitirPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
