import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpresaServiceService } from '../empresa-service.service';

@Component({
  selector: 'app-empresa-formulario',
  templateUrl: './empresa-formulario.component.html',
  styleUrls: ['./empresa-formulario.component.css']
})
export class EmpresaFormularioComponent implements OnInit {
  formulario: FormGroup;
  disabled = true;
  empresa = {};
  constructor(private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private service : EmpresaServiceService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      id: [{ value: '', disabled: this.disabled }],
      name: [{ value: '', disabled: this.disabled }],
      username: [{ value: false, disabled: this.disabled }],
      email: [{ value: false, disabled: this.disabled }],
      street: [{ value: false, disabled: this.disabled }],
      suite: [{ value: false, disabled: this.disabled }],
      city: [{ value: false, disabled: this.disabled }],
      zipcode: [{ value: false, disabled: this.disabled }],
      lat: [{ value: false, disabled: this.disabled }],
      lng: [{ value: false, disabled: this.disabled }],
      phone: [{ value: false, disabled: this.disabled }],
      website: [{ value: false, disabled: this.disabled }],
      companyName: [{ value: false, disabled: this.disabled }],
      catchPhrase: [{ value: false, disabled: this.disabled }],
      bs: [{ value: false, disabled: this.disabled }],
    });
    const id = this.activeRoute.snapshot.params.id;
    this.empresa = this.service.getId(id);
    this.preencherFormulario();
  
  }
  preencherFormulario() {
    let empresa = this.empresa[0];
    this.formulario.patchValue(empresa);
    this.formulario.get('street').setValue(empresa.address.street);
    this.formulario.get('suite').setValue(empresa.address.suite);
    this.formulario.get('city').setValue(empresa.address.city);
    this.formulario.get('zipcode').setValue(empresa.address.zipcode);
    this.formulario.get('lat').setValue(empresa.address.geo.lat);
    this.formulario.get('lng').setValue(empresa.address.geo.lng);
    this.formulario.get('companyName').setValue(empresa.company.name);
    this.formulario.get('catchPhrase').setValue(empresa.company.catchPhrase);
    this.formulario.get('bs').setValue(empresa.company.bs);
    
  }
}
