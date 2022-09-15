export interface Persona {
    nombre: string;
    favoritos: Favoritos[]
}

export interface Favoritos {
    id: number;
    nombre: string;
}