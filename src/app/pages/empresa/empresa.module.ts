import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaListaComponent } from './empresa-lista/empresa-lista.component';
import { EmpresaFormularioComponent } from './empresa-formulario/empresa-formulario.component';
import { EmpresaServiceService } from './empresa-service.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EmpresaListaComponent, 
    EmpresaFormularioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule 
  ],
  providers: [EmpresaServiceService]
})
export class EmpresaModule { }
