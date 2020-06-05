import { IEndereco } from './IEndereco';
import { ICompanhia } from './ICompanhia';

 export interface IEmpresa { 
    id: number,
    name: string,
    username: string,
    email: string,
    address: IEndereco;
    phone: string,
    website: string,
    company : ICompanhia;
}




