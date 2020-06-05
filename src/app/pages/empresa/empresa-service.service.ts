import { Injectable } from '@angular/core';
import { IEmpresa } from '../interface/IEmpresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaServiceService {
  listaEmpresa = [];
  empresa: IEmpresa;
  constructor() { }

  public getMock() {
   return this.listaMock();
  }
  getId(id) {
  const lista = this.listaMock();
  return lista.filter(el => el.id == id);
  }
  listaMock() {
    for (let index = 0; index < 10; index++) {
      this.empresa = {
        id: index,
        name: 'Empresa ' + index,
        username: 'User ' + index,
        email: 'email@hotmal.com',
        address: {
            street: "Rua Axara",
            suite: "30" + index,
            city: "Brasilia",
            zipcode: "38.660-00" + index,
            geo: {
                lat: '123111111111111' + index,
                lng: '343423423423423' + index
            },
        },
        phone: '(61) 98200-490' + index,
        website: 'www.empresa.com.br',
        company: {
            name: 'Empresa X' + index,
            catchPhrase: 'crud empresa',
            bs: 'teste'
        }
        };
      this.listaEmpresa.push(this.empresa);
     }
     return this.listaEmpresa;
  }
}
