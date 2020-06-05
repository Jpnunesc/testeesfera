import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmpresaListaComponent } from './empresa/empresa-lista/empresa-lista.component';
import { EmpresaFormularioComponent } from './empresa/empresa-formulario/empresa-formulario.component';

const routes: Routes = [
    {
        path: "",
        data: {
            titulo: "Manter Empresa",
            breadcrumb: "Empresa"
        },
        children: [
            {
                path: "",
                component: EmpresaListaComponent,
                data: {
                    titulo: "Listar Empresa",
                    breadcrumb: "Listar"
                }
            },
            {
                path: "incluir",
                component: EmpresaFormularioComponent,
                data: {
                    titulo: "Cadastrar Empresa",
                    breadcrumb: "Cadastrar"
                }
            },
            {
                path: "alterar/:id",
                component: EmpresaFormularioComponent,
                data: {
                    titulo: "Alterar Empresa",
                    breadcrumb: "Alterar"
                }
            },
            {
                path: "detalhar/:id",
                component: EmpresaFormularioComponent,
                data: {
                    titulo: "Detalhar Empresa",
                    breadcrumb: "Detalhar"
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
