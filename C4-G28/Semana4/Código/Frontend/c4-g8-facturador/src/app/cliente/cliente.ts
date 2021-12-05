import {Region} from './region';
import { Factura } from '../facturas/models/factura';

export interface Cliente{
    id?: number;
    nombre?: string;
    apellido?: string;
    createAt?: string;
    email?: string;   
    region?: Region;
    facturas?: Array<Factura>;  

}
