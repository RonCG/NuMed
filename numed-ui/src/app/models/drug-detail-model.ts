export class DrugDetailModel {
    id: number | undefined;
    nombreGenerico: string | undefined;
    nombresComerciales: string[] = [];
    grupo: string | undefined;
    tipo: string | undefined;
    presentacion: string | undefined;
    mecanismoAccion: string | undefined;
    usos: string[] = [];
    embarazo: string | undefined;
    lactancia: string | undefined;
    administracion: string | undefined;
    reaccionesAdversas: string | undefined;
    mecanismoHepatico: string | undefined;
    mecanismoRenal: string | undefined;
    interacciones: DrugInteractionModel[] = [];
}

export class DrugInteractionModel {
    nombreInteraccion: string | undefined;
    mecanismo: string | undefined;
}