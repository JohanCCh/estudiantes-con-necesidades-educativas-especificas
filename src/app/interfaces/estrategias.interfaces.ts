export interface Estrategias {
    descripcionestrategia: string;
    estrategiaActividades: EstrategiaActividades[];
    idpcpaprendizaje: number;
    idpcpestrategiasaprendizaje: number;
}

export interface EstrategiaActividades {
    descripcionestrategiasactividades: string;
    documentos: Documento[];
    enlaces: Enlace[];
    idestrategiasactividades: number;
}

export interface Documento {
    idestrategiasactividadesdocumentos: number;
    idtipodocumento: number;
    urldocumento: string;
}

export interface Enlace {
    idestrategiasactividadesdocumentos: number;
    idtipodocumento: number;
    urlenlace: string;
}