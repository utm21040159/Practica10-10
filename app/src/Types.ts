
export interface IGrade{
    id_metricas: string,
    grade: number,
    id_judge: string
}

export interface IGrades{

    id_Equipo: string,
    ronda: number,
    id_evento: string
    Calificacion: IGrade

}

export interface ITeams{
    nombre: string,
    Participantes: string[],
    Lider: string,
    Ronda: number,
    Calificacion: IGrades[]
}

export interface IMetric {
    descripcion: string;
    max_point: number;
}


export interface IEvent {
    nombre: string;
    max_round: number;
    metrics: IMetric[];
}

export interface IUser {
    nombre: string;
    correo: string;
    contraseña: string;
    curp: string;
    rol: string;
}

