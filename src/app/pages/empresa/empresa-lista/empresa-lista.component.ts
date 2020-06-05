import { Component, OnInit } from '@angular/core';
import { IEmpresa } from '../../interface/IEmpresa';
import { EmpresaServiceService } from '../empresa-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa-lista',
  templateUrl: './empresa-lista.component.html',
  styleUrls: ['./empresa-lista.component.css']
})
export class EmpresaListaComponent implements OnInit {
  listaEmpresa: Array<IEmpresa>;
  constructor(private service : EmpresaServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.search();
  }
 search() {
  this.listaEmpresa = this.service.getMock();
 }
 detalhar(item) {
  this.router.navigate([`detalhar/${item.id}`]);
   console.log(item);
 }
}
