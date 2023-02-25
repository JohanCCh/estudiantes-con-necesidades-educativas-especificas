export interface Destrezas {
    descripcioncompetencia: string;
    idcompetencia: number;
    imagencompetencia: string;
    selecionado?: boolean;
}


export interface ListaDestrezas {
    id: number;
    titulo: string;
    destrezas: Destrezas[];
    modificado: boolean;
}