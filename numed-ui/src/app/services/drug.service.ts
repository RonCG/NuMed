import { Injectable } from '@angular/core';
import { DrugDetailModel, DrugInteractionModel } from '../models/drug-detail-model';

@Injectable({
    providedIn: 'root'
})

export class DrugService {

    getDrugsList() {
        let drugsList: any[] = [];
        let allDrugs = this.getAllDrugs();
        allDrugs.forEach(drug => {
            let drugLookup = {
                label: drug.nombreGenerico,
                value: drug.id
            }

            drugsList.push(drugLookup);
        });

        return drugsList;
    }

    getDrugDetail(id: number) {
        let allDrugs = this.getAllDrugs();
        let drugDetail = allDrugs.find(x => x.id == id);
        return drugDetail;
    }

    getAllDrugs() {
        let allDrugs = [
            {
                id: 7,
                nombreGenerico: "Warfarina",
                nombresComerciales: ["Cicoxil", "coumadin", "evapril", "warzalin", "aldocumar"],
                grupo: "Hematopoyéticos",
                tipo: "Antagonistas de la vitamina K",
                presentacion: "comprimidos 5, y 2mg",
                mecanismoDeAccion: "impide la formación de factores activos de coagulación por la vitamina K",
                usos: ["Trombosis venosas", "embolismo pulmonar"],
                embarazo: "contraindicado (Categoría X)",
                lactancia: "compatible",
                administracion: "con o sin comida",
                reaccionesAdversas: "hemorragias en cualquier órgano, calcifilaxis ",
                mecanismoHepatico: "Se metaboliza principalmente en el hígado por las enzimas CYP2C9. La warfarina es una mezcla de dos isómeros R y S, siendo el S el más potente y principalmente metabolizado por CYP2C9. El isómero R es metaboliado por CYP1A2, CYP3A4 ",
                mecanismoRenal: "La excrecion renal es minima, ya que se elimina principalmente por metabolismo hepático.",
                interacciones:  [
                    {
                        nombreInteraccion: "Alimentos ricos en vitamina K",
                        mecanismo: "Puede reducir el efecto del fármaco al hacer la sangre menos delgada y aumentar potencialmente el riesgo de formación de coagulos. "
                    },
                    {
                        nombreInteraccion: "Suplementos con actividades antiagregantes/antiplaquetarias",
                        mecanismo: "Ajo, jengibre, arándano, salvia roja asiática, ginkgo biloba, cúrcuma, Hierba de San Juan, te verde. Puede interactuar con el fármaco, disminuir su efectividad o ampliar el efecto anticoagulante aumentando el riesgo de sangrado. "
                    },
                ]
            }
        ];

        return allDrugs;
    }

}