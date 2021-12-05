import { Region } from './region';

export interface Cliente{
    id?: number;
    nombre?: string;
    apellido?: string;
    createAt?: string;
    email?: string;
    region?: Region;
}