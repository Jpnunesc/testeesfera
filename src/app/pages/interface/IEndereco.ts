import { IGeo } from './IGeo';

export interface IEndereco
{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeo
}