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
                "id": 1,
                "grupo": "Antidiabeticos orales",
                "tipo": "Biguanida",
                "nombreGenerico": "Metformina",
                "nombresComerciales": [
                    "glisenex",
                    "glucofage",
                    "glucocid",
                    "brotmin",
                    "dianben"
                ],
                "presentacion": "comprimidos recubiertos con película 500mg, 850mg, 750mg y 1000mg",
                "mecanismoAccion": "Sensibilizador de insulina, disminuye la hiperinsulinemia basal",
                "usos": [
                    "Diabetes Mellitus tipo 2",
                    "Síndrome de Ovario Poliquístico"
                ],
                "embarazo": "compatible (categoría B)",
                "lactancia": "compatible",
                "administracion": "con comida",
                "reaccionesAdversas": "Diarrea (aumento de E. coli en microbiota), disconfort intestinal, acidosis láctica.",
                "mecanismoHepatico": "Suprime la gluconeogénesis y disminuye la biosíntesis de ácidos grasos y colesterol.",
                "mecanismoRenal": "La metformina se elimina a nivel renal mediante filtración glomerular y secreción tubular. En pacientes con enfermedad renal crónica es necesario ajustar la dosis. En pacientes estadio 3 se suspende el tratamiento en situaciones de sepsis, deshidratación o hipoxemia.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Disminución de la absorción de vitamina B12",
                        "mecanismo": "El uso a largo plazo de metformina (4-5 años) se asocia con un aumento en el riesgo de deficiencia de vitamina B12. Este riesgo incrementa en individuos con factores de riesgo adicionales como veganismo o cirugía gastrica o del intestino delgado"
                    },
                    {
                        "nombreInteraccion": "Fibra",
                        "mecanismo": "La fibra, especialmente la fibra insoluble, puede ralentizar la absorción de metformina, cuando se consumen juntos. Esto se debe a que la fibra puede unirse a ciertas sustancias en el tracto digestivo, incluidos los medicamentos, lo que altera la velocidad con la que se absorben en el torrente sanguíneo."
                    },
                    {
                        "nombreInteraccion": "Espirulina",
                        "mecanismo": "Se ha demostrado que la espirulina tiene efectos hipoglucémicos  leves, lo que puede beneficiar a personas con diabetes tipo 2. Puede mejorar la sensibilidad a la insulina y ayudar a reducir los niveles de glucosa en sangre en ayunas."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "El alcohol puede potenciar el efecto de la metformina sobre el metabolismo del lactato, aumentando el riesgo de acidosis láctica."
                    },
                    {
                        "nombreInteraccion": "Platago Ovata",
                        "mecanismo": "Al ser un suplemento de fibra altamente soluble, puede formar una sustancia gelatinosa en el tracto digestivo cuando absorbe agua. Esta propiedad puede ralentizar la absorción de ciertos medicamentos, incluida la metformina, cuando se toman al mismo tiempo."
                    }
                ]
            },
            {
                "id": 2,
                "grupo": "Antidiabeticos orales",
                "tipo": "Sulfonilurea",
                "nombreGenerico": "Glibenclamida",
                "nombresComerciales": [
                    "glibem",
                    "euglucon",
                    "edulco",
                    "glucovanse",
                    "daonil",
                    "diabesulf",
                    "glicem",
                    "glinil"
                ],
                "presentacion": "comprimidos de 5mg",
                "mecanismoAccion": "Estimula la secresión de insulina por células B del páncreas",
                "usos": [
                    "Diabetes Mellitus tipo 2"
                ],
                "embarazo": "con precaución (categoría C)",
                "lactancia": "compatible",
                "administracion": "con comida",
                "reaccionesAdversas": "Aumento de peso, hipoglucemias, sudoración, temblor, taquicardia.",
                "mecanismoHepatico": "Se metaboliza en el hígado a metabolitos activos que conservan su acción hipoglucemiante.",
                "mecanismoRenal": "Se elimina por la orina. En caso de ERC se acumula y puede producir hipoglucemias graves de duración prolongada. La glibenclamida debe evitarse en pacientes con ERC de cualquier grado, no se recomienda su uso con FG <60ml/min/1,73m^2.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede potenciar el efecto hipoglucemiante de la glibenclamida aumentando el riesgo de baja azúcar en sangre"
                    },
                    {
                        "nombreInteraccion": "Fibra",
                        "mecanismo": "La fibra, especialmente la fibra insoluble, puede ralentizar la absorción de glibenclamida, cuando se consumen juntos. Esto se debe a que la fibra puede unirse a ciertas sustancias en el tracto digestivo, incluidos los medicamentos, lo que altera la velocidad con la que se absorben en el torrente sanguíneo."
                    },
                    {
                        "nombreInteraccion": "Suplementos de cromo",
                        "mecanismo": "El cromo puede potenciar los efectos de la glibenclamida en la disminución de los niveles de azúcar en sangre, puesto que ambos trabajan en morar la sensibilidad a la insulina y reducir los niveles de glucosa."
                    },
                    {
                        "nombreInteraccion": "Té Verde",
                        "mecanismo": "El té verde, en particular las catequinas como el galato de epigalocatequina (EGCG), puede influenciar el metabolismo del fármaco y transporte. Se ha visto que inhibe varias enzimas del citocromo P450 y transportadores lo que puede potencialmente alterar con grandes dosis la farmacocinética de medicamentos metabolizados por este medio."
                    },
                    {
                        "nombreInteraccion": "Plantago Ovata",
                        "mecanismo": "Al ser un suplemento de fibra altamente soluble, puede formar una sustancia gelatinosa en el tracto digestivo cuando absorbe agua. Esta propiedad puede ralentizar la absorción de ciertos medicamentos, cuando se toman al mismo tiempo."
                    },
                    {
                        "nombreInteraccion": "Jugo de Pomelo",
                        "mecanismo": "Puede inhibir el metabolismo de la glibenclamida a través del sistema enzimático del citocromomo P450 3A4 aumentando los niveles del fármaco en sangre."
                    }
                ]
            },
            {
                "id": 3,
                "grupo": "Antidiabeticos orales",
                "tipo": "Tiazolidinedionas",
                "nombreGenerico": "Pioglitazona",
                "nombresComerciales": [
                    "actos",
                    "zatium",
                    "pioglar"
                ],
                "presentacion": "comprimidos de 15 y 30mg",
                "mecanismoAccion": "Aumento de la sensibilidad a la insulina. Reduce la producción de glucosa hepática.",
                "usos": [
                    "Diabetes Mellitus tipo 2",
                    "resistencia a la insulina"
                ],
                "embarazo": "con precaución (categoría C)",
                "lactancia": "compatibilidad probable",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "Aumento de peso, fractura ósea, infecciones del tracto respiratorio superior, hipoestesia.",
                "mecanismoHepatico": "Disminuyen la secresión de glucosa a nivel hepático. Se metaboliza por el CYP2C8 y en menor medida por CYP3A4.",
                "mecanismoRenal": "Menos del 15% se excreta sin cambios por los riñones y la mayoría de los metabolitos se eliminan por bilis y heces. La pioglitazona se puede usar en todos los estadíos de ERC sin ajuste de dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar el riesgo de hipoglicemia al consumirse con pioglitazona."
                    },
                    {
                        "nombreInteraccion": "Fibra",
                        "mecanismo": "La fibra, especialmente la fibra insoluble, puede ralentizar la absorción del medicamento cuando se consumen juntos. Esto se debe a que la fibra puede unirse a ciertas sustancias en el tracto digestivo, incluidos los medicamentos, lo que altera la velocidad con la que se absorben en el torrente sanguíneo."
                    },
                    {
                        "nombreInteraccion": "Calcio",
                        "mecanismo": "La pioglitazona aumenta la excresión urinaria de calcio, lo que puede aumentar el riesgo de fracturas."
                    },
                    {
                        "nombreInteraccion": "Sodio",
                        "mecanismo": "La pioglitazona puede causar retención de líquidos, lo que puede potencialmente aumentar el riesgo de edema o empeorar la falla cardiaca en individuos susceptibles"
                    }
                ]
            },
            {
                "id": 4,
                "grupo": "Antidiabeticos orales",
                "tipo": "Sulfonilurea",
                "nombreGenerico": "Glipizida",
                "nombresComerciales": [
                    "Glucotrol",
                    "Minidiab"
                ],
                "presentacion": "Comprimidos 2.5mg, 5mg, 10mg",
                "mecanismoAccion": "Estimula la excreción insulínica por parte de células ß-pancreáticas.",
                "usos": [
                    "Diabetes Mellitus tipo 2"
                ],
                "embarazo": "con precaución (cateogoría C)",
                "lactancia": "compatible",
                "administracion": "30min antes de desayunar",
                "reaccionesAdversas": "Riesgo de hipoglucemias, náuseas, diarrea, dolor abdominal.",
                "mecanismoHepatico": "Se metaboliza en el hígado a metabolitos activos que conservan su acción hipoglucemiante.",
                "mecanismoRenal": "Se elimina por la orina. En caso de ERC se acumula y puede producir hipoglucemias graves de duración prolongada. La glipcide, tras la metabolización hepática genera metabolitos inactivos, por lo que el riesgo de hipoglucemias graves es menor.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar el riesgo de hipoglicemia."
                    },
                    {
                        "nombreInteraccion": "Fibra",
                        "mecanismo": "La fibra, especialmente la fibra insoluble, puede ralentizar la absorción del medicamento cuando se consumen juntos. Esto se debe a que la fibra puede unirse a ciertas sustancias en el tracto digestivo, incluidos los medicamentos, lo que altera la velocidad con la que se absorben en el torrente sanguíneo."
                    },
                    {
                        "nombreInteraccion": "Jugo de Pomelo",
                        "mecanismo": "Puede inhibir el sistema enzimatico CYP450 aumentando potencialmente los niveles de glipcide en sangre."
                    },
                    {
                        "nombreInteraccion": "Suplementos a base de hierbas",
                        "mecanismo": "Andrographis paniculata, andrographólido, Tinospora cordifolia, Syzygium cumini y Gymnema sylvesttre, poseen propiedades que pueden disminuir los niveles de glucosa en sange, lo que aumenta el efecto del fármaco y el riesgo de hipoglucemias."
                    }
                ]
            },
            {
                "id": 5,
                "grupo": "Antidiabeticos orales",
                "tipo": "Inhibidores de la a-glucosidasa",
                "nombreGenerico": "Acarbosa",
                "nombresComerciales": [
                    "Glucobay"
                ],
                "presentacion": "Comprimido 100mg, 50mg",
                "mecanismoAccion": "Retrasa y reduce el aumento postprandial de glucosa",
                "usos": [
                    "Diabetes Mellitus tipo 2"
                ],
                "embarazo": "Compatible (categoría B)",
                "lactancia": "compatible",
                "administracion": "con comida",
                "reaccionesAdversas": "flatulencias, dolor gastrointestinal y abdominal, diarrea",
                "mecanismoHepatico": "No refiere. Se metaboliza principalmente en el tracto gastrointestinal.",
                "mecanismoRenal": "En pacientes con ERC se produce acúmulo de metabolitos derivados, por lo que su uso está limitado. La acarbosa no se recomienda en pacientes con un FG <30ml/min/1,73m^2 debido a la eliminación renal de sus metabolitos.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar el riesgo de hipoglicemia."
                    },
                    {
                        "nombreInteraccion": "Fibra",
                        "mecanismo": "La fibra, especialmente la fibra insoluble, puede ralentizar la absorción del medicamento cuando se consumen juntos. Esto se debe a que la fibra puede unirse a ciertas sustancias en el tracto digestivo, incluidos los medicamentos, lo que altera la velocidad con la que se absorben en el torrente sanguíneo."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en compuestos fenólicos (flavonoides)",
                        "mecanismo": "Algunos flavonoides han demostrado tener actividad inhibitoria de la alfa-glucosidasa similar a la acarbosa, por lo que pueden mejora el efecto reductor de glucosa de la acarbosa."
                    }
                ]
            },
            {
                "id": 6,
                "grupo": "Hematopoyéticos",
                "tipo": "Antagonistas de la vitamina K",
                "nombreGenerico": "Acenocumarol",
                "nombresComerciales": [
                    "Sintrom"
                ],
                "presentacion": "comprimidos 4mg",
                "mecanismoAccion": "impide la formación de factores activos de coagulación por la vitamina K",
                "usos": [
                    "Fibrilación auricular",
                    "tromboembolismo venoso",
                    "embolia pulmonar",
                    "prevención de infarto de miocardio"
                ],
                "embarazo": "contraindicado (Categoría X)",
                "lactancia": "compatible",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "hemorragias en cualquier órgano, calcifilaxis",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado por la enzima CYP2C9, aunque también participan otras enzimas del citocromo P450.",
                "mecanismoRenal": "Su eliminación es casi completamente por metabolismo, con una mínima excreción renal.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos ricos en vitamina K",
                        "mecanismo": "Puede reducir el efecto del fármaco al hacer la sangre menos delgada y aumentar potencialmente el riesgo de formación de coagulos."
                    },
                    {
                        "nombreInteraccion": "Suplementos con actividades antiagregantes/antiplaquetarias",
                        "mecanismo": "Ajo, jengibre, arándano, salvia roja asiática, ginkgo biloba, cúrcuma, Hierba de San Juan, te verde. Puede interactuar con el fármaco, disminuir su efectividad o ampliar el efecto anticoagulante aumentando el riesgo de sangrado."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "El alcohol puede afectar la función hepática potencialmente alterando los efectos del medicamento. El consumo crónico de alcohol puede disminuir la efectividad del fármaco."
                    },
                    {
                        "nombreInteraccion": "Jugo de arándano",
                        "mecanismo": "Puede aumentar los efectos anticoagulantes de los antagonistas de la vitamina K aumentando potencialmente el riesgo de sangrado."
                    },
                    {
                        "nombreInteraccion": "Jugo de pomelo",
                        "mecanismo": "El pomelo puede interferir con enzimas hepáticas (CYP450) que metabolizan ciertos fármacos llevando potencialmente a un aumento de los niveles del fármaco en el cuerpo. Esto puede resultar en un efecto anticoagulante aumentado y un mayor riesgo de sangrado."
                    },
                    {
                        "nombreInteraccion": "Alimentos y suplementos probióticos",
                        "mecanismo": "La Bifidobacteria puede biomodificar el acenocumarol alterando potencialmente su farmacocinética y farmacodinámica."
                    },
                    {
                        "nombreInteraccion": "Ajo",
                        "mecanismo": "Potencia el efecto del fármaco dando lugar a hemorragias."
                    },
                    {
                        "nombreInteraccion": "Mango",
                        "mecanismo": "Aumento del INR."
                    }
                ]
            },
            {
                "id": 7,
                "grupo": "Hematopoyéticos",
                "tipo": "Antagonistas de la vitamina K",
                "nombreGenerico": "Warfarina",
                "nombresComerciales": [
                    "Cicoxil",
                    "coumadin",
                    "evapril",
                    "warzalin",
                    "aldocumar"
                ],
                "presentacion": "comprimidos 5, y 2mg",
                "mecanismoAccion": "impide la formación de factores activos de coagulación por la vitamina K",
                "usos": [
                    "Trombosis venosas",
                    "embolismo pulmonar"
                ],
                "embarazo": "contraindicado (Categoría X)",
                "lactancia": "compatible",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "hemorragias en cualquier órgano, calcifilaxis",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado por las enzimas CYP2C9. La warfarina es una mezcla de dos isómeros R y S, siendo el S el más potente y principalmente metabolizado por CYP2C9. El isómero R es metaboliado por CYP1A2, CYP3A4",
                "mecanismoRenal": "La excrecion renal es minima, ya que se elimina principalmente por metabolismo hepático.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos ricos en vitamina K",
                        "mecanismo": "Puede reducir el efecto del fármaco al hacer la sangre menos delgada y aumentar potencialmente el riesgo de formación de coagulos."
                    },
                    {
                        "nombreInteraccion": "Suplementos con actividades antiagregantes/antiplaquetarias",
                        "mecanismo": "Ajo, jengibre, arándano, salvia roja asiática, ginkgo biloba, cúrcuma, Hierba de San Juan, te verde. Puede interactuar con el fármaco, disminuir su efectividad o ampliar el efecto anticoagulante aumentando el riesgo de sangrado."
                    },
                    {
                        "nombreInteraccion": "Ajo",
                        "mecanismo": "Potencia el efecto del fármaco dando lugar a hemorragias."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "El alcohol puede afectar la función hepática potencialmente alterando los efectos del medicamento. El consumo crónico de alcohol puede disminuir la efectividad del fármaco."
                    },
                    {
                        "nombreInteraccion": "Jugo de arándano",
                        "mecanismo": "Puede aumentar los efectos anticoagulantes de los antagonistas de la vitamina K aumentando potencialmente el riesgo de sangrado."
                    },
                    {
                        "nombreInteraccion": "Jugo de pomelo",
                        "mecanismo": "El pomelo puede interferir con enzimas hepáticas (CYP450) que metabolizan ciertos fármacos llevando potencialmente a un aumento de los niveles del fármaco en el cuerpo. Esto puede resultar en un efecto anticoagulante aumentado y un mayor riesgo de sangrado."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en omega-3 y tabaco",
                        "mecanismo": "Los alimentos o suplementos ricos en omega-3 inhiben la agregación plaquetaria. El tabaco puede acelerar el metabolismo del fármaco disminuyendo su concentración."
                    },
                    {
                        "nombreInteraccion": "Productos de soya",
                        "mecanismo": "Contienen altos niveles de vitamina K lo que puede interferir con la efectividad del fármaco"
                    },
                    {
                        "nombreInteraccion": "Mango",
                        "mecanismo": "Puede aumentar los niveles de INR"
                    }
                ]
            },
            {
                "id": 8,
                "grupo": "Hematopoyéticos",
                "tipo": "Antiagregantes plaquetarios",
                "nombreGenerico": "Ácido acetilsalicílico",
                "nombresComerciales": [
                    "ariston",
                    "labovida",
                    "pharmabrand",
                    "qualipharm",
                    "sionpharm",
                    "aspirina",
                    "cardioaspirina"
                ],
                "presentacion": "comprimido 100mg, 500mg",
                "mecanismoAccion": "inhibición de la agregación plaquetaria",
                "usos": [
                    "\"Alivio del dolor",
                    "antiinflamatorio",
                    "prevención de eventos cardiovasculares\""
                ],
                "embarazo": "Evitar (categoría D)",
                "lactancia": "compatibilidad probable",
                "administracion": "Después de comer",
                "reaccionesAdversas": "úlcera gastrica o duodenal, hemorragia gastrointestinal, dispepsia, nausas, vómitos, rinitis, congestión nasal, erupciones cutáneas, urticaria, angioedema",
                "mecanismoHepatico": "Se metaboliza en el hígado a ácido salicílico que luego se conjuga con glicina a ácido glucurónico. Se necesita precaución en pacientes con insuficiencia hepática, puesto que el fármaco puede acumularse.",
                "mecanismoRenal": "Su eliminación es principalmente renal y la excreción de los metabolitos conjugados ocurre a través de la orina. La tasa de eliminación puede variar dependiendo el pH urinario, puesto que un pH más alcalino aumenta su excreción. Precaución en pacientes con insuficiencia renal, dado que puede acumularse el fármaco. Su uso prolongado puede causar daño renal.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "En combinación con aspirina puede aumentar el riesgo de sangrado gastrointestinal e irritación."
                    },
                    {
                        "nombreInteraccion": "Suplementos con actividades antiagregantes/antiplaquetarias",
                        "mecanismo": "Ajo, jengibre, arándano, salvia roja asiática, ginkgo biloba, cúrcuma, Hierba de San Juan, te verde. Puede interactuar con el fármaco, disminuir su efectividad o ampliar el efecto anticoagulante aumentando el riesgo de sangrado."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en omega-3 y tabaco",
                        "mecanismo": "Los alimentos o suplementos ricos en omega-3 inhiben la agregación plaquetaria. El tabaco puede acelerar el metabolismo del fármaco disminuyendo su concentración."
                    },
                    {
                        "nombreInteraccion": "Vitamina C",
                        "mecanismo": "Puede aumentar la absorcion de la aspirina aumentando potencialmente sus efectos terapeuticos."
                    },
                    {
                        "nombreInteraccion": "Jugo de arándano",
                        "mecanismo": "Puede aumentar los efectos anticoagulantes de los antagonistas de la vitamina K aumentando potencialmente el riesgo de sangrado."
                    },
                    {
                        "nombreInteraccion": "Antiácidos y comidas altas en fibra",
                        "mecanismo": "Los antiácidos pueden interferir con la absorción de aspirina, dado que alteran el pH del estómago y los intestinos. Las comidas altas en fibra pueden disminuir la absorción al retrasar el proceso digestivo."
                    }
                ]
            },
            {
                "id": 9,
                "grupo": "Hematopoyéticos",
                "tipo": "Antiagregantes plaquetarios",
                "nombreGenerico": "Triflusal",
                "nombresComerciales": [
                    "triflunsal cingra",
                    "disgren"
                ],
                "presentacion": "cápsulas duras 300mg. Polvo para solución oral 600mg",
                "mecanismoAccion": "inhibición de la agregación plaquetaria",
                "usos": [
                    "enfermedad arterial perifériac",
                    "prevención de eventos cardiovasculares"
                ],
                "embarazo": "con precaución (categoría C)",
                "lactancia": "evitar",
                "administracion": "con comida (no alta en grasa)",
                "reaccionesAdversas": "cefaela, dispepsia, dolor abdominal, nauseas, estreñimiento, flatulencias, anorexia.",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado y su metabolito activo es el ácido 2-hidroxi-4-trifluorometilbenzoico (HTB). Precaución en pacientes con insuficiencia hepática.",
                "mecanismoRenal": "Se elimina principalmente por vía renal en forma de su metabolito principal donde cerca del 90% de la dosis se excreta en la orina. Precaución en pacientes con insuficiencia renal donde puede aumentar la concentración plasmática del metabolito y el riesgo de efectos adversos. Se debe considerar ajustar la dosis y monitoreo constante.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "En combinación con aspirina puede aumentar el riesgo de sangrado gastrointestinal e irritación."
                    },
                    {
                        "nombreInteraccion": "Suplementos con actividades antiagregantes/antiplaquetarias",
                        "mecanismo": "Ajo, jengibre, arándano, salvia roja asiática, ginkgo biloba, cúrcuma, Hierba de San Juan, te verde. Puede interactuar con el fármaco, disminuir su efectividad o ampliar el efecto anticoagulante aumentando el riesgo de sangrado."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en vitamina K",
                        "mecanismo": "Puede reducir el efecto del fármaco al hacer la sangre menos delgada y aumentar potencialmente el riesgo de formación de coagulos."
                    },
                    {
                        "nombreInteraccion": "Vitamina C",
                        "mecanismo": "Puede aumentar la absorcion de la aspirina aumentando potencialmente sus efectos terapeuticos."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en omega-3 y tabaco",
                        "mecanismo": "Los alimentos o suplementos ricos en omega-3 inhiben la agregación plaquetaria. El tabaco puede acelerar el metabolismo del fármaco disminuyendo su concentración."
                    },
                    {
                        "nombreInteraccion": "Antiácidos y comidas altas en fibra",
                        "mecanismo": "Los antiácidos pueden interferir con la absorción de aspirina, dado que alteran el pH del estómago y los intestinos. Las comidas altas en fibra pueden disminuir la absorción al retrasar el proceso digestivo."
                    },
                    {
                        "nombreInteraccion": "Jugo de arándano",
                        "mecanismo": "Puede aumentar los efectos anticoagulantes de los antagonistas de la vitamina K aumentando potencialmente el riesgo de sangrado."
                    }
                ]
            },
            {
                "id": 10,
                "grupo": "Hematopoyéticos",
                "tipo": "Antiagregantes plaquetarios",
                "nombreGenerico": "Clopidrogrel",
                "nombresComerciales": [
                    "agrelax",
                    "antigrel",
                    "aterogenol",
                    "ceruvin",
                    "clentel",
                    "clopacin",
                    "clopido-gran",
                    "clopikana",
                    "clopilet",
                    "clousin",
                    "clovx",
                    "eurogrel",
                    "grelix",
                    "plavix",
                    "retaq",
                    "troken",
                    "ravalgen"
                ],
                "presentacion": "comprimido recubierto con pelicula 75mg, 300mg",
                "mecanismoAccion": "inhibición de la agregación plaquetaria",
                "usos": [
                    "prevención de eventos cardiovasculares",
                    "síndrome coronario agudo"
                ],
                "embarazo": "con precaución (categoría B)",
                "lactancia": "compatibilidad probable",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "hematoma, epistaxis, hemorragia gastrointestinal, diarrea, dolor bdominal, dispepsia",
                "mecanismoHepatico": "El clopidrogrel requiere biotransformación hepática para convertirse en su metabolito activo. Este proceso se encuentra mediado por enzimas del citocromo P450, especialemente CYP2C219, CYP3A, CYP2B6 y CYP1A2. En pacientes con insuficiencia hepática el metabolismo del fármaco puede verse afectado lo que podria alterar su eficacia o aumentar el riesgo de efectos secundarios.",
                "mecanismoRenal": "Aproximadamente el 50% de la dosis se excreta en la orina y el 46% en las heces. Precaución en pacientes con insuficiencia renal grave, puesto que puede aumentar el riesgo de eventos hemorrágicos por la disminución de la excresión de sus metabolitos.El clopodrogrel no se elimina significativamente mediante diálisis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "En combinación con aspirina puede aumentar el riesgo de sangrado gastrointestinal e irritación."
                    },
                    {
                        "nombreInteraccion": "Suplementos con actividades antiagregantes/antiplaquetarias",
                        "mecanismo": "Ajo, jengibre, arándano, salvia roja asiática, ginkgo biloba, cúrcuma, Hierba de San Juan, te verde. Puede interactuar con el fármaco, disminuir su efectividad o ampliar el efecto anticoagulante aumentando el riesgo de sangrado."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en vitamina K",
                        "mecanismo": "Puede reducir el efecto del fármaco al hacer la sangre menos delgada y aumentar potencialmente el riesgo de formación de coagulos."
                    },
                    {
                        "nombreInteraccion": "Vitamina C",
                        "mecanismo": "Puede aumentar la absorcion de la aspirina aumentando potencialmente sus efectos terapeuticos."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en omega-3 y tabaco",
                        "mecanismo": "Los alimentos o suplementos ricos en omega-3 inhiben la agregación plaquetaria. El tabaco puede acelerar el metabolismo del fármaco disminuyendo su concentración."
                    },
                    {
                        "nombreInteraccion": "Antiácidos y comidas altas en fibra",
                        "mecanismo": "Los antiácidos pueden interferir con la absorción de aspirina, dado que alteran el pH del estómago y los intestinos. Las comidas altas en fibra pueden disminuir la absorción al retrasar el proceso digestivo."
                    },
                    {
                        "nombreInteraccion": "Jugo de arándano",
                        "mecanismo": "Puede aumentar los efectos anticoagulantes de los antagonistas de la vitamina K aumentando potencialmente el riesgo de sangrado."
                    }
                ]
            },
            {
                "id": 11,
                "grupo": "Hematopoyéticos",
                "tipo": "Antiagregantes plaquetarios",
                "nombreGenerico": "Prasugrel",
                "nombresComerciales": [
                    "Fluidin",
                    "rozolex"
                ],
                "presentacion": "comprimidos recubiertos con pelicula 10mg, 5mg",
                "mecanismoAccion": "inhibición de la agregación plaquetaria",
                "usos": [
                    "prevención de eventos cardiovasculares en pacientes con síndrome coronario agudo",
                    "colocación de stent"
                ],
                "embarazo": "con precaución (Categoría B)",
                "lactancia": "evitar",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "anemia, hematoma, epistaxis, hemorragia gastrointestinal, contusión",
                "mecanismoHepatico": "El prasugrel requiere biotransformación hepática para convertirse en su metabolito activo. Necesita de solo un paso para esta conversión lo que imploca menor variabilidad en su activación. Las enzimas CYP3A, CYP2B6, CYP2C9 y CYP2C19 están involucradas en su metabolismo.Precaución en pacientes con insuficiencia hepática leve o moderada y no se recomienda en pacientes con IH grave.",
                "mecanismoRenal": "Cerca del 68% del fármaco y sus metabolitos se excretan a través de la orina y el resto a través de las heces. Precaución en pacientes con insuficiencia renal grave por riesgo de hemorragia.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "En combinación con aspirina puede aumentar el riesgo de sangrado gastrointestinal e irritación."
                    },
                    {
                        "nombreInteraccion": "Suplementos con actividades antiagregantes/antiplaquetarias",
                        "mecanismo": "Ajo, jengibre, arándano, salvia roja asiática, ginkgo biloba, cúrcuma, Hierba de San Juan, te verde. Puede interactuar con el fármaco, disminuir su efectividad o ampliar el efecto anticoagulante aumentando el riesgo de sangrado."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en vitamina K",
                        "mecanismo": "Puede reducir el efecto del fármaco al hacer la sangre menos delgada y aumentar potencialmente el riesgo de formación de coagulos."
                    },
                    {
                        "nombreInteraccion": "Vitamina C",
                        "mecanismo": "Puede aumentar la absorcion de la aspirina aumentando potencialmente sus efectos terapeuticos."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en omega-3 y tabaco",
                        "mecanismo": "Los alimentos o suplementos ricos en omega-3 inhiben la agregación plaquetaria. El tabaco puede acelerar el metabolismo del fármaco disminuyendo su concentración."
                    },
                    {
                        "nombreInteraccion": "Antiácidos y comidas altas en fibra",
                        "mecanismo": "Los antiácidos pueden interferir con la absorción de aspirina, dado que alteran el pH del estómago y los intestinos. Las comidas altas en fibra pueden disminuir la absorción al retrasar el proceso digestivo."
                    },
                    {
                        "nombreInteraccion": "Jugo de arándano",
                        "mecanismo": "Puede aumentar los efectos anticoagulantes de los antagonistas de la vitamina K aumentando potencialmente el riesgo de sangrado."
                    }
                ]
            },
            {
                "id": 12,
                "grupo": "Hematopoyéticos",
                "tipo": "Antiagregantes plaquetarios",
                "nombreGenerico": "Dabigatrán etexilato",
                "nombresComerciales": [
                    "pradaxa"
                ],
                "presentacion": "cápsula dura 110mg, 75mg",
                "mecanismoAccion": "inhibidor de trombina impidiendo la formación de trombos.",
                "usos": [
                    "Fibrilación auricular",
                    "tratamiento y prevención tromboembolismo venoso"
                ],
                "embarazo": "con precaución (categoría C)",
                "lactancia": "compatible",
                "administracion": "con comida",
                "reaccionesAdversas": "disminución de Hb, función hepática anómalas, anemia, hemorragia gastrointestinal, dolor abdominal, diarrea, dispepsia, náuseas.",
                "mecanismoHepatico": "El dabigatrán etexilato es un profármaco que se convierte en dabigatrán mediante hidrólisis catalizada por esterasas en el plasma y el hígado. Precaución en casos de insuficiencia hepática avanzada.",
                "mecanismoRenal": "Su eliminacion es principalmente renal con un 80% de la depuracion total. Precaución en pacientes con insuficiencia renal, puessto que su eliminación se ve notoriamente afectada. Es necesario un ajuste de dosis o evitar su uso.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Suplementos con actividades antiagregantes/antiplaquetarias",
                        "mecanismo": "Ajo, jengibre, arándano, salvia roja asiática, ginkgo biloba, cúrcuma, Hierba de San Juan, te verde. Puede interactuar con el fármaco, disminuir su efectividad o ampliar el efecto anticoagulante aumentando el riesgo de sangrado."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede disminuir los niveles del farmaco en sangre reduciendo potencialmente su efecto anticoagulante."
                    }
                ]
            },
            {
                "id": 13,
                "grupo": "Hematopoyéticos",
                "tipo": "Inhibidores del factor Xa",
                "nombreGenerico": "Rivaroxabán",
                "nombresComerciales": [
                    "xarelto"
                ],
                "presentacion": "comprimido recubierto con pelicula 10mg, 2,5mg",
                "mecanismoAccion": "inhibidor de trombina impidiendo la formación de trombos.",
                "usos": [
                    "Fibrilación auricular",
                    "tratamiento y prevención tromboembolismo venoso",
                    "embolia pulmonar"
                ],
                "embarazo": "evitar (categoría C)",
                "lactancia": "compatible",
                "administracion": "con comida (dosis 15-20mg). Con o sin comida (dosis 10mg)",
                "reaccionesAdversas": "anemia, mareos, cefalea, hipotensión, hemorragia del tracto gastrointestinal, dispepsia, diarrea, estreñimiento, náuseas, diarrea, vómitos",
                "mecanismoHepatico": "Se metaboliza en el hígado a través de las enzimas CYP3A4 y CYP2J2. Precaución en pacientes con insuficiencia hepática.",
                "mecanismoRenal": "Aproximadamente 1/3 de la dosis se excreta de forma inalterada por los riñones, mientras que el resto se elimina por metabolismo hepático y excreción biliar. Precaución en pacientes con insuficiencia renal moderada a grave donde se necesita de ajustes de dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar el riesgo de sangrado e irritación gastrointestinal al consumirlo con rivaroxaban."
                    },
                    {
                        "nombreInteraccion": "Suplementos con actividades antiagregantes/antiplaquetarias",
                        "mecanismo": "Ajo, jengibre, arándano, salvia roja asiática, ginkgo biloba, cúrcuma, Hierba de San Juan, te verde. Puede interactuar con el fármaco, disminuir su efectividad o ampliar el efecto anticoagulante aumentando el riesgo de sangrado."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede aumentar los niveles del fármaco en sangre."
                    }
                ]
            },
            {
                "id": 14,
                "grupo": "Hematopoyéticos",
                "tipo": "Antiagregantes plaquetarios",
                "nombreGenerico": "Apixabán",
                "nombresComerciales": [
                    "eliquis"
                ],
                "presentacion": "comprimido recubierto con película 2,5mg, 5mg",
                "mecanismoAccion": "inhibidor de trombina impidiendo la formación de trombos.",
                "usos": [
                    "Fibrilación auricular",
                    "tratamiento y prevención tromboembolismo venoso",
                    "embolia pulmonar"
                ],
                "embarazo": "Con precaución (Categoría B)",
                "lactancia": "compatibilidad probable",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "hemorragias, hematomas, anemia, nauseas, hemorragia ocular, hipotensión",
                "mecanismoHepatico": "Se metaboliza en el hígado principamente por la enzima CYP3A4. No se recomienda su uso en pacientes con insuficiencia hepatica grave.",
                "mecanismoRenal": "Cerca del 25% de la dosis se excreta por la orina. Precaución en pacientes con insuficiencia renal severa.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede aumentar los niveles del fármaco en sangre."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar el riesgo de sangrado e irritación gastrointestinal al consumirlo con rivaroxaban."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede disminuir los niveles del farmaco en sangre reduciendo potencialmente su efecto anticoagulante."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en omega-3 y tabaco",
                        "mecanismo": "Los alimentos o suplementos ricos en omega-3 inhiben la agregación plaquetaria. El tabaco puede acelerar el metabolismo del fármaco disminuyendo su concentración."
                    }
                ]
            },
            {
                "id": 15,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Antiarrítmicos",
                "nombreGenerico": "Amiodarona",
                "nombresComerciales": [
                    "acrodarona",
                    "atlansil",
                    "cordarone",
                    "ritmocardyl"
                ],
                "presentacion": "comprimido 200mg, solución inyectable 150mg/3 ml, concentrado para solución para perfusión 150mg/3 ml",
                "mecanismoAccion": "inhibe de forma no competitiva los receptores alfa y beta",
                "usos": [
                    "\"Fibrilación ventricular",
                    "taquicardia ventricular",
                    "fibrilación auricular",
                    "aleteo auricular\""
                ],
                "embarazo": "evitar (Categoría D)",
                "lactancia": "compatibilidad limitada (poco seguro)",
                "administracion": "con comida",
                "reaccionesAdversas": "bradicardia, hipo o hipertiroidismo, náuseas, vómitos, elevación de transaminasas, alteraciones hepáticas agudas",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a través de la enzima CYP3A y CYP2C8 produciendo el metabolito activo N-desetilamiodarona (DEA). Su eliminación es principalmente hepática y biliar. La amiodarona puede causar hepatotoxicidad y está contraindicada en pacientes con insuficiencia hepática grave.",
                "mecanismoRenal": "Su eliminacion urinaria es insignificante y la farmacocinética no se ve significativamente afectada. Por la insuficiencia renal.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede aumentar significativamente los niveles del fármaco en sangre incrementando el riesgo de efectos adversos y toxicidad."
                    },
                    {
                        "nombreInteraccion": "Alimentos altos en yodo",
                        "mecanismo": "La amiodarona puede causar hiper o hipotiroidismo debido a su alto contenido de yodo. El consumo de alimentos altos en este mineral debe ser monitoreado."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "El alcohol puede exacerbar los efectos secundarios como mareos y aumentar el riesgo de toxicidad hepática."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Su interacción puede llevar potencialemnte a un eficacia reducida de la medicación."
                    },
                    {
                        "nombreInteraccion": "Fibra",
                        "mecanismo": "Comidas altas en fibra pueden enlantecer la absorción del fármaco."
                    }
                ]
            },
            {
                "id": 16,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Antiarrítmicos",
                "nombreGenerico": "Propafenona",
                "nombresComerciales": [
                    "ritmocor",
                    "tuntá"
                ],
                "presentacion": "comprimido recubierto con película 150mg, 300mg",
                "mecanismoAccion": "efecto anestésico local y estabilizador de la membrana de la célula miocárdica",
                "usos": [
                    "\"Fibrilación auricular",
                    "aleteo auricular",
                    "arritmias ventriculares\""
                ],
                "embarazo": "evitar (Categoría C)",
                "lactancia": "compatible",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "ansiedad, trastornos del suño, dolor abdominal, vómitos, náuseas, diarrea, estreñimiento, función hepática anormal",
                "mecanismoHepatico": "Se metaboliza extensamente en el hígado por la enzima CYP2D6 y su eliminación es predominantemente hepática. Precaución en pacientes con insuficiencia hepática moderada o severa donde puede existir aumento de ls niveles plasmáticos del fámaco y potencial toxicidad.",
                "mecanismoRenal": "Los metabolitos se excretan por la orina, aunque su eliminación por vía renal es limitada. En pacientes con insuficiencia renal, la acumulación de metabolitos puede aumentar el riesgo de efectos adversos.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede aumentar significativamente los niveles del fármaco en sangre incrementando el riesgo de efectos adversos y toxicidad."
                    },
                    {
                        "nombreInteraccion": "Cafeína",
                        "mecanismo": "La propafenona puede inhibir el CYP1A2 afectando el metabolismo de la cafeína lo que lleva a un aumento en los niveles de cafeína."
                    },
                    {
                        "nombreInteraccion": "Comidas altas en grasa",
                        "mecanismo": "Las comidas altas en grasa pueden afectar la absorción del fármaco aumentando sus niveles en sangre como consecuencia."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede exacerbar los síntomas del fármaco como mareos y aumentar el riesgo de complicaciones cardiovasculares."
                    }
                ]
            },
            {
                "id": 17,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Antiarrítmicos",
                "nombreGenerico": "Dronedarona",
                "nombresComerciales": [
                    "Multaq",
                    "dronedarona teva"
                ],
                "presentacion": "comprimidos recubiertos 400mg",
                "mecanismoAccion": "Inhibe las corrientes de potasio y calcio",
                "usos": [
                    "Fibrilación auricular",
                    "aleteo auricular"
                ],
                "embarazo": "contraindicado (Categoría X)",
                "lactancia": "no compatible",
                "administracion": "con comida (alta en grasa)",
                "reaccionesAdversas": "diarrea, vómitos, nauseas, dolor abdominal, dispepsia, pruebas de función hepáaticas anómalas.",
                "mecanismoHepatico": "Se metaboliza en el hígado principalmente por CYP3A y su eliminación es principalmente hepática. Uso contraindicado en pacientes con insuficiencia hepática moderada a severa.",
                "mecanismoRenal": "Cerca del 7% se excreta sin cambios en la orina. No se requiere ajustes de dosis en pacientes con insuficiencia renal leve.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "El pomelo y jugo de pomelo puede aumentar significativamente las concentraciones plasmáticas de la dronedarona al inhibir el CYP3A, la enzima responsable de su metabolismo."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede inducir el CYP3A4 reduciendo potencialmente la efectividad del fármaco y aumentar el riesgo de arritmias."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede empeorar síntomas como mareos y toxicidad hepática."
                    }
                ]
            },
            {
                "id": 18,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Antiarrítmicos",
                "nombreGenerico": "Flecainida",
                "nombresComerciales": [
                    "apocard",
                    "flecainida aurovitas",
                    "flecainida normon",
                    "flecard"
                ],
                "presentacion": "comprimidos 100mg, solución inyectable 10mg/ml",
                "mecanismoAccion": "Interfiere en la entrada de Na durante la despolarización",
                "usos": [
                    "Fibrilación auricular",
                    "aleteo auricular",
                    "arritmias ventriculares"
                ],
                "embarazo": "con precaución (Categoría C)",
                "lactancia": "compatible",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "fiebre, anorexia, bradicardia, fallo cardiaco, hipotensión, IAM",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a través del citocromo P450 (CYP2D6). Precacución en pacientes con insuficiencia hepática, se recomienda ajustar la dosis y monitorizar los niveles plasmáticos.",
                "mecanismoRenal": "Cerca del 30% del fármaco se elimina sin cambios por la vía renal. Precaución en pacientes con insuficiencia renal, se recomienda ajustar las dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede afectar el metabolismo al inhibir las enzimas del citocromo P450 lo que puede llevar a un aumento en los niveles del fármaco en sangre."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "El alcohol puede aumentar el riesgo de efectos adversos asociados con la flecainida."
                    },
                    {
                        "nombreInteraccion": "Lácteos",
                        "mecanismo": "Alguna evidencia sugiere que los lácteos pueden interferir con la absorción de la flecainida llevando potencialmente a concentraciones alteradas en plasma y un riesgo aumentado de toxicidad especialmente en pacientes pediatricos."
                    }
                ]
            },
            {
                "id": 19,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Betabloqueantes",
                "nombreGenerico": "Propranolol",
                "nombresComerciales": [
                    "inderal",
                    "protolif."
                ],
                "presentacion": "comprimidos 10mg,40mg,80mg, solución inyectable 1mg/1ml",
                "mecanismoAccion": "antagonista competitivo de receptores B1 y B2",
                "usos": [
                    "\"Hipertensión",
                    "angina",
                    "ansiedad",
                    "profilaxis de migraña",
                    "temblor esencial\""
                ],
                "embarazo": "con precaución (Categoría C)",
                "lactancia": "compatible",
                "administracion": "con comida",
                "reaccionesAdversas": "fatiga, bradicardia, extremidades frías, fenómeno de Raynaud, trastornos del sueño, aumento de peso",
                "mecanismoHepatico": "Se metaboliza en el hígado a través de las enzimas CYP2D6 y CYP1A2. Su eliminación es predominantemente hepática y su biodisponibilidad puede variar debido al efecto de primer paso hepático. Precaución en pacientes con insuficiencia hepática, es posible que se necesiten dosis más bajas.",
                "mecanismoRenal": "Solo una pequeña fracción se elimina sin cambios a través de los riñones (menos del 1%). Aunque la eliminación renal no es significativa, se reocmienda precaución en pacientes con insuficiencia renal severa.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos proteicos",
                        "mecanismo": "Aumentan la biodisponibilidad del farmaco"
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede interferir con el metabolismo del fármaco."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar los efectos de la medicación llevando a un aumento de la sedación y caídas potenciales de la presión arterial."
                    },
                    {
                        "nombreInteraccion": "Regaliz natural",
                        "mecanismo": ""
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en potasio",
                        "mecanismo": "El propanolol puede afectar los niveles de potasio en el cuerpo y los alimentos altos en potasio pueden tener un impacto en la función del corazón si se consumen en grandes cantidades."
                    }
                ]
            },
            {
                "id": 20,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Betabloqueantes",
                "nombreGenerico": "Atenolol",
                "nombresComerciales": [
                    "Tenormin",
                    "vericordin"
                ],
                "presentacion": "Comprimido (recubierto con película) 50mg, 100mg",
                "mecanismoAccion": "actúa sobre receptores B1",
                "usos": [
                    "\"Hipertensión",
                    "angina",
                    "manejo post-infarto de miocardio\""
                ],
                "embarazo": "evitar (Categoría D)",
                "lactancia": "compatibilidad limitada (poco seguro)",
                "administracion": "con o sin comida (consistente)",
                "reaccionesAdversas": "bradicardia, extremidades frías, trastornos gastrointestinales, fatiga",
                "mecanismoHepatico": "Su metabolismo hepático es mínimo. No es necesario un ajuste en pacientes con insuficiencia hepática.",
                "mecanismoRenal": "Se elimina principalmente por vía renal por filtración glomerular y secresión tubular activa. Precaución en pacientes con insuficiencia renal, puesto que la eliminación del fármaco puede vere alterada y causar una acumulación.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede contrarrestar los efectos del atenolol llevando a mareos y desmayos."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Disminuye la eficacia y biodisponibilidad al inhibir el transportador de monoaminas."
                    },
                    {
                        "nombreInteraccion": "Jugo de naranja y manzana",
                        "mecanismo": "El consumo de jugo de naranja reduce significativamente la eficacia del atenolol, mientras que el jugo de manzana reduce su absorcion."
                    },
                    {
                        "nombreInteraccion": "Polifenoles del té",
                        "mecanismo": "Polifenoles oxidativos del té, como aquellos encontrados en el té Pu-er puede inhibir significativamente la absorción de atenolol."
                    }
                ]
            },
            {
                "id": 21,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Betabloqueantes",
                "nombreGenerico": "Celiprolol",
                "nombresComerciales": [
                    "cardem"
                ],
                "presentacion": "comprimido recubierto con película 200mg",
                "mecanismoAccion": "bloqueante receptivo de los receptores B1 con un débil bloqueo de los receptores alfa-2",
                "usos": [
                    "Hipertensión",
                    "angina"
                ],
                "embarazo": "evitar (Categoría D)",
                "lactancia": "compatibilidad probable (bastante seguro)",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "depresión, dolor de cabeza, sofocos, vómitos, náuseas, dolor abdominal alto",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a través del citrocromo P450 (CYP2D6). Precaución en pacientes con insuficiencia hepática severa por riesgo de toxicidad.",
                "mecanismoRenal": "Su eliminación es principalmente renal con un 50% del la dosis administrada excretada sin cambios en la orina. Precaución en pacientes con insuficiencia renal, puede ser necesario un ajuste de dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Disminuye la eficacia y biodisponibilidad al inhibir el transportador de monoaminas."
                    },
                    {
                        "nombreInteraccion": "Té Verde",
                        "mecanismo": "Reduce la farmacocinética del medicamento y la excresión urinaria."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar los efectos de la medicación llevando a un aumento de la sedación y caídas potenciales de la presión arterial."
                    },
                    {
                        "nombreInteraccion": "Jugo de naranja",
                        "mecanismo": "Inhibe el transportados 0ATP2B1 lo que disminuye la concentración y excresión del fármaco"
                    }
                ]
            },
            {
                "id": 22,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Bloqueantes de los canales de calcio",
                "nombreGenerico": "Diltiazem",
                "nombresComerciales": [
                    "cirilen",
                    "corazem",
                    "incoril."
                ],
                "presentacion": "comprimidos/cápsula de liberación prolongada 120mg, 180mg, 90mg, 240mg, 60mg, solución inyectable 25mg/5ml",
                "mecanismoAccion": "limita selectivamente la entrada de calcio reduciendo la contración intracelular",
                "usos": [
                    "Hipertensión",
                    "angina",
                    "ciertas arritmias"
                ],
                "embarazo": "evitar (Categoría C)",
                "lactancia": "compatible",
                "administracion": "con o sin comida (consistente)",
                "reaccionesAdversas": "cefalea, mareo, bloqueo auriculoventricular, estreñimiento, dispepsia, dolor gástrico, náuseas, rash",
                "mecanismoHepatico": "Su metabolismo es principalmente en el hígado a través del citocromo P450 (CYP3A4). Produce metabolitos activos, aunque en menor grado que el fármaco original. Precaución en pacientes con insuficiencia hepática, puesto que se ve afectado el metabolismo del fármaco aumentando sus concentraciones plasmaticas y riresgo de efectos adversos.",
                "mecanismoRenal": "Menos del 4% del fármaco se excreta inalterado por la orina, el resto se elimina como metabolitos. Precaución en casos graves de insuficiencia renal por acumulación de metabolitos.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Aumenta la biodisponibilidad al inhibir las enzimas del citocromo P450 llevando a niveles elevados del fármaco en sangre. Además, aumenta el riesgo de efectos adversos como hipotensión y vasodilatación."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede potenciar los efectos del fármaco llevando a mareos excesivos o caídas de la presión arterial."
                    }
                ]
            },
            {
                "id": 23,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Bloqueantes de los canales de calcio",
                "nombreGenerico": "Felodipino",
                "nombresComerciales": [
                    "plendil"
                ],
                "presentacion": "comprimido de libración prolongada 5mg, 10mg",
                "mecanismoAccion": "reducción de la resistencia vascular periférica",
                "usos": [
                    "HTA",
                    "angina de pecho estable"
                ],
                "embarazo": "evitar (Categoría C)",
                "lactancia": "compatibilidad probable",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "cefaleas, rubefacción, edema periférico",
                "mecanismoHepatico": "Se metaboliza casi por completo en el hígado por la isoenzima CYP3A4 con un extenso metabolismo de primer paso, lo que afecta su biodisponibilidad. Precaución en pacientes con insuficiencia hepática donde puede existir acumulación del fármaco en sangre.",
                "mecanismoRenal": "Su eliminación renal es limitada, una pequeña fracción del fármaco se elimina a través de la orina. En pacientes con insuficiencia renal no se necesita ajuste de dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Aumenta la biodisponibilidad al inhibir las enzimas del citocromo P450 llevando a niveles elevados del fármaco en sangre. Además, aumenta el riesgo de efectos adversos como hipotensión y vasodilatación."
                    },
                    {
                        "nombreInteraccion": "Naranja amarga",
                        "mecanismo": "Inhibe el CYP3A4 aumentando la exposición al fármaco."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Induce el CYP3A4 lo que disminuye las concentraciones plasmáticas del fármaco."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede potenciar los efectos del fármaco llevando a mareos excesivos o caídas de la presión arterial."
                    }
                ]
            },
            {
                "id": 24,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Bloqueantes de los canales de calcio",
                "nombreGenerico": "Nifedipino",
                "nombresComerciales": [
                    "adalat",
                    "adalat oros",
                    "nifelan",
                    "nifensar plus"
                ],
                "presentacion": "cápsula blanda/dura de liberación prolongada, comprimido 10mg, 30mg, 60mg, 20mg",
                "mecanismoAccion": "inhibe el flujo de Ca al tejido miocárdico y muscular liso de arterias coronarias y vasos periféricos",
                "usos": [
                    "Angina de pecho crónica",
                    "vaasoespástica",
                    "HTA",
                    "de Raynaud"
                ],
                "embarazo": "con precaución (categoría C)",
                "lactancia": "compatible",
                "administracion": "con o sin comida (revisar por formulación)",
                "reaccionesAdversas": "cefalea, mareo, edema, vasodilatación, estreñimiento, sensación de malestar",
                "mecanismoHepatico": "Se metaboliza casi por completo en el hígado principalmente por la enzima CYP3A4. Precaución en pacientes con insuficienca hepática que presentan reducción en la capacidad de metabolización del fármaco. Se requiere ajuste de dosis.",
                "mecanismoRenal": "Menos del 1% se limina sin cambios en la orina y sus metabolitos restantes son inactivos. Precaución en casos de insuficiencia renal grave, se debe monitorear la respuesta clínica.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Aumenta la biodisponibilidad al inhibir las enzimas del citocromo P450 llevando a niveles elevados del fármaco en sangre. Además, aumenta el riesgo de efectos adversos como hipotensión y vasodilatación."
                    },
                    {
                        "nombreInteraccion": "Comidas altas en grasa",
                        "mecanismo": "Pueden retrasar la absorción llevando a una menor biodisponibilidad del fármaco."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede potenciar los efectos del fármaco llevando a mareos excesivos o caídas de la presión arterial."
                    }
                ]
            },
            {
                "id": 25,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Bloqueantes de los canales de calcio",
                "nombreGenerico": "Verapamilo",
                "nombresComerciales": [
                    "isoptin",
                    "librapamil",
                    "niposoluted"
                ],
                "presentacion": "comprimido, comprimido recubierto con película/de liberación prolongada 80mg, 240mg, 120mg, solución inyectable 5mg/2ml",
                "mecanismoAccion": "inhibe la entrada de iones calcio a través de la membrana de las células contractiles del músculo cardiaco y liso vascular",
                "usos": [
                    "angina de pecho",
                    "angina inestable",
                    "HTA",
                    "taquicardias supraventriculares",
                    "Flutter"
                ],
                "embarazo": "con precaución (categoría C)",
                "lactancia": "compatible",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "mareo, cefalea, bradicardia, hipotensión, sofocos, estreñimientos, náuseas, edema periférico",
                "mecanismoHepatico": "Se metaboliza extensamente en el hígado por el CYP3A4. En pacientes con insuficiencia hepática se recomienda reducir la dosis por riesgo de toxicidad.",
                "mecanismoRenal": "Cerca del 70% de los metabolitos se excretan por vía renal y el resto por las heces. No presenta problemas en pacientes con insuficiencia renal leve, sin embargo, tener cuidado en pacientes con insuficiencia renal severa.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Aumenta la biodisponibilidad al inhibir las enzimas del citocromo P450 llevando a niveles elevados del fármaco en sangre. Además, aumenta el riesgo de efectos adversos como hipotensión y vasodilatación."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede potenciar los efectos del fármaco llevando a mareos excesivos o caídas de la presión arterial."
                    },
                    {
                        "nombreInteraccion": "Cafeína",
                        "mecanismo": "El verapamilo puede inhibir la descomposición de la cafeína llevando potencialmente a mayores niveles de cafeína en sangre."
                    }
                ]
            },
            {
                "id": 26,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Glucósido cardiaco",
                "nombreGenerico": "Digoxina",
                "nombresComerciales": [
                    "Lanoxin",
                    "Digoxin"
                ],
                "presentacion": "Comprimidos 0.125 mg y 0.25 mg, solución oral 0.05 mg/mL., inyectable,",
                "mecanismoAccion": "Inhibe la bomba Na+/K+, aumentando la concentración de calcio en el corazón, lo que mejora la contractilidad.",
                "usos": [
                    "insuficiencia cardiaca"
                ],
                "embarazo": "con precaución (Categoría C)",
                "lactancia": "compatible",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Náuseas, vómitos, arritmias, confusión, visión borrosa",
                "mecanismoHepatico": "No se metaboliza significativamente en el hígado, la mayor parte circula en su forma activa. No es necesario ajustes de dosis en pacientes con insuficiencia hepática.",
                "mecanismoRenal": "Se elimina principalmente por los riñones con 50-70% de la dosis excretada sin cambios. Precaución en pacientes con insuficiencia renal, la dosis debe ajustarse para evitar riesgo de toxicidad.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Fibra",
                        "mecanismo": "Disminución y retraso de la absorción. Disminuye la biodisponibilidad."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede reducir la efectividad del fármaco al aumentar su metabolismo."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en flavonoides",
                        "mecanismo": "Brocoli. Arándanos, uvas, naranjas, tomate, cacao, té. Aumentan la biodisponibilidad del farmaco."
                    },
                    {
                        "nombreInteraccion": "Regaliz natural",
                        "mecanismo": "Toxicidad digitalica al disminuir las cantidades de potasio. Aumenta el riesgo de efectos secundarios."
                    },
                    {
                        "nombreInteraccion": "Calcio y magnesio",
                        "mecanismo": "Pueden afectar la absorción  al unirse al fármaco en el intestino."
                    }
                ]
            },
            {
                "id": 27,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Diuréticos ahorradores de potasio",
                "nombreGenerico": "Espironolactona",
                "nombresComerciales": [
                    "Aldactone"
                ],
                "presentacion": "Comprimidos: 25 mg, 50 mg, 100 mg",
                "mecanismoAccion": "\"Antagonista de la aldosterona, promueve la excreción de sodio y agua y la retención de potasio\"",
                "usos": [
                    "insuficiencia cardiaca",
                    "hipertensión",
                    "edema",
                    "hiperaldosteronismo primario"
                ],
                "embarazo": "con precaución (Categoría C)",
                "lactancia": "compatible",
                "administracion": "con alimentos",
                "reaccionesAdversas": "Hiperpotasemia, hipotensión, mareos, ginecomastia, trastornos gastrointestinales.",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado, convirtiéndose en varios metabolitos activos. Usa las izoenzimas CYP3A4 y CYP2C8. Precaución en pacientes con insuficiencia hepática, puesto que puede aumentar el riesgo de toxicidad.",
                "mecanismoRenal": "Los metabolitos se excretan por la orina y bilis. En pacientes con insuficiencia renal puede haber acumulación causando hiperpotasemia. Es necesari ajustar la dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos ricos en potasio",
                        "mecanismo": "La espironolactona puede aumentar los niveles de potasio en sangre lo que puede llevar a una posible hiperpotasemia. Evitar alimentos muy altos en potasio."
                    },
                    {
                        "nombreInteraccion": "Regaliz natural",
                        "mecanismo": "Disminuye el efecto del fármaco y llevar a pérdida de potasio."
                    }
                ]
            },
            {
                "id": 28,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Diuréticos ahorradores de potasio",
                "nombreGenerico": "Amilorida",
                "nombresComerciales": [
                    "Midamor"
                ],
                "presentacion": "Comprimidos: 5 mg, 10 mg",
                "mecanismoAccion": "Inhibe el transporte de sodio en los túbulos renales, promoviendo la excreción de sodio y la retención de potasio.",
                "usos": [
                    "HTA",
                    "insuficiencia cardiaca",
                    "prevención de hipokalemia"
                ],
                "embarazo": "con precaución (Categoría C)",
                "lactancia": "Compatibilidad probable (bastante seguro ) RAM leves o poco probable",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Hiperpotasemia, hipotensión, mareos, trastornos gastrointestinales.",
                "mecanismoHepatico": "No se metaboliza en el hígado. En pacientes con insuficiencia hepática se puede ver alterado el balance electrolítico y agravar los efectos adversos.",
                "mecanismoRenal": "Se excreta de forma inalterada a través de los riñones. En pacientes con insuficiencia renal puede acumularse y causar hiperpotasemia, se debe ajustar la dosis y monitorear los niveles de potasio.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos ricos en potasio",
                        "mecanismo": "Este farmaco puede producir retencion de potasio causando una posible hiperpotasemia. Evitar el consumo de alimentos ricos en potasio (platano, naranja, frutos secos, legumbres)"
                    },
                    {
                        "nombreInteraccion": "Regaliz natural",
                        "mecanismo": "Disminuye el efecto del farmaco."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Induce el CYP3A4 lo que disminuye las concentraciones plasmáticas del fármaco."
                    }
                ]
            },
            {
                "id": 29,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Diuréticos de asa",
                "nombreGenerico": "Furosemida",
                "nombresComerciales": [
                    "Lasix"
                ],
                "presentacion": "Comprimidos  20 mg, 40 mg, 80 mg, solución inyectable. 10 mg/mL",
                "mecanismoAccion": "Inhibe la reabsorción de sodio y cloro en el asa de Henle, aumentando la diuresis.",
                "usos": [
                    "edema",
                    "insuficiencia cardiaca",
                    "HTA",
                    "insuficiencia renal"
                ],
                "embarazo": "con precaución (Categoría C)",
                "lactancia": "Compatibilidad probable (bastante seguro) RAM leves o poco probable",
                "administracion": "sin alimentos",
                "reaccionesAdversas": "Hipokalemia, deshidratación, mareos, ototoxicidad (en dosis altas).",
                "mecanismoHepatico": "Se metaboliza parcialmente en el hígado en una pequeña proporción (10-20%) a metabolitos inactivos. Precaución en pacientes con insuficiencia renal o cirrosis hepática debido al riesgo de desequilibrios electrolíticos y empeoramiento de la encefalopatía hepática.",
                "mecanismoRenal": "Se excreta principalmente por la vía renal (60-70%) en su forma inalterada a través de la orina. Precaución en pacientes con insuficiencia renal donde puede haber una reducción de la eficacia del fármaco. Es necesario ajustar la dosis o considerar otras opciones.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Potasio y magnesio",
                        "mecanismo": "La furosemida puede reducir significativamente los electrolitos. Una dieta alta en potasio y magnesio puede ayudar a mitigar estos efectos."
                    },
                    {
                        "nombreInteraccion": "Regaliz natural",
                        "mecanismo": "Altas cantidades pueden reducir los niveles de potasio aumentando el riesgo de hipopotasemia al combinarse con la furosemida."
                    },
                    {
                        "nombreInteraccion": "Cafeína",
                        "mecanismo": "La cafeína tiene propiedades diuréticas que puede exacerbar la pérdida de líquidos. Un consumo excesivo puede aumentar el riesgo de deshidratación y desbalances electrolíticos"
                    }
                ]
            },
            {
                "id": 30,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Diuréticos tiazídicos",
                "nombreGenerico": "Hidroclorotiazida",
                "nombresComerciales": [
                    "Hydrodiuril",
                    "Esidrex"
                ],
                "presentacion": "Comprimidos:  12.5 mg, 25 mg, 50 mg",
                "mecanismoAccion": "Inhibe la reabsorción de sodio y cloro en el túbulo contorneado distal, aumentando la excreción de agua.",
                "usos": [
                    "HTA",
                    "edema"
                ],
                "embarazo": "compatible (categoría B)",
                "lactancia": "Compatible",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Hipokalemia, mareos, hiperglucemia, trastornos gastrointestinales.",
                "mecanismoHepatico": "No se metaboliza en el hígado. Precaución en pacientes con insuficiencia hepática por los posibles desequilibrios electrolíticos que pueden precipitar encefalopatía hepática.",
                "mecanismoRenal": "Se excreta casi por completo por vía renal inalterada. Monitorear su uso en pacientes con insuficiencia renal, ya que puede reducir la función renal. No se recomienda en pacientes con insuficiencia renal severa.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar el efecto del fármaco sobre la presión arterial lo que puede llevar a mareos y desmayos."
                    },
                    {
                        "nombreInteraccion": "Regaliz natural",
                        "mecanismo": "La glicirricina del regaliz puede llevar a mayor retención de sodio y pérdida de potasio. Esto exacerbera los efectos del fármaco sobre el potasio llevando potencialmente a desbalances."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en calcio",
                        "mecanismo": "La hidroclorotiazida puede aumentar los niveles de calcio en sangre."
                    },
                    {
                        "nombreInteraccion": "Desbalances electrolíticos",
                        "mecanismo": "La hidroclorotiazida puede causar desbalances electrolíticos como hiperpotasemia e hipermagnasemia."
                    },
                    {
                        "nombreInteraccion": "Goma guar",
                        "mecanismo": "Descenso de las concentraciones del farmaco"
                    }
                ]
            },
            {
                "id": 31,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Diuréticos tiazídicos",
                "nombreGenerico": "Indapamida",
                "nombresComerciales": [
                    "Lozol"
                ],
                "presentacion": "Comprimidos: 1.5 mg, 2.5 mg",
                "mecanismoAccion": "Diurético thiazídico que inhibe la reabsorción de sodio en el túbulo contorneado distal, aumentando la excreción de agua",
                "usos": [
                    "HTA",
                    "edema"
                ],
                "embarazo": "con precaución (Categoría C)",
                "lactancia": "Compatible con preucacion RAM leves o poco probable",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Hipokalemia, mareos, sequedad bucal, trastornos gastrointestinales.",
                "mecanismoHepatico": "Se metaboliza en el hígado principalmente a través de la isoenzima CYP3A4 del citocromo P450. Precaución en pacientes con insuficiencia hepática por desequilibrios electroliticos que pueden inducir encefalopatía.",
                "mecanismoRenal": "Su excresión es renal a través de la orina. No se recomienda en pacientes con insuficiencia renal grave, ya que puede agravar la disfunción renal.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Regaliz natural",
                        "mecanismo": "La glicirricina del regaliz provoca retencion de sodio, agua e hipopotasemia."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Potencia la hipotensión ortostática."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en potasio",
                        "mecanismo": "La indapamida puede causar pérdida aumentada de potasio urinario llevando a una posible hipopotasemia. Es importante consumir alimentos ricos en potasio."
                    },
                    {
                        "nombreInteraccion": "Goma guar",
                        "mecanismo": "Disminuye las concentración del fármaco."
                    }
                ]
            },
            {
                "id": 32,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Estatinas",
                "nombreGenerico": "Simvastatina",
                "nombresComerciales": [
                    "Zocor"
                ],
                "presentacion": "tabletas 5mg, 10mg 20mg, 40mg y 80mg",
                "mecanismoAccion": "Inhibe la HMG CoA reductasa, lo que reduce la sintesis de colesterol en el higado,",
                "usos": [
                    "hiperlipidemia",
                    "prevención de enfermedades cardiovasculares"
                ],
                "embarazo": "Contraindicado (Categoría X)",
                "lactancia": "Compatible con preucacion RAM leves o poco probable",
                "administracion": "con o sin alimentos, recomendada por la noche",
                "reaccionesAdversas": "dolor abdominal, mialgias, elevacion de transminasas",
                "mecanismoHepatico": "Se metaboliza en el hígado a través de las enzimas CYP3A4 del citocromo P450. Se excreta principalmente a través de la bilis. Produce metabolitos activos que contribuyen a su efecto reductor de lípidos. Precaución en pacientes con insuficiencia hepática, ya que puede aumentar el riesgo de hepatoxicidad.",
                "mecanismoRenal": "No se elimina en gran medida por los riñones. Precaución en pacientes con insuficiencia renal severa.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibe la enzima del citocromo P450 3A4 que es crucial para el metabolismo de la simvastatina. Esto causa un aumento en las concentraciones plasmáticas y su metabolito activo."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede reducir la efectividad al aumentar su metabolismo llevando a menores niveles del fármaco en sangre."
                    },
                    {
                        "nombreInteraccion": "Jugo de granada",
                        "mecanismo": "Al igual que el pomelo, puede inhibir la enzima CYP3A4 potencialmente aumentando los niveles del fármaco en sangre."
                    },
                    {
                        "nombreInteraccion": "Acidos grasos omega-3",
                        "mecanismo": "Potencian el efecto hipolipemiante del medicamento."
                    }
                ]
            },
            {
                "id": 33,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Estatinas",
                "nombreGenerico": "Atorvastatina",
                "nombresComerciales": [
                    "lipitor"
                ],
                "presentacion": "Tabletas 10mg, 20mg, 40 y 80mg",
                "mecanismoAccion": "Inhibe la HMG-CoA reductasa, disminuyendo la producción de colesterol y aumentando la captación de LDL.",
                "usos": [
                    "hiperlipidemia",
                    "prevención de enfermedades cardiovasculares"
                ],
                "embarazo": "compatible (categoría B)",
                "lactancia": "Compatible",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Miopatía, Aumento de HbA1c y Glucosa en Ayunas",
                "mecanismoHepatico": "Se metaboliza en el hígado por el citocromo P450 CYP3A4 resutlando en sus metabolitos activos. Se debe monitorear la función hepática antes y durante el tratamiento. Pacientes con insuficiencia hepática, puesto que el metabolismo del fármaco se ve comprometido.",
                "mecanismoRenal": "Su excresión renal es mínima (2%). Se excreta principalmente por bilis. No es necesario ajustar la dosis en pacientes con insuficiencia renal leve a moderada, pero se recomienda precaución en pacientes con insuficiencia renal grave.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibe la enzima del citocromo P450 3A4 que es crucial para el metabolismo de la simvastatina. Esto causa un aumento en las concentraciones plasmáticas y su metabolito activo."
                    },
                    {
                        "nombreInteraccion": "Acidos grasos omega-3",
                        "mecanismo": "Potencian el efecto hipolipemiante del medicamento."
                    },
                    {
                        "nombreInteraccion": "Fibra",
                        "mecanismo": "Puede complementar los efectos hipolipemiantes de la atorvastatina sobre el colesterol."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede reducir la efectividad del fármaco al aumentar su metabolismo a través de la enzima CYP3A4."
                    },
                    {
                        "nombreInteraccion": "Té verde, cacao y café",
                        "mecanismo": "Alteran la absorción del fármaco debido a su contenido en polifenoles"
                    }
                ]
            },
            {
                "id": 34,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Estatinas",
                "nombreGenerico": "Lovastatina",
                "nombresComerciales": [
                    "Mevacor"
                ],
                "presentacion": "Tabletas de 10 mg, 20 mg y 40 mg.",
                "mecanismoAccion": "Inhibe la HMG-CoA reductasa, reduciendo la síntesis de colesterol.",
                "usos": [
                    "hiperlipidemia",
                    "prevención de enfermedades cardiovasculares"
                ],
                "embarazo": "Contraindicada (Categoría X)",
                "lactancia": "Compatible con preucacion RAM leves o poco probable",
                "administracion": "justo despues o con alimentos",
                "reaccionesAdversas": "Mialgias, hepatotoxicidad, y riesgo de rabdomiolisis.",
                "mecanismoHepatico": "Es una profármaco que se convierte a su forma activa en el hígado. Se metaboliza principalmente por el CYP3A4 produciendo sus metabolitos activos. Evitar en pacientes con enfermedades hepáticas activas por riesgo de hepatotoxicidad.",
                "mecanismoRenal": "Cerca del 10% del fármaco se excreta por vía renal. La mayoría del fármaco se excreta por las bilis. Precaución en pacientes con insuficiencia renal, ya que una mayor acumulación del fármaco puede aumentar el riesgo de efectos secundarios.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibe el CYP450 aumentando la concentracion del farmaco."
                    },
                    {
                        "nombreInteraccion": "Salvado de avena/pectina",
                        "mecanismo": "Disminuye la absorción del fármaco."
                    },
                    {
                        "nombreInteraccion": "Plantago Ovata/Goma Guar",
                        "mecanismo": "Potencia el efecto hipolipemiante."
                    },
                    {
                        "nombreInteraccion": "Naringina y jugo de naranja",
                        "mecanismo": "Pueden reducir la estabilidad de unión de la lovastatina aumentando su concentración en  sangre."
                    }
                ]
            },
            {
                "id": 35,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Estatinas",
                "nombreGenerico": "Prevastatina",
                "nombresComerciales": [
                    "Pravachol"
                ],
                "presentacion": "Tabletas de 10 mg, 20 mg, 40 mg y 80 mg.",
                "mecanismoAccion": "Inhibe la HMG-CoA reductasa, disminuyendo el colesterol LDL y aumentando el HDL.",
                "usos": [
                    "hiperlipidemia",
                    "prevención de enfermedades cardiovasculares"
                ],
                "embarazo": "compatible (Categoria C)",
                "lactancia": "compatible",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "Dolor de cabeza, mialgias, y hepatotoxicidad.",
                "mecanismoHepatico": "Se metaboliza mínimamente por el hígado, sin embargo, se recomienda monitorizar la función hepática constantemente.",
                "mecanismoRenal": "Cerca del 20% del fármaco se excreta inalterada por la vía renal a través de la orina. Precaución en pacientes con insuficiencia renal moderada a grave, es necesario un ajuste de dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar el riesgo de daño hepático."
                    },
                    {
                        "nombreInteraccion": "Coenzima Q10",
                        "mecanismo": "La pravastatina puede disminuir los niveles de CoQ10."
                    }
                ]
            },
            {
                "id": 36,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Estatinas",
                "nombreGenerico": "Fluvastatina",
                "nombresComerciales": [
                    "Lescol"
                ],
                "presentacion": "\"Tabletas de 20 mg y 80 mg, también en forma de cápsulas de liberación prolongada.\"",
                "mecanismoAccion": "Inhibe la HMG-CoA reductasa, reduciendo los niveles de colesterol LDL.",
                "usos": [
                    "hiperlipidemia",
                    "prevención de enfermedades cardiovasculares"
                ],
                "embarazo": "Contraindicada (Categoría X)",
                "lactancia": "Compatible con preucacion RAM leves o poco probable",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "Mialgias, elevación de transaminasas",
                "mecanismoHepatico": "Se metaboliza en el hígado principalmente por el sistema enzimático del citocromo P450 con la isoenzima CYP2C9. Precaución pacientes con insuficiencia hepática donde puede haber aumento de los niveles plasmáticos del fármaco.",
                "mecanismoRenal": "Menos del 6% de la dosis se excreta sin cambios por la orina. Cerca del 95% se excreta por las heces. No se requiere ajuste de dosis en pacientes con insuficiencia renal leve a moderada.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar el riesgo de daño hepático."
                    },
                    {
                        "nombreInteraccion": "Coenzima Q10",
                        "mecanismo": "La pravastatina puede disminuir los niveles de CoQ10."
                    }
                ]
            },
            {
                "id": 37,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Fibratos",
                "nombreGenerico": "Bezafibrato",
                "nombresComerciales": [
                    "Lipofen",
                    "Fibral",
                    "bezalip"
                ],
                "presentacion": "Tabletas de 200 mg.",
                "mecanismoAccion": "Activa los receptores PPARα, aumentando la oxidación de los ácidos grasos y reduciendo los triglicéridos",
                "usos": [
                    "hiperlipidemia",
                    "dislipidemia"
                ],
                "embarazo": "con precaución (Categoría C)",
                "lactancia": "Compatible con preucacion RAM leves o poco probable",
                "administracion": "con alimentos",
                "reaccionesAdversas": "Mialgias, dispepsia, y hepatotoxicidad, Puede potenciar el efecto de anticoagulantes",
                "mecanismoHepatico": "Se metaboliza en el hígado por el citocromo P450 CYP3A4 resutlando en sus metabolitos activos. No se recomienda en pacientes con insuficiencia hepática grave debido al riesgo de acumulación y toxicidad.",
                "mecanismoRenal": "Aproximadamente el 50% de la dosis administrada se excreta sin cambios en la orina. En casos de insuficiencia renal, se debe ajustar la dosis de bezafibrato por un riesgo aumentado de toxicidad.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Plantago Ovata/Goma Guar",
                        "mecanismo": "Potencia el efecto hipolipemiante."
                    }
                ]
            },
            {
                "id": 38,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Fibratos",
                "nombreGenerico": "Gemfibrozilo",
                "nombresComerciales": [
                    "Lopid"
                ],
                "presentacion": "Tabletas de 600 mg",
                "mecanismoAccion": "Inhibe la lipólisis y disminuye la síntesis de lipoproteínas, reduciendo los niveles de triglicéridos y aumentando el HDL.",
                "usos": [
                    "\"Hiperlipidemia",
                    "dislipidemia (especialmente para reducir los triglicéridos)\""
                ],
                "embarazo": "con precaución (Categoría C)",
                "lactancia": "Compatible con preucacion RAM leves o poco probable",
                "administracion": "tomar 30 minutos antes de las comidas",
                "reaccionesAdversas": "Malestar gastrointestinal, mialgias, y riesgo de rabdomiolisis, Puede potenciar el efecto de anticoagulantes.",
                "mecanismoHepatico": "Se metaboliza extensamente en el hígado, transformándose en metabolitos activos. El fármaco y su metabolito son inhibidores potentes edl CYP2C8 y tienen interacciones con transportadores hepáticos y renales. Precaución en pacientes con insuficiencia hepática grave, ya que el metabolismo puede verse comprometido.",
                "mecanismoRenal": "Aproximadamente el 70% de la dosis se excreta por la orina en forma de metabolitos. Precaución en pacientes con insuficiencia renal moderada a grave por aumento de los riesgos adversos.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Goma guar",
                        "mecanismo": "Potencia el efecto hipolipemiante."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar el riesgo de daño hepático y elevar los niveles de trigliceridos."
                    }
                ]
            },
            {
                "id": 39,
                "grupo": "Sistema Cardiovascular",
                "tipo": "IECA",
                "nombreGenerico": "Enapril",
                "nombresComerciales": [
                    "Vasotec"
                ],
                "presentacion": "Tabletas de 2.5 mg, 5 mg, 10 mg y 20 mg",
                "mecanismoAccion": "Inhibidor de la enzima convertidora de angiotensina (ECA), disminuyendo la producción de angiotensina II, lo que lleva a la vasodilatación.",
                "usos": [
                    "HTA",
                    "insuficiencia cariaca",
                    "disfunción ventricular izquierda"
                ],
                "embarazo": "Evitar (categoria D)",
                "lactancia": "compatible",
                "administracion": "sin comida",
                "reaccionesAdversas": "Tos seca, hiperkalemia, y angioedema",
                "mecanismoHepatico": "Es un profármaco que se convierte en su forma activa en el hígado a través de la hidrólisis. Precaución en pacientes con insuficiencia hepática o cirrosis, se requiere de ajuste de dosis y mayor monitoreo.",
                "mecanismoRenal": "La eliminación del fármaco y su forma activa es principalmente renal (aproximadamente el 60% se excreta sin cambios en la orina). Precaución en pacientes con insuficiencia renal, la dosis debe reducirse para evitar toxicidad.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Regaliz natural",
                        "mecanismo": "Reduce la eficacia de los efectos hiperteensivos de los IECA."
                    },
                    {
                        "nombreInteraccion": "Omega-3",
                        "mecanismo": "A bajas dosis puede ayudar a reducir la preisón arterial. A altas dosis puede aumentar los efectos hipotensores."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en potasio",
                        "mecanismo": "Su consumo en conjunto con enalapril puede llevar a hiperpotasemia."
                    }
                ]
            },
            {
                "id": 40,
                "grupo": "Sistema Cardiovascular",
                "tipo": "IECA",
                "nombreGenerico": "Captopril",
                "nombresComerciales": [
                    "Capoten"
                ],
                "presentacion": "Tabletas de 12.5 mg, 25 mg y 50 mg.",
                "mecanismoAccion": "Inhibidor de la ECA, reduciendo la producción de angiotensina II y promoviendo la vasodilatación",
                "usos": [
                    "HTA",
                    "insuficiencia cardiaca",
                    "nefropatía diabética"
                ],
                "embarazo": "Evitar (categoria D)",
                "lactancia": "compatible",
                "administracion": "1 hora antes de las comidas",
                "reaccionesAdversas": "Tos seca, rash, hiperkalemia, y angioedema",
                "mecanismoHepatico": "Se absorbe y metaboliza en el hígado con una pequeña proporción que se biotransforma en metabolitos inactivos. Precaución en pacientes con enfermedades hepáticas graves, se puede observar una variabilidad a la respuesta del fármaco.",
                "mecanismoRenal": "Cerca del 50% del fármaco se elimina sin cambios por vía renal. Precaución en pacientes con insuficiencia renal, puede haber acumulación del fármaco y posibles efectos adversos.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Regaliz natural",
                        "mecanismo": "Reduce la eficacia de los efectos hipertensivos de los IECA."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en potasio",
                        "mecanismo": "El captorpil retiene potasio por lo que puede haber riesgo de hiperpotasemia. Controlar el consumo de alimentos ricos en potasio."
                    },
                    {
                        "nombreInteraccion": "Omega-3",
                        "mecanismo": "A bajas dosis puede ayudar a reducir la preisón arterial. A altas dosis puede aumentar los efectos hipotensores."
                    },
                    {
                        "nombreInteraccion": "Suplementos de hierro",
                        "mecanismo": "Los suplementos de hierro pueden reducir la absorción del fármaco al consumirse en conjunto."
                    }
                ]
            },
            {
                "id": 41,
                "grupo": "Sistema Cardiovascular",
                "tipo": "IECA",
                "nombreGenerico": "Lisinopril",
                "nombresComerciales": [
                    "Dynacirc"
                ],
                "presentacion": "Tabletas de 2.5 mg y 5 mg",
                "mecanismoAccion": "Bloqueador de los canales de calcio, causando vasodilatación y disminuyendo la presión arteria",
                "usos": [
                    "HTA",
                    "insuficiencia cardiaca",
                    "manejo post-infarto de miocardio"
                ],
                "embarazo": "Evitar (categoria D)",
                "lactancia": "Compatible con preucacion RAM leves o poco probable",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Edema periférico, mareos y cefalea",
                "mecanismoHepatico": "No se metaboliza en el hígado y se elimina sin cambios a través de los riñones. No requiere ajustes en pacientes con insuficiencia hepática.",
                "mecanismoRenal": "Cerca del 100% de la dosis administrada se excreta en la orina. Reducir la dosis de manera significativa en pacientes con insuficiencia renal para evitar acumulación y toxicidad.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Regaliz natural",
                        "mecanismo": "Reduce la eficacia de los efectos hipertensivos de los IECA."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en potasio",
                        "mecanismo": "El captorpil retiene potasio por lo que puede haber riesgo de hiperpotasemia. Controlar el consumo de alimentos ricos en potasio."
                    },
                    {
                        "nombreInteraccion": "Omega-3",
                        "mecanismo": "A bajas dosis puede ayudar a reducir la preisón arterial. A altas dosis puede aumentar los efectos hipotensores."
                    }
                ]
            },
            {
                "id": 42,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Actuan sobre renina angiotensina",
                "nombreGenerico": "Aliskiren",
                "nombresComerciales": [
                    "Tekturna"
                ],
                "presentacion": "Tabletas de 150 mg y 300 mg",
                "mecanismoAccion": "Inhibidor directo de la renina, disminuyendo la producción de angiotensina I.",
                "usos": [
                    "HTA"
                ],
                "embarazo": "Evitar (categoria D)",
                "lactancia": "Compatibilidad probable (bastante seguro)",
                "administracion": "tomar con el estómago vacío para mejorar la absorción.",
                "reaccionesAdversas": "Diarrea, hiperkalemia, y angioedema",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a través de la enzima CYP3A4. Sin embargo, su metabolismo es limitado, ya que la mayor parte del fármaco se excreta sin cambios. Precaución en pacientes con enfermedad renal moderada o leve.",
                "mecanismoRenal": "Se elimina principalmente por las heces (90%) con una excreción renal de solo 0,6% de la dosis administrada. Precaución en pacientes con insuficiencia renal severa.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Jugos de frutas (naranja, pomelo, manzana)",
                        "mecanismo": "Compiten con el fármaco a nivel intestinal."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede reducir la efectividad del farmaco el inducir enzimas hepaticas o afectar transportadores del farmaco llevando a una disminucion de sus niveles."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en potasio",
                        "mecanismo": "El aliskiren puede aumentar los niveles de potasio lo que eleva el riesgo de hiperpotasemia. Controlar el consumo de alimentos ricos en potasio."
                    }
                ]
            },
            {
                "id": 43,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Actuan sobre renina angiotensina",
                "nombreGenerico": "Losartán",
                "nombresComerciales": [
                    "Cozaar"
                ],
                "presentacion": "comprimido recubierto con pelicula 100mg, 25mg, 50mg",
                "mecanismoAccion": "Antagonista del receptor de la angiotensina II.",
                "usos": [
                    "HTA",
                    "enfermedad renal en adultos con HTA y DM tipo 2",
                    "insuficiencia cardiaca crónica"
                ],
                "embarazo": "Evitar (categoria D)",
                "lactancia": "compatibilidad probable (bastante seguro)",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "anemia, mareos, vertigo, fallo renal, hiperpotasemia, hipoglucemia",
                "mecanismoHepatico": "Se metaboliza extensamente en el hígado a través del CYP2C9 y, en menor grado, el CYP3A4, produciendo un metabolito activo (EXP3174), que tiene una actividad farmacológica más prolongada. Considerar dosis bajas del medicamento en pacientes con insuficiencia hepática moderada.",
                "mecanismoRenal": "Aproximadamente el 35% de la dosis de losartán se elimina por los riñones, mientras que el resto se excreta en las heces. No es necesario ajustar la dosis en pacientes con insuficiencia renal leve o moderada. Tener precaución en pacientes con insuficiencia renal severa.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos ricos en potasio",
                        "mecanismo": "El losartán puede aumentar los niveles de potasio lo que eleva el riesgo de hiperpotasemia. Controlar el consumo de alimentos ricos en potasio."
                    },
                    {
                        "nombreInteraccion": "Regaliz natural",
                        "mecanismo": "La glicirricina del regaliz provoca retencion de sodio, aumento de la presión arterial por lo que contrarresta los efectos del fármaco."
                    },
                    {
                        "nombreInteraccion": "Quercitina",
                        "mecanismo": "Aumenta la exposición sistémica al fármaco y disminuye las concentraciones plasmáticas de su metabolito activo."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede inhibir el metabolismo del farmaco por su efecto sobre las enzimas del citocromo P450, especialemente la CYP3A2. Esto puede llevar a un aumento de los niveles del farmaco en sangre aumentando el riesgo de efectos adversos."
                    }
                ]
            },
            {
                "id": 44,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Secuestradores de acidos billares",
                "nombreGenerico": "Colesvelam",
                "nombresComerciales": [
                    "Welchol"
                ],
                "presentacion": "Tabletas de 625 mg y polvo para suspensión",
                "mecanismoAccion": "Secuestrador de ácidos biliares que reduce el colesterol LDL.",
                "usos": [
                    "hiperlipidemia",
                    "DM tipo 2 (terapia complementaria)"
                ],
                "embarazo": "Compatible (Categoria B)",
                "lactancia": "Compatible",
                "administracion": "con alimentos",
                "reaccionesAdversas": "Estreñimiento, malestar gastrointestinal, y aumento de transaminasas.",
                "mecanismoHepatico": "No se absorbe sistemáticamente, por lo que no tiene metabolismo renal ni hepático.",
                "mecanismoRenal": "No se excreta en la orina, ya que el fármaco se une a los ácidos biliares en el intestino y se elimina por las heces.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Vitaminas liposolubles (ADEK)",
                        "mecanismo": "Altera la absorción de estas vitaminas por lo que se puede requerir de suplementación."
                    }
                ]
            },
            {
                "id": 45,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Secuestradores de acidos billares",
                "nombreGenerico": "Colestipol",
                "nombresComerciales": [
                    "Colestid"
                ],
                "presentacion": "Tabletas de 1 g y polvo para suspensión",
                "mecanismoAccion": "Secuestrador de ácidos biliares, disminuyendo la absorción de colesterol en el intestino",
                "usos": [
                    "hiperlipidemia"
                ],
                "embarazo": "Compatible (Categoria B)",
                "lactancia": "Compatible",
                "administracion": "con alimentos y líquidos",
                "reaccionesAdversas": "Estreñimiento, flatulencias, y dispepsia",
                "mecanismoHepatico": "No se absorbe por el tracto gastrointestinal, por lo que no tiene metabolismo renal ni hepático.",
                "mecanismoRenal": "No se excreta por los riñones de manera significativa, ya que no se absorbe en la circulación sistémica. Se excreta principalmente en las heces junto con los ácidos biliares.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Vitaminas liposolubles (ADEK)",
                        "mecanismo": "Altera la absorción de estas vitaminas por lo que se puede requerir de suplementación."
                    }
                ]
            },
            {
                "id": 46,
                "grupo": "Sistema Cardiovascular",
                "tipo": "Secuestradores de acidos billares",
                "nombreGenerico": "Colestiramina",
                "nombresComerciales": [
                    "Questran"
                ],
                "presentacion": "Polvo para suspensión",
                "mecanismoAccion": "Secuestrador de ácidos biliares que reduce el colesterol LDL.",
                "usos": [
                    "hiperlipidemia",
                    "prurito asociado con obstrucción biliar"
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "Compatible",
                "administracion": "con alimentos y líquidos",
                "reaccionesAdversas": "Estreñimiento, malestar gastrointestinal, y disminución de la absorción de otras drogas",
                "mecanismoHepatico": "No se absorbe por el tracto gastrointestinal, por lo que no tiene metabolismo renal ni hepático.",
                "mecanismoRenal": "No se excreta por los riñones, ya que no se absorbe sistémicamente. Se elimina en las heces junto con los ácidos biliares a los que se une.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Vitaminas liposolubles (ADEK)",
                        "mecanismo": "Altera la absorción de estas vitaminas por lo que se puede requerir de suplementación."
                    }
                ]
            },
            {
                "id": 47,
                "grupo": "Hormonales Sistémicos",
                "tipo": "Hormonas Tiroideas",
                "nombreGenerico": "Levotiroxina",
                "nombresComerciales": [
                    "eutirox",
                    "tinosol",
                    "tiroxin"
                ],
                "presentacion": "Comprimido 25 ug, 50ug, 70ug, 100ug, 125ug, 150ug, 75ug, 112ug, 88ug",
                "mecanismoAccion": "Sustituye o suplementa las hormonas tiroideas, aumentando el metabolismo y afectando el crecimiento y desarrollo.",
                "usos": [
                    "Hipotiroidismo",
                    "tratamiento de bocio",
                    "y como terapia sustitutiva después de la tiroidectomía"
                ],
                "embarazo": "Categoría A (compatible)",
                "lactancia": "compatible",
                "administracion": "30-60 min antes del desayuno",
                "reaccionesAdversas": "Palpitaciones, ansiedad, insomnio, pérdida de peso, sudoración excesiva.",
                "mecanismoHepatico": "Se metaboliza extensamente en el hígado el cual es el mayor sitio de degradación del T4 y T3. Las hormonas tiroideas se excretan directamente en la bilis y el intestino, doned experimentan recirculación enterohepatica. Precaución en pacientes con insuficiencia hepática por posibles alteraciones de la excresión y metabolismo del fármaco.",
                "mecanismoRenal": "La principal vía de eliminación de las hormonas tiroideas es la renal: aproximadamente el 20% de la T4 se elimina en las heces. Precaución en pacientes con insuficiencia renal por posibles alteraciones de la excresión y metabolismo del fármaco.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Café",
                        "mecanismo": "Disminuye la eficacia y seguridad del fármaco."
                    },
                    {
                        "nombreInteraccion": "Soja",
                        "mecanismo": "Inhibe la peroxidasa tiroidea por las isoflavonas, formación de complejos no absorbibles."
                    },
                    {
                        "nombreInteraccion": "Fibra",
                        "mecanismo": "Reduce la absorción del fármaco."
                    },
                    {
                        "nombreInteraccion": "Papaya",
                        "mecanismo": "Aumenta el pH del medio reduciendo la absorción del fármaco."
                    },
                    {
                        "nombreInteraccion": "Suplementos de calcio y hierro",
                        "mecanismo": "Pueden reducir la absorción al unirse al fármaco en el tracto gastrointestinal."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede retrasar la absorción del fármaco y reducir su bodisponibilidad."
                    },
                    {
                        "nombreInteraccion": "Brocoli, coles de bruselas y repollo",
                        "mecanismo": "Algunos vegetales crucíferos pueden afectar los niveles de la hormona tiroidea si se consumen en altas cantidades."
                    }
                ]
            },
            {
                "id": 48,
                "grupo": "Hormonales Sistémicos",
                "tipo": "Corticoides",
                "nombreGenerico": "Prednisona",
                "nombresComerciales": [
                    "Deltasone",
                    "Orasone",
                    "bersen",
                    "cortiprex",
                    "meticorten",
                    "precorten",
                    "presacor",
                    "ramacort"
                ],
                "presentacion": "Comprimido 5mg, 20mg, 50mg, suspensión oral 1mg/ml, 20mg/5ml",
                "mecanismoAccion": "Es un glucocorticoide que reduce la inflamación y suprime la respuesta inmunitaria.",
                "usos": [
                    "Enfermedades autoinmunitarias",
                    "alergias severas",
                    "trastornos inflamatorios",
                    "y como tratamiento en algunos tipos de cáncer."
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "compatible",
                "administracion": "con alimentos",
                "reaccionesAdversas": "Aumento de peso, insomnio, hipertensión, hiperglucemia, infecciones.",
                "mecanismoHepatico": "Es un prófarmaco que se convierte en su forma activa principalmente en el hígado. Precaución en casos de insuficiencia hepática grave donde se puede ver reducida la eficacia del fármaco. Se necesita un ajuste de dosis.",
                "mecanismoRenal": "Sus metabolitos se excretan por via renal. El aclaramiento renal de la forma activa está influenciado por la unión del fármaco a las proteínas, que es alta (aproximadamente 90-95%). Precaución en pacientes con insuficiencia renal, es necesario un ajuste de dosis. Vigilar los efectos seundarios por riesgo de toxicidad.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibición CYP3A4 Incremento de la concentracion del farmaco en organismo"
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Riesgo de sufrir ulceraciones"
                    },
                    {
                        "nombreInteraccion": "Regaliz natural",
                        "mecanismo": "Potencia el efecto del fármaco exacerbando potencialmente los efectos secundarios."
                    },
                    {
                        "nombreInteraccion": "Potasio",
                        "mecanismo": "La prednisona puede causar péridas de potasio llevando a una disminución de los niveles en sangre."
                    },
                    {
                        "nombreInteraccion": "Calcio",
                        "mecanismo": "El consumo de predniosa a largo plazo puede causar déficit en la absorción de calcio y riesgo aumentando de osteoporosis."
                    }
                ]
            },
            {
                "id": 49,
                "grupo": "Hormonales Sistémicos",
                "tipo": "Corticoides",
                "nombreGenerico": "Metilprednisolona",
                "nombresComerciales": [
                    "Medrol",
                    "Depo-Medrol",
                    "solu medrol"
                ],
                "presentacion": "Comprimido 16mg, 4mg, suspensión inyectable 40mg/1ml, 80mg/2ml, liofilizado para solución inyectable 125mg, 500mg, 125mg/2ml, 500mg/4ml, polvo y disolvente para solución inyectable 125mg+2ml, 500mg+8ml",
                "mecanismoAccion": "Glucocorticoide que reduce la inflamación y suprime la respuesta inmune.",
                "usos": [
                    "Enfermedades autoinmunitarias",
                    "reacciones alérgicas severas",
                    "y trastornos inflamatorios"
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "compatible",
                "administracion": "con alimentos(excepto los mencionados)",
                "reaccionesAdversas": "Aumento de peso, insomnio, cambios de humor, hipertensión.",
                "mecanismoHepatico": "Se metaboliza ampliamente en el hígado. Precaución en pacientes con insuficiencia hepática, es necesario ajustar la dosis para disminuir el riesgo de efectos adversos y toxicidad. Evitar el uso prolongado en estos pacientes, ya que se incrementa el riesgo de retención de sodio, edema y otros efectos secundarios asociados a los corticosteroides.",
                "mecanismoRenal": "Sus metabolitos se eliminan por vía renal. Precaución en pacientes con insuficiencia renal, es necesario ajustar la dosis para disminuir el riesgo de efectos adversos y toxicidad. Evitar el uso prolongado en estos pacientes, ya que se incrementa el riesgo de retención de sodio, edema y otros efectos secundarios asociados a los corticosteroides.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibición CYP3A4 Incremento de la concentracion del farmaco en organismo"
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Riesgo de sufrir ulceraciones"
                    },
                    {
                        "nombreInteraccion": "Regaliz natural",
                        "mecanismo": "Potencia el efecto del fármaco exacerbando potencialmente los efectos secundarios."
                    },
                    {
                        "nombreInteraccion": "Potasio",
                        "mecanismo": "La metilprednisona puede causar péridas de potasio llevando a una disminución de los niveles en sangre."
                    },
                    {
                        "nombreInteraccion": "Carbohidratos y azúcares",
                        "mecanismo": "La metilprednisona puede causar incremento de los niveles de azúcar en sangre, especialmente en personas con diabetes o riesgo de diabetes."
                    },
                    {
                        "nombreInteraccion": "Calcio",
                        "mecanismo": "El consumo de metilpredniosa a largo plazo puede causar déficit en la absorción de calcio y riesgo aumentando de osteoporosis."
                    }
                ]
            },
            {
                "id": 50,
                "grupo": "Hormonales Sistémicos",
                "tipo": "Corticoides",
                "nombreGenerico": "Budesonida",
                "nombresComerciales": [
                    "Pulmicort",
                    "Entocort"
                ],
                "presentacion": "inhalador 0.5 mg, cápsulas 3 mg, comprimidos 9 mg",
                "mecanismoAccion": "Glucocorticoide que actúa localmente para reducir la inflamación en las vías respiratorias o el tracto gastrointestinal.",
                "usos": [
                    "Asma",
                    "enfermedad pulmonar obstructiva crónica (EPOC)",
                    "y enfermedad inflamatoria intestinal"
                ],
                "embarazo": "Compatible  Categoría B",
                "lactancia": "compatible",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Candidiasis oral, tos, irritación de garganta, efectos sistémicos en dosis altas.",
                "mecanismoHepatico": "Se metaboliza extensamente en el hígado principalmente por la enzima CYP3A4 para formar sus metabolitos. Precaución en pacientes con insuficiencia hepática grave donde su metabolismo puede verse reducido aumentando la exposición al fármaco.",
                "mecanismoRenal": "Se excreta for la orina y heces en forma de los metabolitos. No es necesario ajuste de dosis en pacientes con insuficiencia renal.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede aumentar los niveles del farmaco en sangre, puesto que el pomelo inhibe el citocromo P450 especificamente la enzima CYP3A4 la cual es responsible del metabolismo del farmaco."
                    },
                    {
                        "nombreInteraccion": "Calcio",
                        "mecanismo": "El uso a largo plazo de corticoides puede llevar a pérdida de la densidad ósea, por este motivo es necesario garantizar un consumo adecuado de calcio y vitamina D."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "El alcohol puede irritar el sistema gastrointestinal y empeorar los efectos adversos del fármaco."
                    }
                ]
            },
            {
                "id": 51,
                "grupo": "Antidepresivos",
                "tipo": "Antidepresivos tricícilos",
                "nombreGenerico": "Clomipramina",
                "nombresComerciales": [
                    "anafranil"
                ],
                "presentacion": "comprimido recubierto con película/liberación prolongada 10mg, 25mg, 75mg, solución inyectable 25mg/2ml",
                "mecanismoAccion": "inhibición de la recaptación neuronal de noradrenalina y serotonina liberadas en la hendidura sináptica",
                "usos": [
                    "depresión",
                    "síndromes obsesivos",
                    "fobias",
                    "crisis de angustia"
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "compatible",
                "administracion": "con comida",
                "reaccionesAdversas": "mareos, fatiga, cansancio, aumento de apetito, confusión, alucinaciones, estados de ansiedad, manía, despersonalización, aumento de peso, galactorrea, náuseas, vómitos, dolor abdominal, diarrea",
                "mecanismoHepatico": "Se metaboliza en el hígado por las enzimas CYP2D6 y CYP1A2, con la formación de metabolitos activos. Precaución en pacientes con disfunción hepática, puesto que existe un aumento en el riesgo de toxicidad.",
                "mecanismoRenal": "Los metabolitos se excretan por la orina. Precaución en pacintes con insuficiencia renal.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede inhibir el metabolismo del farmaco por su efecto sobre las enzimas del citocromo P450, especialemente la CYP3A4. Esto puede llevar a un aumento de los niveles del farmaco en sangre aumentando el riesgo de efectos adversos."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en histamina",
                        "mecanismo": "Inhibicion del DAO, acumulacion de histamina."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar los efectos sedativos del farmaco incrementando la somnolencia, mareos y alteración de la coordinación."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Induce la enzima CYP3A4 llevando a menores niveles del farmaco en sangre y reduciendo su efectividad."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en tiramina",
                        "mecanismo": "Puede aumentar la presión arterial o causar otros efectos secundarios."
                    },
                    {
                        "nombreInteraccion": "Fibra",
                        "mecanismo": "Puede disminuir los niveles sericos del farmaco al interferir con su absorcion."
                    }
                ]
            },
            {
                "id": 52,
                "grupo": "Antidepresivos",
                "tipo": "Antidepresivos tricícilos",
                "nombreGenerico": "Doxepina",
                "nombresComerciales": [
                    "sinequan",
                    "silenor"
                ],
                "presentacion": "cápsulas 25mg",
                "mecanismoAccion": "bloquea la recaptación de neurotransmisores por la membrana neuronal",
                "usos": [
                    "trastornos psiconeuróticos",
                    "neurosis con ansiedad",
                    "depresión reactiva",
                    "ansiosa mixta",
                    "psicótica"
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "incompatible",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "sequedad de boca, visión borrosa, estreñimiento, náuseas, malestar",
                "mecanismoHepatico": "Se metaboliza en el hígado por las enzimas CYP2C19 y CYP2D6 donde se convierte en diferentes metabolitos. Precaución en pacientes con insuficiencia hepática, puede haber aumento del riesgo de toxicidad por lo que se recomienda un ajuste de dosis.",
                "mecanismoRenal": "Los metabolitos se excretan por la orina, aunque la excreción renal directa del fármaco inalterado es baja. Precaución en pacientes con insuficiencia renal grave.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede inhibir el metabolismo del farmaco por su efecto sobre las enzimas del citocromo P450, especialemente la CYP3A4. Esto puede llevar a un aumento de los niveles del farmaco en sangre aumentando el riesgo de efectos adversos."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar los efectos sedativos del farmaco incrementando la somnolencia, mareos y alteración de la coordinación."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede aumentar el riesgo de síndrome serotoninérgico."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en histamina",
                        "mecanismo": "Inhibicion del DAO, acumulacion de histamina."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en tiramina",
                        "mecanismo": "Puede aumentar la presión arterial o causar otros efectos secundarios."
                    },
                    {
                        "nombreInteraccion": "Fibra",
                        "mecanismo": "Puede disminuir los niveles sericos del farmaco al interferir con su absorcion."
                    }
                ]
            },
            {
                "id": 53,
                "grupo": "Antidepresivos",
                "tipo": "Antidepresivos tricícilos",
                "nombreGenerico": "Trimipramina",
                "nombresComerciales": [
                    "surmontil"
                ],
                "presentacion": "comprimidos recubiertos con pelicula 25mg",
                "mecanismoAccion": "propiedades anticolinérgicas. Su mecanismo no es bien conocido, pero no inhibe la recaptación de noradrenalina",
                "usos": [
                    "depresiones menores",
                    "ansiedad y alteraciones del sueño"
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "comptabilidad probable",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "pérdida de peso, hipertrofia mamaria, galactorrea, retención urinaria, estreñimiento, taquicardia, mayor riesgo de fracturas óseas en >50 años",
                "mecanismoHepatico": "Se metaboliza en el hígado a través de la enzima CYP2D6 y sus metabolitos tienen también cierta actividad farmacológica. Precaución en pacientes con insuficiencia hepática, se recomienda monitorear y ajustar la dosis.",
                "mecanismoRenal": "Los metabolitos se excretan pornla orina. Precaución en pacientes con insuficiencia renal.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede inhibir el metabolismo del farmaco por su efecto sobre las enzimas del citocromo P450, especialemente la CYP3A4. Esto puede llevar a un aumento de los niveles del farmaco en sangre aumentando el riesgo de efectos adversos."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar los efectos sedativos del farmaco incrementando la somnolencia, mareos y alteración de la coordinación."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede aumentar el riesgo de síndrome serotoninérgico."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en histamina",
                        "mecanismo": "Inhibicion del DAO, acumulacion de histamina."
                    },
                    {
                        "nombreInteraccion": "Fibra",
                        "mecanismo": "Puede disminuir los niveles sericos del farmaco al interferir con su absorcion."
                    }
                ]
            },
            {
                "id": 54,
                "grupo": "Antidepresivos",
                "tipo": "Antidepresivos tricícilos",
                "nombreGenerico": "Desipramina",
                "nombresComerciales": [
                    "norpramin",
                    "pertofrane"
                ],
                "presentacion": "tableta 10mg, 25mg, 50mg, 75mg, 100mg, 150mg",
                "mecanismoAccion": "inhibe la recaptación de norepinefrina",
                "usos": [
                    "depresión mayor",
                    "enfermedad de Parkinson",
                    "ansiedad",
                    "tto de dolor severo",
                    "tto de deshabituación a la cocaína"
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "compatible",
                "administracion": "con comida",
                "reaccionesAdversas": "somnolencia, visión borrosa, constipación, aumento del apetito, aumento de peso, náusea, debilidad, cefalea",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a través del citocromo P450 (CYP2D6). Produce metabolitos activos y está sujeto a variabilidad genética. Precacución en pacientes con insuficiencia hepática, se recomienda ajustar la dosis y monitorizar los niveles plasmáticos.",
                "mecanismoRenal": "Cerca del 70% se excreta en la orina. Precaución en pacientes con insuficiencia renal.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede inhibir el metabolismo del farmaco por su efecto sobre las enzimas del citocromo P450, especialemente la CYP3A4. Esto puede llevar a un aumento de los niveles del farmaco en sangre aumentando el riesgo de efectos adversos."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar los efectos sedativos del farmaco incrementando la somnolencia, mareos y alteración de la coordinación."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede aumentar el riesgo de síndrome serotoninérgico."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en histamina",
                        "mecanismo": "Inhibicion del DAO, acumulacion de histamina."
                    },
                    {
                        "nombreInteraccion": "Fibra",
                        "mecanismo": "Puede disminuir los niveles sericos del farmaco al interferir con su absorcion."
                    }
                ]
            },
            {
                "id": 55,
                "grupo": "Antidepresivos",
                "tipo": "Antidepresivos tricícilos",
                "nombreGenerico": "Amitriptilina",
                "nombresComerciales": [
                    "anapsique",
                    "tryptanol"
                ],
                "presentacion": "comprimido recubierto con pelicula 10mg, 25mg",
                "mecanismoAccion": "evita la recaptación y la inactivación de noradrenalina y serotonina en las terminaciones nerviosas",
                "usos": [
                    "trastorno depresivo mayor"
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "compatible",
                "administracion": "con comida",
                "reaccionesAdversas": "agresión, estado de confusión, agitación, mareo, letargia, taquicardia, estreñimiento, náuseas, trastornos urinarios, aumento de peso, sensación de sed",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado donde se convierte en su metabolito activo a través del citocromo P450. Precaución en pacientes con insuficiencia hepática, la dosis debe ser ajustada para evitar toxicidad.",
                "mecanismoRenal": "Su excreción es principalmente renal como metabolitos inactivos. Precaución en pacientes con insuficiencia renal.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Fibra",
                        "mecanismo": "Descenso de los niveles séricos del medicamento."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en histamina",
                        "mecanismo": "Inhibicion del DAO, acumulacion de histamina."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Potencian el efecto depresor sobre el sistema nervioso central."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede llevar a una disminución de los niveles plasmáticos del fármaco y sus metabolitos."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede inhibir el metabolismo del farmaco por su efecto sobre las enzimas del citocromo P450, especialemente la CYP2D6. Esto puede llevar a un aumento de los niveles del farmaco en sangre aumentando el riesgo de efectos adversos."
                    }
                ]
            },
            {
                "id": 56,
                "grupo": "Antidepresivos",
                "tipo": "IRSN",
                "nombreGenerico": "Desvenlafaxina",
                "nombresComerciales": [
                    "fapris",
                    "pristiq"
                ],
                "presentacion": "comprimido de liberación prolongada 50mg, 100mg",
                "mecanismoAccion": "inhibidor selectivo de la recaptación de serotonina y noradrenalina",
                "usos": [
                    "trastorno depresivo mayor"
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "compatible",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "taquicardia, palpitaciones, náuseas, estreñimiento, vómito, diarrea, fatiga , HTA, aumento de peso, pérdida de peso, pérdida de apetito",
                "mecanismoHepatico": "Tiene un metabolismo hepático limitado y no sufre una biotransformación extensa. Precaución en casos severos de insuficiencia hepática.",
                "mecanismoRenal": "Cerca del 45% del fármaco se excreta inalterado por la orina y otro 19% como metabolitos. Precaución en pacientes con insuficiencia renal, puesto que puede haber acumulación del medicamento.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar el riesgo de efectos adversos serios y empeorar la depresión y ansiedad."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en triptófano",
                        "mecanismo": "Pueden aumentar el riesgo de síndrome serotoninérigco en combinación con el fármaco."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede aumentar el riesgo de síndrome serotoninérgico."
                    }
                ]
            },
            {
                "id": 57,
                "grupo": "Antidepresivos",
                "tipo": "IRSN",
                "nombreGenerico": "Duloxetina",
                "nombresComerciales": [
                    "cymbalta",
                    "duceten",
                    "duxetina",
                    "inmox",
                    "realta"
                ],
                "presentacion": "cápsula dura gastrorresistente 30mg, 60mg",
                "mecanismoAccion": "inhibidor de la recaptación de serotonina y noradrenalina",
                "usos": [
                    "episodios depresivos mayores",
                    "trastorno de ansiedad generalizada",
                    "dolor neuropático periférico diabético"
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "compatible",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "cefaela, somnolencia, disminución del apetito, agitación, ansiedad, estreñimiento, diarrea, dolor abdominal, vómitos, dispepsia, flatulencia",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a través de las enzimas CYP1A2 y CYP2D6. Precaución en pacientes con insuficiencia hepática severa quienes presentan una capacidad disminuida para metabolizar el fármaco. El uso de duloxetina está asociado con un riesgo de daño hepático, especialmente en pacientes con antecedentes de enfermedad hepática o abuso de alcohol.",
                "mecanismoRenal": "Aproximadamente el 70% del fármaco se excreta por la orina en forma de metabolitos y el 20% a través de las heces. Precaución en pacientes con insuficiencia renal severa (FG <30ml/min), se requiere de ajuste de dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar el riesgo de daño hepático."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede aumentar el riesgo de síndrome serotoninérgico."
                    },
                    {
                        "nombreInteraccion": "Ginkgo biloba y omega-3",
                        "mecanismo": "El gingko biloba puede aumentar el riesgo de sindrome serotoninergico y los omega-3 en altas cantidades puede aumentar el riesgo de sangrado."
                    }
                ]
            },
            {
                "id": 58,
                "grupo": "Antidepresivos",
                "tipo": "IRSN",
                "nombreGenerico": "Venlafaxina",
                "nombresComerciales": [
                    "adefaxin",
                    "ansifix",
                    "efexor",
                    "limefax",
                    "oxialpress",
                    "sesaren xr",
                    "valax sr",
                    "veniz sr",
                    "venlax xr"
                ],
                "presentacion": "comprimido de liberación prolongada 37,5mg, 75mg, 150mg",
                "mecanismoAccion": "inhibidor de la recaptación de serotonina y noradrenalina. Inhibe debilmente la recaptación de dopamina",
                "usos": [
                    "depresión mayor",
                    "trastorno de ansiedad generalizada",
                    "trastorno de pánico"
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "compatible",
                "administracion": "con comida",
                "reaccionesAdversas": "HTA, vasodilatación, disminución del apetito, estreñimiento, náuseas, vómitos, dispepsia, hipercolesterolemia, pérdida de peso, temblor, confusión",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado por la enzima CYP2D6 a su metabolito activo. Precaución en pacientes con insuficiencia hepâtica, ya que la capacidad de metabolizar el fármaco está disminuida.",
                "mecanismoRenal": "El fármaco y su metabolito activo se eliminan por vía renal. Cerca del 87% de la dosis se excreta en la orina como fármaco inalterado y metabolitos. Precaución en pacientes con insuficiencia renal moderada a severa, se requiere un ajuste de dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar el riesgo de efectos adversos serios y empeorar la depresión y ansiedad."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede aumentar el riesgo de síndrome serotoninérgico."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede aumentar los niveles del farmaco en sangre, puesto que el pomelo inhibe el citocromo P450 especificamente la enzima CYP2D6 la cual es responsible del metabolismo del farmaco."
                    }
                ]
            },
            {
                "id": 59,
                "grupo": "Antidepresivos",
                "tipo": "IRSR",
                "nombreGenerico": "Fluoxetina",
                "nombresComerciales": [
                    "fluoxac",
                    "prozac",
                    "actan",
                    "dominium",
                    "fluoxetichem",
                    "neupax",
                    "salipax"
                ],
                "presentacion": "comprimido/recubierto con pelicula, cápsula dura 20mg",
                "mecanismoAccion": "Aumenta los niveles de serotonina en el cerebro",
                "usos": [
                    "Trastorno obsesivo-compulsivo",
                    "trastornos de ansiedad",
                    "trastorno de estrés postraumático."
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "compatibilidad probable",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Náuseas, somnolencia, insomnio, sequedad bucal, disfunción sexual.",
                "mecanismoHepatico": "Se metaboliza extensamente en el hígado por el citocromo P450, principalmente la enzima CYP2D6 a su metabolito activo. Precaución en pacientes con insuficiencia hepática, se recomienda ajustes de dosis.",
                "mecanismoRenal": "La eliminacion es principalmente renal. Sus metabolitos se eliminan lentamente y la excreciooo4n renal del farmaco inalterado es minima. Precaución en pacientes con insuficiencia renal grave.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibe el CYP450 aumentando la concentracion del farmaco."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en triptófano",
                        "mecanismo": "Lácteos, huevos, plátano, frutos secos, cereales y semillas. Pueden potenciar el síndrome serotoninérgico."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Potencia el síndrome serotoninérgico."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Potencia el efecto supresor sobre el SNC y aumentar los efectos sedativos del fármaco."
                    }
                ]
            },
            {
                "id": 60,
                "grupo": "Antidepresivos",
                "tipo": "IRSR",
                "nombreGenerico": "Fluvoxamina",
                "nombresComerciales": [
                    "Luvox",
                    "Luvox CR"
                ],
                "presentacion": "comprimido recubierto con pelicula/liberación prolongada 50 mg, 100 mg",
                "mecanismoAccion": ": Inhibidor selectivo de la recaptación de serotonina (ISRS) que aumenta la disponibilidad de serotonina en el cerebro.",
                "usos": [
                    "Trastorno obsesivo-compulsivo",
                    "trastornos de ansiedad",
                    "trastorno de estrés postraumático."
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "compatible",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Náuseas, somnolencia, insomnio, sequedad bucal, disfunción sexual.",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado, a través de las enzimas del citocromo P450, especialmente CYP1A2 y CYP2D6. Inhibe en gran medida el CYP1A2 y moderadamente el CYP2C19 y CYP3A4. Precaución en pacientes con insuficiencia hepática, ya que el metabolismo puede estar alterado y el riesgo de efectos adversos podría aumentar.",
                "mecanismoRenal": "Los metabolitos se excretan principalmente por la orina. Precaución en pacientes con insuficiencia renal.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibe el CYP1A2 aumentando los niveles del farmaco en sangre."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en tiramina",
                        "mecanismo": "Puede aumentar la presión arterial o causar otros efectos secundarios."
                    },
                    {
                        "nombreInteraccion": "Cafeina",
                        "mecanismo": "La eliminacion de la cafeina del cuerpo se ve afectada por la fluvoxamina lo que lleva a una posible acumulacion con la ingesta regular."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Potencia el efecto supresor sobre el SNC y aumentar los efectos sedativos del fármaco."
                    }
                ]
            },
            {
                "id": 61,
                "grupo": "Antidepresivos",
                "tipo": "IRSR",
                "nombreGenerico": "Sertralina",
                "nombresComerciales": [
                    "Zoloft",
                    "suxlim",
                    "sosser",
                    "sertrex",
                    "serolux",
                    "eleval",
                    "serlift",
                    "conexine",
                    "cimicile",
                    "deprax",
                    "bzoft"
                ],
                "presentacion": "Comprimido/recubierto con pelicula 50mg, 100mg",
                "mecanismoAccion": "ISRS que aumenta los niveles de serotonina en el cerebro, mejorando el estado de ánimo",
                "usos": [
                    "Depresión",
                    "trastornos de ansiedad",
                    "trastorno obsesivo-compulsivo",
                    "trastorno de estrés postraumático."
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "compatible",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Náuseas, diarrea, insomnio, somnolencia, disfunción sexual",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a su forma activa a través del sistema CYP, especialmente por CYP2B6, CYP2C19, y CYP3A4. Precaución en pacientes con insuficiencia hepática, se debe usar una dosis más baja o ajustar el intervalo de dosificación, ya que el metabolismo puede estar comprometido.",
                "mecanismoRenal": "El fármaco y sus metabolitos se eliminan por vía renal. Precaución en pacientes con insuficiencia renal severa.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibe el CYP450 aumentando la concentracion del farmaco."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en triptófano",
                        "mecanismo": "Lácteos, huevos, plátano, frutos secos, cereales y semillas. Pueden potenciar el síndrome serotoninérgico."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Potencia el síndrome serotoninérgico."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Potencia el efecto supresor sobre el SNC y aumentar los efectos sedativos del fármaco."
                    }
                ]
            },
            {
                "id": 62,
                "grupo": "Antidepresivos",
                "tipo": "IRSR",
                "nombreGenerico": "Escitalopram",
                "nombresComerciales": [
                    "Lexapro",
                    "animaxen",
                    "celtium",
                    "e zentius",
                    "ectiban",
                    "erliniz",
                    "ESC",
                    "ipran",
                    "loscital",
                    "pramokline",
                    "relaxetina",
                    "selective",
                    "taloprax"
                ],
                "presentacion": "comprimido recubierto con pelicula 5mg, 10mg, 20mg, solución oral 1mg/1ml",
                "mecanismoAccion": "ISRS que aumenta la serotonina en el cerebro, lo que ayuda a regular el estado de ánimo.",
                "usos": [
                    "Depresión",
                    "trastornos de ansiedad",
                    "trastorno de pánico"
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "compatible",
                "administracion": "con o sin alimentos.",
                "reaccionesAdversas": "Náuseas, insomnio, somnolencia, disfunción sexual, sudoración excesiva.",
                "mecanismoHepatico": "Se metaboliza en el hígado principalmente por las enzimas CYP2C19, CYP2D6, y CYP3A4. La biotransformación genera metabolitos inactivos. Precaución en pacientes con insuficiencia hepática severa, se recomienda una dosis más baja.",
                "mecanismoRenal": "Aproximadamente un 8% del fármaco se elimina inalterado en la orina, y la excreción renal también juega un papel en la eliminación de los metabolitos. Precaución en pacientes mayores o con insuficiencia renal, ya que la depuración podría estar reducida.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Potencia el síndrome serotoninérgico."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Potencia el efecto supresor sobre el SNC y aumentar los efectos sedativos del fármaco."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibe el CYP3A4 aumentando el metabolismo del fármaco."
                    }
                ]
            },
            {
                "id": 63,
                "grupo": "Antidepresivos",
                "tipo": "IRSR",
                "nombreGenerico": "Paroxetina",
                "nombresComerciales": [
                    "Paxil",
                    "Pexeva",
                    "moxetin",
                    "parlift",
                    "paroten",
                    "paxan",
                    "pondera",
                    "posivyl",
                    "traviata",
                    "xerenex"
                ],
                "presentacion": "comprimido/recubierto con pelicula 10mg, 20mg, 15mg, 25mg, 30mg, 40mg, de liberación prolongada 12,5mg, 25mg",
                "mecanismoAccion": "ISRS que aumenta la serotonina en el cerebro, mejorando los síntomas de depresión y ansiedad.",
                "usos": [
                    "Depresión",
                    "trastornos de ansiedad",
                    "trastorno obsesivo-compulsivo",
                    "trastorno de estrés postraumático."
                ],
                "embarazo": "Categoria D",
                "lactancia": "compatible",
                "administracion": "con o sin alimentos, pero se recomienda tomar con alimentos para reducir la irritación gastrointestina",
                "reaccionesAdversas": "Náuseas, somnolencia, insomnio, disfunción sexual, aumento de peso.",
                "mecanismoHepatico": "Se metaboliza extensamente en el hígado, principalmente por la enzima CYP2D6. Precaución en pacientes con insuficiencia hepática, puede existir acumulación del fármaco.",
                "mecanismoRenal": "Se excreta principalmente por vía renal en forma de metabolitos inactivos. Precaución en pacientes con insuficiencia renal, puede existir acumulación del fármaco.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibe el CYP2D6 aumentando los niveles del farmaco en sangre."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Potencia el efecto supresor sobre el SNC y aumentar los efectos sedativos del fármaco."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede reducir la efectividad del farmaco por sus efectos sobre las enzimas hepáticas que lo metabolisan. Además, puede aumentar el riesgo de síndrome serotoninérigoc."
                    }
                ]
            },
            {
                "id": 64,
                "grupo": "Uriscosúricos",
                "tipo": "Antiinflamatorio",
                "nombreGenerico": "Colchicina",
                "nombresComerciales": [
                    "Colcrys",
                    "Mitigare",
                    "artrichine",
                    "colchimedio"
                ],
                "presentacion": "Comprimido 0,5mg",
                "mecanismoAccion": "Inhibe la migración de leucocitos y la inflamación asociada a los cristales de urato, reduciendo el ataque agudo de gota",
                "usos": [
                    "Tratamiento de ataques agudos de gota y profilaxis de ataques recurrentes"
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "compatible",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Náuseas, vómitos, diarrea, dolor abdominal, toxicidad a dosis altas.",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a su forma activa a través del citocromo P450 y la enzima CYP3A4. Está sujeta a recirculación enterohepática y excreción biliar. Precaución en pacientes con insuficiencia hepática, se requiere ajuste de dosis. Vigilar toxicidad.",
                "mecanismoRenal": "Aproximadamente el 40-65% de la dosis se excreta sin cambios por la orina. Precaución en pacientes con insuficiencia renal, se requiere ajuste de dosis. Vigilar toxicidad, el fármaco no es removido eficazmente por hemodiálisis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibe el CYP450 aumentando la concentracion del farmaco."
                    },
                    {
                        "nombreInteraccion": "Vitamina B12",
                        "mecanismo": "El consumo a largo plazo de colchicina puede aumentar el riesgo de desarrollar deficiencia de vitamina B12 debido a que el fármaco puede llevar a síndromes de malabsorción."
                    }
                ]
            },
            {
                "id": 65,
                "grupo": "Uriscosúricos",
                "tipo": "Inhibidor de la xantina oxidasa",
                "nombreGenerico": "Alopurinol",
                "nombresComerciales": [
                    "Zyloprim",
                    "Aloprim",
                    "urosin"
                ],
                "presentacion": "comprimido/recubierto con película 100mg, 300mg",
                "mecanismoAccion": "Inhibidor de la xantina oxidasa, que reduce la producción de ácido úrico.",
                "usos": [
                    "tratamiento de la hiperuricemia y prevención de ataques de gota."
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "compatible",
                "administracion": "con comida",
                "reaccionesAdversas": "Erupciones cutáneas, náuseas, diarrea, aumento de las enzimas hepáticas, reacciones alérgicas",
                "mecanismoHepatico": "Se metaboliza parcialmente en el hígado a su metabolito activo que tiene una vida media más larga. Precaución en pacientes con insuficiencia hepática.",
                "mecanismoRenal": "Gran parte del fármaco y su metabolito activo se eliminan por la vía renal. Precaucion en pacientes con insuficiencia renal, puesto que puede prolongar la vida media del fármaco y su acumulación.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos ricos en purinas",
                        "mecanismo": "Carnes rojas, órganos, mariscos y ciertos pescados (sardinas, anchoas), pueden aumentar los niveles de ácido úrico en el cuerpo contrarrestando los efectos del alopurinol."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "El alcohol, especiamente la cerveza y el licor, pueden aumentar los niveles de ácido úrico en el cuerpo y disminuir la efectividad del fármaco."
                    },
                    {
                        "nombreInteraccion": "Cafeína",
                        "mecanismo": "El consumo excesivo de cafeína puede contribuir potencialmente a la deshidratación lo que puede aumentar el riesgo de brotes de gota."
                    }
                ]
            },
            {
                "id": 66,
                "grupo": "Uriscosúricos",
                "tipo": "Uricosúrico",
                "nombreGenerico": "Probenecid",
                "nombresComerciales": [
                    "Probalan"
                ],
                "presentacion": "Comprimidos 500 mg",
                "mecanismoAccion": "Inhibe la reabsorción de ácido úrico en los túbulos renales, aumentando su excreción.",
                "usos": [
                    "Tratamiento de la gota y la hiperuricemia."
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "compatible",
                "administracion": "con alimentos y bastante líquido",
                "reaccionesAdversas": "Náuseas, erupciones cutáneas, mareos, cálculos renales",
                "mecanismoHepatico": "Se metaboliza mínimamente en el hígado a diversos metabolitos.",
                "mecanismoRenal": "Se elimina principalmente a través de la orina. El fármaco inhibe la reabsorción tubular de ácido úrico y también puede afectar la excreción de otros medicamentos. No se recomienda en pacientes con insuficiencia renal severa, ya que su eficacia disminuye y el riesgo de toxicidad aumenta.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos ricos en purinas",
                        "mecanismo": "Carnes rojas, órganos, mariscos y ciertos pescados (sardinas, anchoas), pueden aumentar los niveles de ácido úrico en el cuerpo contrarrestando los efectos del alopurinol."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "El alcohol, especiamente la cerveza y el licor, pueden aumentar los niveles de ácido úrico en el cuerpo y disminuir la efectividad del fármaco."
                    },
                    {
                        "nombreInteraccion": "Vitamina C",
                        "mecanismo": "La vitamina C puede disminuir los niveles de ácido úrico, sin embargo, altas dosis pueden aumentar el riesgo de cálculos renales."
                    },
                    {
                        "nombreInteraccion": "Cafeína",
                        "mecanismo": "El probenecid puede aumentar el efecto de la cafeína dado que puede afectar como se metaboliza y se excreta en el cuerpo."
                    }
                ]
            },
            {
                "id": 67,
                "grupo": "Uriscosúricos",
                "tipo": "Uricosúrico",
                "nombreGenerico": "Benzbromarona",
                "nombresComerciales": [
                    "Benemid"
                ],
                "presentacion": "Comprimido 100mg",
                "mecanismoAccion": "Inhibe la reabsorción de ácido úrico en los riñones, promoviendo su excreción.",
                "usos": [
                    "Tratamiento de la gota y la hiperuricemia"
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "con precaucion",
                "administracion": "con alimentos para minimizar irritación gástrica",
                "reaccionesAdversas": "Náuseas, vómitos, diarrea, erupciones cutáneas, reacciones alérgicas.",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a través de procesos de oxidación por las enzimas del citocromo P450. Produce metabolitos activos. Precaución en pacientes con insuficiencia hepática por riesgo de toxicidad.",
                "mecanismoRenal": "Su excresión es mayormente biliar o por heces, con una baja proporción excretada por la vía renal. Precaución en pacientes con insuficiencia renal.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "El alcohol, especiamente la cerveza y el licor, pueden aumentar los niveles de ácido úrico en el cuerpo y disminuir la efectividad del fármaco."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en purinas",
                        "mecanismo": "Carnes rojas, órganos, mariscos y ciertos pescados (sardinas, anchoas), pueden aumentar los niveles de ácido úrico en el cuerpo contrarrestando los efectos del alopurinol."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibe el CYP3A4 aumentando los niveles del farmaco en sangre."
                    }
                ]
            },
            {
                "id": 68,
                "grupo": "Sistema Gastrointestinal",
                "tipo": "Antagonista receptores H2",
                "nombreGenerico": "Ranitidina",
                "nombresComerciales": [
                    "alquen",
                    "aldoral",
                    "leiracid",
                    "ranidin",
                    "ranuber",
                    "tanidina",
                    "terposen",
                    "zantac"
                ],
                "presentacion": "comprimido/recubierto con pelicula 75mg, 150mg, 300mg, solución inyectable 10mg/ml",
                "mecanismoAccion": "antagonista de receptores H2 de la histamina de las células parietales del estómago. Inhibe la secreción de ácido gástrico y reduce la producción de pepsina",
                "usos": [
                    "úlcera duodenal",
                    "úlcera gástrica benigna",
                    "esofagitis péptica",
                    "reflujo gastroesofágico"
                ],
                "embarazo": "Compatible (categoria B)",
                "lactancia": "compatibilidad limitada (poco seguro)",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "dolor abdominal, estreñimiento, náuseas",
                "mecanismoHepatico": "Cerca del 73% del fármaco se metaboliza en el hígado al interactuar con el citocromo P450 mediante desmetilación y oxidación. Precaución en pacientes con insuficiencia hepática.",
                "mecanismoRenal": "Se excreta principalmente por vía renal, con alrededor del 30-70% eliminado sin cambios en la orina. Ajustar la dosis en pacientes con insuficiencia renal para evitar la acumulación y toxicidad.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "La ranitidina puede aumentar los niveles de alcohol en sangre al reducir su metabolismo en el estomago."
                    },
                    {
                        "nombreInteraccion": "Cafeína",
                        "mecanismo": "La ranitidina puede aumentar la absorción de cafeína incrementando potencialmente sus efectos estimulantes."
                    },
                    {
                        "nombreInteraccion": "Hierro y vitamina B12",
                        "mecanismo": "El uso a largo plazo de ranitidina puede disminuir la absorción de hierro y vitamina B12."
                    }
                ]
            },
            {
                "id": 69,
                "grupo": "Sistema Gastrointestinal",
                "tipo": "Inhibidor de la bomba de protones",
                "nombreGenerico": "Omeprazol",
                "nombresComerciales": [
                    "arapride",
                    "aulcer",
                    "belmazol",
                    "dolintol. gastrimut",
                    "improzol",
                    "losec",
                    "nuclosina",
                    "omapren",
                    "omekaste",
                    "omeprotect",
                    "omereflux",
                    "parizac",
                    "pepticum",
                    "ulceral",
                    "ulcesep"
                ],
                "presentacion": "cápsula dura gastrorresistente 10mg, 20mg, 40mg, polvo para solución para perfusión 40mg",
                "mecanismoAccion": "inhibidor de la bomba de protones",
                "usos": [
                    "úlcera duodenal",
                    "gástrica. Tto H.pylori",
                    "esofagitis por reglujo",
                    "ERGE sintomática",
                    "S. Zollinger-Ellison"
                ],
                "embarazo": "con precaución (Categoria C)",
                "lactancia": "compatible",
                "administracion": "30-60 minutos antes del desayuno",
                "reaccionesAdversas": "cefalea, dolor abdominal, estreñimiento, diarrea, flatulencia, nauseas/vómitos",
                "mecanismoHepatico": "Se metaboliza extensamente en el hígado a través del citocromo P450 y sus enzimas CYP2C19 y CYP3A4. Precaución en pacientes con insuficiencia hepática por aumento en el riesgo de acumulación y efectos adversos, se debe ajustar la dosis.",
                "mecanismoRenal": "Cerca del 80% de los metabolitos se eliminan por la orina y el resto por las heces. En pacientes con insuficiencia renal se relantiza la eliminación de los metabolitos del fa2rmaco, sin embargo, no se considera clinicamente significativo.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "El alcohol puede irritar el estomago y empeorar los sintomas de reflujo gastrico."
                    },
                    {
                        "nombreInteraccion": "Cafeína y alimentos ácidos",
                        "mecanismo": "Las bebidas con cafeina y alimentos acidos pueden aumentar el acido del estomago y empeoran los sintomas de reflujo gastrico."
                    },
                    {
                        "nombreInteraccion": "Calcio, magnesio y vitamina B12",
                        "mecanismo": "El uso prolongado de omeprazol puede reducir la absorción de calcio, magnesio y vitamina B12."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan y Gingko Biloba",
                        "mecanismo": "Pueden disminuir la efectividad del omeprazol al aumentar su metabolismo."
                    },
                    {
                        "nombreInteraccion": "Jugo de Arándano",
                        "mecanismo": "Aumenta el efecto del omeprazol, se recomienda consumirlos conjuntamente."
                    }
                ]
            },
            {
                "id": 70,
                "grupo": "Sistema Gastrointestinal",
                "tipo": "Inhibidor de la lipasa gastrointestinal",
                "nombreGenerico": "Orlistat",
                "nombresComerciales": [
                    "adelex",
                    "disgrasil",
                    "lysthin",
                    "sideleg",
                    "siluestat",
                    "symfona",
                    "viplena",
                    "xenical",
                    "xerogras"
                ],
                "presentacion": "cápsula dura 60mg, 120mg",
                "mecanismoAccion": "inhibidor de larga acción de lipasas gastrointestinales",
                "usos": [
                    "Tto de obesidad o sobrepeso con factores de riesgo asociados"
                ],
                "embarazo": "Contraindicado (categoría X)",
                "lactancia": "compatibilidad probable (bastante seguro)",
                "administracion": "con comida o hasta 1h después de la comida",
                "reaccionesAdversas": "dolor/molestia abdominal o rectal, distensión abdominal, flatulencia, flatulencia con descarga fecal, incontinencia fecal, urgencia fecal, heces grasas/oleosas, hipoglucemia, ansiedad",
                "mecanismoHepatico": "No se absorbe en gran medida a nivel sistémico, ya que actúa principalmente en el lumen intestinal. Una pequeña fracción del fármaco absorbido se metaboliza en el hígado por hidrólisis. Se recomienda monitorear la función hepática en pacientes con antecedentes de enfermedad hepática.",
                "mecanismoRenal": "La excreción es principalmente por heces (97%) y menos del 2% se excreta por la orina. El fármaco puede aumentar los niveles de oxalato en la orina, lo que en casos raros puede llevar a nefropatía por oxalato. Se debe tener precaución en pacientes con enfermedad renal crónica.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Comidas altas en grasa",
                        "mecanismo": "El consumo de comidas altas en grasa en conjunto con orlistat pueden llevar a efectos secundarios gastrointestinales no placenteros."
                    },
                    {
                        "nombreInteraccion": "Vitaminas liposolubles (ADEK) y betacaroteno",
                        "mecanismo": "El orlistat puede reducir la absorción de vitaminas liposolubles y betacaroteno."
                    },
                    {
                        "nombreInteraccion": "Omega-3",
                        "mecanismo": "Los ácidos grasos omega-3 pueden reducir la absorción del fármaco."
                    }
                ]
            },
            {
                "id": 71,
                "grupo": "Sistema Gastrointestinal",
                "tipo": "Antiinflamatorio intestinal",
                "nombreGenerico": "Mesalazina",
                "nombresComerciales": [
                    "mecolzine",
                    "pentasa",
                    "salofalk",
                    "suprimal"
                ],
                "presentacion": "comprimido gastrorresistente/recubierto 500mg, supositorio 500mg, 1000mg, suspensión rectal 4g/60ml, granulado de liberación prolongada 1g, 2,g",
                "mecanismoAccion": "inhibe la sínteesis de prostaglandinas y leucotrienos quimiotácticos",
                "usos": [
                    "fase aguda de colitis ulcerosa leve/moderada",
                    "enfermedad de Crohn",
                    "enfermedades inflamatorias del intestino"
                ],
                "embarazo": "Compatible (categoria B)",
                "lactancia": "compatible",
                "administracion": "con o sin comida",
                "reaccionesAdversas": "diarrea, dolor abdominal, náuseas, vómitos, flatulencia, tenesmo, prurito, cambios en los parámetros de función hepática y enzimas pancreáticas",
                "mecanismoHepatico": "Se metaboliza principalmente en la mucosa intestinal y, en menor medida, en el hígado para formar un metabolito inactivo. Es necesario monitorear la función hepática en pacientes con insuficiencia hepática. La administración debe realizarse con precaución.",
                "mecanismoRenal": "La excrecion renal del farmaco y sus metabolitos corresponden a una porcion significativa de la dosis absorbida.  Puede causar nefrotoxicidad, especialmente nefritis intersticial aguda. Es fundamental monitorear la función renal antes y durante el tratamiento, especialmente en pacientes con antecedentes de insuficiencia renal.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Suplementos de calcio y hierro",
                        "mecanismo": "Los suplementos de hierro y altas dosis de calcio pueden interferir con la absorción del fármaco y reducir su efectividad."
                    },
                    {
                        "nombreInteraccion": "Aloe Vera y Cúrcuma",
                        "mecanismo": "El aloe vera y la cúrcuma tienen propiedades antiinflamatorias o efectos inmunomoduladores lo que puede amplofocar o contrarrestar los efectos del fármaco."
                    },
                    {
                        "nombreInteraccion": "Plantago Ovata",
                        "mecanismo": "Produce butirato a través de la fermentación colónica lo que ayuda en las propiedades antiinflamatorias del fármaco. Se recomienda la toma conjunta."
                    }
                ]
            },
            {
                "id": 72,
                "grupo": "Sistema Gastrointestinal",
                "tipo": "Antagonista receptores H2",
                "nombreGenerico": "Cimetidina",
                "nombresComerciales": [
                    "cimetin"
                ],
                "presentacion": "comprimido recubierto con pelicula 400mg",
                "mecanismoAccion": "antagonista de receptores H2 de la histamina de las células parietales del estómago. Inhibe la secreción ácida basal y reduce la producción de pepsina.",
                "usos": [
                    "úlcera gástrica y duodenal",
                    "Tto sintomático del reflujo gastroesofágico",
                    "S. Zollinger-Ellison",
                    "insuficiencia pancreática",
                    "Ttod de lesions por AINES"
                ],
                "embarazo": "Compatible (categoria B)",
                "lactancia": "compatibilidad probable (bastante seguro)",
                "administracion": "con comida. Para profilaxis tomar 30-60 min antes de comer",
                "reaccionesAdversas": "cefalea, mareo, diarrea, erupciones cutáneas, mialgia, cansancio",
                "mecanismoHepatico": "Cerca del 60% de la dosis oral se metaboliza en el hígado a través del citocromo P450. La cimetidina puede inhibir el metabolismo de otros medicamentos al interferir con el sistema del citocromo P450, lo que puede aumentar las concentraciones de medicamentos que se metabolizan por esta vía. Debe utilizarse con precaución en pacientes con insuficiencia hepática.",
                "mecanismoRenal": "Aproximadamente el 60-70% de la dosis se excreta sin cambios en la orina, y el resto se excreta como metabolitos. Precaución en pacientes con insuficiencia renal, ya que el fármaco puede acumularse y causar efectos secundarios.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "La cimetidina puede retrasar el metabolismo del alcohol aumentando sus niveles en sangre e intensificando sus efectos."
                    },
                    {
                        "nombreInteraccion": "Cafeína",
                        "mecanismo": "La cimetidina puede reducir la excresión de la cafeína del cuerpo aumentando potencialmente sus niveles en sangre."
                    },
                    {
                        "nombreInteraccion": "Vitamina B12",
                        "mecanismo": "El uso a largo plazo de cimetidina puede reducir los niveles acidicos del estomado lo que puede afectar la absorcion de vitamina B12."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en hierro",
                        "mecanismo": "La cimetidina puede reducir la absorción del hierro no-hemo encontrado principalemente en alimentos no animales."
                    },
                    {
                        "nombreInteraccion": "Goma Guar",
                        "mecanismo": "Puede causar un descenso en las concentraciones de cimetidina lo que afecta la efectividad del fármaco."
                    }
                ]
            },
            {
                "id": 73,
                "grupo": "Sistema Gastrointestinal",
                "tipo": "Agente protector de la mucosa gástrica",
                "nombreGenerico": "Sucralfato",
                "nombresComerciales": [
                    "Carafate",
                    "alsucral",
                    "ciprid",
                    "DIP",
                    "gastril",
                    "sucral",
                    "yastrep"
                ],
                "presentacion": "tabletas 1 g, comprimido masticable 1g, 500mg, polvo para suspensión oral 1g, suspensió oral 20%, 200mg/ml, 1g/5ml",
                "mecanismoAccion": "Forma una barrera protectora sobre las lesiones y úlceras en la mucosa gastrointestinal, protegiendo contra el ácido y la pepsina.",
                "usos": [
                    "Tratamiento y prevención de úlceras gástricas y duodenales",
                    "y esofagitis por reflujo."
                ],
                "embarazo": "Compatible Categoría B",
                "lactancia": "compatible",
                "administracion": "Estómago vacío, 1 antes de las comidas o 2h después",
                "reaccionesAdversas": "Estreñimiento, sequedad bucal, náuseas, malestar gastrointestinal.",
                "mecanismoHepatico": "No se metaboliza ampliamente por el hígado, ya que es principalmente una sustancia de acción local en el tracto gastrointestinal.",
                "mecanismoRenal": "La eliminación se realiza principalmente por excreción fecal, mientras que el aluminio absorbido se elimina a través de los riñones. Debido a la presencia de aluminio en el sucralfato, hay riesgo de acumulación de aluminio y toxicidad en pacientes con insuficiencia renal crónica. Es posible que sea necesario evitar el uso o ajustar las dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Lácteos",
                        "mecanismo": "El calcio de los lácteos puede unirse al sucralfato reduciendo su efectividad."
                    },
                    {
                        "nombreInteraccion": "Suplementos de hierro",
                        "mecanismo": "El hierro puede unirse al sucralfato y reducir la absorcion de los dos."
                    },
                    {
                        "nombreInteraccion": "Alimentos acidos",
                        "mecanismo": "El consumo de alimentos ácidos o cítricos puede irritar el estómago y contrarrestar el efecto del fármaco."
                    }
                ]
            },
            {
                "id": 74,
                "grupo": "Sistema Gastrointestinal",
                "tipo": "Antagonista de los receptores de serotonina 5-HT3",
                "nombreGenerico": "Ondansetron",
                "nombresComerciales": [
                    "Zofran",
                    "alencar",
                    "antivon",
                    "bryterol",
                    "modifical",
                    "oncoemet",
                    "vonau flash"
                ],
                "presentacion": "comprimido/recubierto con pelicula, cápsula dura 8mg, 4mg, solución inyectable 8mg/4ml, 4mg/2ml, 8mg/4ml",
                "mecanismoAccion": "Antagonista de los receptores de serotonina 5-HT3 que previene la náusea y el vómito.",
                "usos": [
                    "Prevención de náuseas y vómitos inducidos por quimioterapia",
                    "radioterapia y cirugía."
                ],
                "embarazo": "Compatible Categoría B",
                "lactancia": "compatible",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Cefalea, estreñimiento, mareos, fatiga",
                "mecanismoHepatico": "Se metaboliza extensamente en el hígado (95%), principalmente por las enzimas del citocromo P450 (CYP3A4, CYP2D6 y CYP1A2). En pacientes con insuficiencia hepática grave, la depuración se reduce significativamente, lo que puede requerir ajustes en la dosificación (no superar los 8 mg/día).",
                "mecanismoRenal": "Solo una pequeña fracción del medicamento se excreta sin cambios en la orina. Precaución en casos de insuficiencia renal severa.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "El alcohol puede aumentar los efectos sedativos del fármaco llevando a mayores mareos o somnolencia."
                    },
                    {
                        "nombreInteraccion": "Desbalances electrolíticos",
                        "mecanismo": "El ondansetron puede aumentar el riesgo de desarrollar ritmos cardiacos anormales, particularmente en personas con niveles disminuidos de potasio y magnesio."
                    }
                ]
            },
            {
                "id": 75,
                "grupo": "Sistema Gastrointestinal",
                "tipo": "Ortopramidas",
                "nombreGenerico": "Metoclopramida",
                "nombresComerciales": [
                    "Reglan",
                    "clopan",
                    "digescona plus",
                    "meclonir",
                    "metoclox",
                    "primperan"
                ],
                "presentacion": "comprimido/recubierto con pelicula 10mg, 10mg+400mg, 10mg+200mg cápsula dura 5mg + 800mg, solución inyectable 10mg/2ml, gotas orales en solución 2,6gmg/ml, 4mg/ml",
                "mecanismoAccion": "Antagonista de los receptores de dopamina que también actúa como un procinético, aumentando la motilidad gastrointestinal",
                "usos": [
                    "Tratamiento de náuseas y vómitos",
                    "gastroparesia",
                    "reflujo gastroesofágico."
                ],
                "embarazo": "Compatible (categoria B)",
                "lactancia": "compatible",
                "administracion": "30 min antes de las comidas",
                "reaccionesAdversas": "Somnolencia, fatiga, diarrea, síntomas extrapiramidales (en dosis altas).",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a través de reacciones de conjugación y oxidación formando metabolitos. En pacientes con insuficiencia hepática, la eliminación del fármaco puede estar comprometida, y las dosis deben ajustarse en consecuencia.",
                "mecanismoRenal": "Aproximadamente el 85% de una dosis se elimina en la orina, principalmente como fármaco sin cambios o metabolitos. Se debe reducir la dosis en pacientes con insuficiencia renal para evitar la acumulación y los efectos adversos.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede aumentar los efectos sedativos del farmaco incrementando la somnolencia, mareos y alteración de la coordinación."
                    }
                ]
            },
            {
                "id": 76,
                "grupo": "Analgésicos y sistema musculoesquelético",
                "tipo": "Opioides",
                "nombreGenerico": "Oxicodona",
                "nombresComerciales": [
                    "Endol SR",
                    "oxicalmans",
                    "oxidona procaps",
                    "oxycontin",
                    "oxyrapid"
                ],
                "presentacion": "comprimido de liberación prolongada 5mg, 10mg, 20mg, 40mg",
                "mecanismoAccion": "Agonista puro opioide con afinidad por receptores opiáceos µ, kappa y delta, con efecto analgésico, ansiolítico y sedante.",
                "usos": [
                    "Dolor intenso"
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "compatibilidad limitada (poco seguro)",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Disminución del apetito, sueños anormales, ansiedad, depresión, estreñimiento, vómitos, dolor absominal, diarrea, dispepsia",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado por el citocromo P450, específicamente CYP3A4 y CYP2D6. En pacientes con insuficiencia hepática, el metabolismo de la oxicodona se ralentiza, aumentando la concentración del fármaco en el cuerpo y el riesgo de efectos adversos, como sedación excesiva y depresión respiratoria. Se recomiendan ajustes de dosis iniciales y monitoreo.",
                "mecanismoRenal": "El fármaco y sus metabolitos se eliminan por vía renal. Aproximadamente el 19% del fármaco se excreta en la orina como oxicodona sin cambios, mientras que el resto se excreta en forma de metabolitos. Precaución en pacientes con insuficiencia renal, puede haber un aumento de la duración del fármaco y potenciación de sus efectos. Se recomienda reducir la dosis y ajustar intervalos estre dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos ricos en grasas",
                        "mecanismo": "Aumenta la absorción del fármaco. Espaciar su toma."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Aumento de los efectos del fármaco sobre el SNC."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibición del CYP3A4 aumentando la concentración plasmática del fármaco."
                    },
                    {
                        "nombreInteraccion": "Cafeina",
                        "mecanismo": "Puede antagonizar parcialmente los efectos sedantes del fármaco."
                    }
                ]
            },
            {
                "id": 77,
                "grupo": "Analgésicos y sistema musculoesquelético",
                "tipo": "Opioides",
                "nombreGenerico": "Morfina",
                "nombresComerciales": [
                    "M Eslon"
                ],
                "presentacion": "cápsula de liberación prolongada 10mg, 30mg, 60mg, solución inyectable 10mg/1ml, 20mg/1ml, 100mg/5ml, 20mg/2ml, 40mg/2ml, 50mg/5ml",
                "mecanismoAccion": "Analgésico agonista de los receptores opiáceos µ, y en menor grado los kappa, en el SNC.",
                "usos": [
                    "Dolor intenso",
                    "dolor postoperatorio inmediato",
                    "dolor crónico maligno",
                    "dolor asociado a infarto de miocardio"
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "compatibilidad probable (bastante seguro)",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Confusión, contracciones musculares involuntarias, dolor abdominal, anorexia, estreñimiento, dispepsia, nausea, vómitos",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado por la enzima UDP-glucuronosiltransferasa (UGT2B7), que convierte la morfina en metabolitos activos. El aclaramiento hepático de la morfina es significativo y representa aproximadamente el 56,8% de su aclaramiento sistémico total. Precaución en pacientes con insuficiencia hepática, el medicamento puede acumularse en el organismo, aumentando el riesgo de efectos secundarios. En estos casos, puede ser necesario ajustar la dosis y realizar un seguimiento clínico cercano para monitorear posibles signos de toxicidad.",
                "mecanismoRenal": "Cerca del 2-12% del fármaco se excreta inalterado por la orina, mientras que sus metabolitos se excretan principalmente por la vía renal. El aclaramiento renal de la morfina y sus metabolitos puede superar el aclaramiento de creatinina, lo que sugiere procesos de secreción activos. Precaución en pacientes con insuficiencia renal, puede haber acumulación dle fármaco y sus metabolitos provocando efectos adversos graves, como sedación excesiva, confusión y depresión respiratoria. Es necesario ajustar la dosis en estos pacientes y, en algunos casos, se pueden preferir otros analgésicos que no dependan de la función renal para su eliminación.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos ricos en grasas",
                        "mecanismo": "Aumenta la absorción del fármaco. Espaciar su toma."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Aumento de los efectos del fármaco sobre el SNC."
                    },
                    {
                        "nombreInteraccion": "Cafeina",
                        "mecanismo": "Puede antagonizar parcialmente los efectos sedantes del fármaco."
                    }
                ]
            },
            {
                "id": 78,
                "grupo": "Analgésicos y sistema musculoesquelético",
                "tipo": "Opioides",
                "nombreGenerico": "Fentanilo",
                "nombresComerciales": [
                    "Fentanest",
                    "fentanex",
                    "fentanyl",
                    "fentax"
                ],
                "presentacion": "Solución inyectable 0,05mg/ml, 0,1mg/2ml, 0,5mg/10ml, 100ug/2ml, 500ug/10ml",
                "mecanismoAccion": "Antagoniosta de los receptores μ-opioides (mu) en el SNC.",
                "usos": [
                    "Analgésico narcótico complementario en anestesia general o local."
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "Compatible",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Depresión respiratoria, náuseas, vómitos, estreñimiento, nerviosismo, pérdida de apetito, dispepsia",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a través del sistema enzimático del citocromo P450, en particular CYP3A4. Su metabolismo en el hígado es significativo, ya que más del 90% del fármaco se biotransforma en metabolitos inactivos. Precaución en pacientes con insuficiencia hepática, puede haber acumulación del fármaco aumentando el riesgo de efectos secundarios. Se recomienda un ajuste de dosis.",
                "mecanismoRenal": "Los metabolitos inactivos  e excretan principalmente a través de los riñones. Un pequeño porcentaje de la droga sin cambios también puede ser excretado por la orina. La insuficiencia renal puede provocar la acumulación de metabolitos.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Aumento de los efectos del fármaco sobre el SNC."
                    },
                    {
                        "nombreInteraccion": "Cafeina",
                        "mecanismo": "Puede antagonizar parcialmente los efectos sedantes del fármaco."
                    },
                    {
                        "nombreInteraccion": "Suplementos y Alimentos con Propiedades Depresoras del Sistema Nervioso Central",
                        "mecanismo": "Valeriana, kava kava, lúpulo. Tienen efectos sedantes que pueden potenciar los efectos depresores del fármaco en el SNC."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en grasas",
                        "mecanismo": "Aumenta la absorción del fármaco. Espaciar su toma."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibición del CYP3A4 aumentando la concentracion de fármaco."
                    }
                ]
            },
            {
                "id": 79,
                "grupo": "Analgésicos y sistema musculoesquelético",
                "tipo": "Analgésico y antipirético",
                "nombreGenerico": "Paracetamol",
                "nombresComerciales": [
                    "Acestar",
                    "acetagen",
                    "acetamin",
                    "acetaminofen",
                    "actifen",
                    "alginox",
                    "analgan",
                    "apyral",
                    "axapara",
                    "bebetina",
                    "beralfen",
                    "cetaflux",
                    "dolmedica",
                    "dolofen",
                    "dolorfin",
                    "dolorol",
                    "feveril",
                    "finalin",
                    "napafen",
                    "panadol",
                    "sodifen",
                    "tempra",
                    "termax",
                    "tylenol",
                    "umbral"
                ],
                "presentacion": "comprimido 325mg, 500g, 750mg, 1g, gotas orales en solución 100mg/ml, jarabe 160mg/5ml, 150mg/5ml, 120mg/5ml,  solución oral 160mg/5ml, comprimido masticable 80mg, 160mg, granulado para suspensión oral 1g, supositorio 300mg, 125mg, solución para perfusión 10mg/ml",
                "mecanismoAccion": "Analgésico y antipirético. Inhibe la síntesis de prostaglandinas en el SNC y bloquea la generación del impulso doloroso a nivel periférico.",
                "usos": [
                    "Fiebre",
                    "dolor de cualquier etiología de intensidad leve o moderado"
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "Compatible",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Malestar, nivel aumentado de transaminasas, hipotensión, hepatotoxicidad, hipoglucemia",
                "mecanismoHepatico": "Se metaboliza en el higado principalmente a través de glucuronidación y sulfatación, y una fracción más pequeña es metabolizada por el sistema enzimático del citocromo P450 para formar un metabolito reactivo. El paracetamol es conocido por su potencial hepatotóxico, especialmente si se toma en dosis altas. En pacientes con insuficiencia hepática, el metabolismo del paracetamol puede alterarse, lo que aumenta el riesgo de daño hepático grave.",
                "mecanismoRenal": "Se excreta principalmente el fármaco y sus metabolitos por vía renal. La depuración renal del paracetamol y sus conjugados está influida por la velocidad del flujo urinario, y se observa una mayor depuración cuanto mayor es la producción de orina. Precaución en pacientes con insuficiencia renal moderada a severa porque la eliminación puede verse comprometida. Ajustar la dosis si es necesario. El paracetamol también puede contribuir a la insuficiencia renal aguda si se consume en dosis excesivas o por un período prolongado, por lo que es fundamental no exceder las dosis recomendadas.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos ricos en hidratos de carbono",
                        "mecanismo": "Retraso de su absorcion por disminucion de la motilidad y el tiempo de vaciado gastrointestinal."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en fibra",
                        "mecanismo": "Retraso del vaciado gástrico y disminución de la absorción del fármaco."
                    },
                    {
                        "nombreInteraccion": "Dietas hiperproteicas e hipergrasas",
                        "mecanismo": "Retraso del vaciado gástrico y disminución de la absorción del fármaco."
                    },
                    {
                        "nombreInteraccion": "Dietas hipoproteicas",
                        "mecanismo": "Aumento de la hepatotoxicidad del paracetamol."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Potenciación de la toxicidad a nivel hepático."
                    },
                    {
                        "nombreInteraccion": "Cafeína",
                        "mecanismo": "Disminución del aclaramiento y potenciación del efecto."
                    }
                ]
            },
            {
                "id": 80,
                "grupo": "Analgésicos y sistema musculoesquelético",
                "tipo": "AINES",
                "nombreGenerico": "Ibuprofeno",
                "nombresComerciales": [
                    "Advil",
                    "afebril analgion",
                    "bediatil",
                    "buprex",
                    "digecap",
                    "dololgial",
                    "femen",
                    "espidifen",
                    "ibufen",
                    "ibuflash",
                    "ibugesic",
                    "ibuwin",
                    "ibuxx",
                    "piropral",
                    "profem",
                    "probinex",
                    "sinfebril",
                    "tenvalin",
                    "termin",
                    "termyl"
                ],
                "presentacion": "comprimido 200mg, 400mg, 800mg, suspensión oral 200mg/5ml, 100mg/5ml, 40mg/ml, capsula blanda 200mg, 400mg, 600mg, gotas orales en solución 40mg/ml, comprimido de liberación prolongada 800mg",
                "mecanismoAccion": "Inhibición de la síntesis de prostaglandinas a nivel periférico.",
                "usos": [
                    "Procesos dolorosos de intensidad leve-moderada y cuadros febriles",
                    "artritis reumatoide",
                    "dismenorrea"
                ],
                "embarazo": "Con precaucion (categoría C): primer y segundo trimestre. Categoría D tercer trimestre.",
                "lactancia": "Compatible",
                "administracion": "con alimentos o con leche",
                "reaccionesAdversas": "Úlcera péptica, perforación y hemorragia gastrointestinal, náuseas, vómitos, diarrea, flatulencia, estreñimiento, dispepsia, dolor abdominal, dolor de cabeza, mareos",
                "mecanismoHepatico": "Se metaboliza en el hígado principalmente por las enzimas CYP2C9 y CYP3A4 del sistema del citocromo P450, formando metabolitos inactivos. Precaución en pacientes con insuficiencia hepática grave, ya que  puede aumentar el riesgo de efectos adversos.",
                "mecanismoRenal": "Es la principal ruta de eliminación del fármaco y sus metabolitos. Cerca del 50-60% de la dosis administrada se excreta en la orina como metabolitos, y cerca del 15% se excreta como fármaco inalterado y conjugado.  En personas con insuficiencia renal, la eliminación del medicamento puede estar comprometida, lo que aumenta el riesgo de efectos secundarios, como úlceras gástricas o problemas renales adicionales. Evitar o monitorear el uso del medicamento.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos ricos en fibra",
                        "mecanismo": "Disminucion de la absorcion. Espaciar su toma."
                    },
                    {
                        "nombreInteraccion": "Repollo, brócoli, coliflor",
                        "mecanismo": "Inductor de CYP1A2, disminución de la concentración del fármaco."
                    },
                    {
                        "nombreInteraccion": "Carnes asadas a la brasa",
                        "mecanismo": "Inductor de CYP1A2, disminución de la concentración del fármaco."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Riesgo de sangrado intestinal."
                    },
                    {
                        "nombreInteraccion": "Suplementos de potasio",
                        "mecanismo": "El fármaco puede aumentar la retención de potasio en el cuerpo."
                    },
                    {
                        "nombreInteraccion": "Omega-3",
                        "mecanismo": "Potenciación del efecto antiinflamatorio. Posible administración adjunta."
                    }
                ]
            },
            {
                "id": 81,
                "grupo": "Analgésicos y sistema musculoesquelético",
                "tipo": "AINES",
                "nombreGenerico": "Naproxeno",
                "nombresComerciales": [
                    "Acroxen",
                    "apronax",
                    "dolonex",
                    "durafex",
                    "eurogesic",
                    "flanax",
                    "infor",
                    "nifaxen",
                    "nuprax",
                    "odontogesic",
                    "paraxflan",
                    "pronol",
                    "riproxen",
                    "sindolan",
                    "trass",
                    "sodix"
                ],
                "presentacion": "Comprimido 275mg, 550mg, 100mg, 250mg, 500mg, suspensión oral 125mg/5ml",
                "mecanismoAccion": "Inhibe la prostaglandina sintetasa.",
                "usos": [
                    "Tratamiento sintomático del dolor leve-moderado",
                    "estados febriles",
                    "artritis reumatoide",
                    "dismenorrea",
                    "alteraciones musculoesqueléticas con dolor e inflamación."
                ],
                "embarazo": "Con precaucion (categoría C): primer y segundo trimestre. Categoría D tercer trimestre.",
                "lactancia": "compatibilidad probable (bastante seguro)",
                "administracion": "con alimentos o con leche",
                "reaccionesAdversas": "úlceras pépticas, perforación o hemorragia gastrointestinal, dolor epigástrico, cefaleas, náuseas, vómitos, diarrea, flatulencias, dispepsia, dolor abdominal.",
                "mecanismoHepatico": "Se metaboliza en el hígado, donde se convierte en metabolitos inactivos. La principal vía de metabolismo es a través del sistema enzimático CYP450, específicamente la isoenzima CYP2C9. Precaución en pacientes con insuficiencia hepática, donde la eliminación del fármaco puede ser más lenta, lo que aumenta el riesgo de efectos secundarios.",
                "mecanismoRenal": "Cerca del 95% del fármaco se excreta en la orina y la mayoría de la dosis excretada (66-92%) es en forma de metabolitos conjugados. Precaución en pacientes con insuficiencia renal moderada a severa donde puede haber acumulación del fármaco y sus metabolitos. Los pacientes con un aclaramiento de creatinina bajo podrían requerir dosis reducidas o intervalos de administración más largos para evitar toxicidad. El naproxeno está contraindicado en pacientes con insuficiencia renal severa.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos ricos en fibra",
                        "mecanismo": "Disminucion de la absorcion. Espaciar su toma."
                    },
                    {
                        "nombreInteraccion": "Soja",
                        "mecanismo": "Inhibición de CYP1A2 y CYP2C9. Aumento de la concentración plasmática del fármaco."
                    },
                    {
                        "nombreInteraccion": "Arándano rojo",
                        "mecanismo": "Inhibicion de CYP3A4 y CYP2C9 aumentando la concentracion del farmaco."
                    },
                    {
                        "nombreInteraccion": "Mandarina",
                        "mecanismo": "Inhibición de CYP1A2 y CYP3A4, aumentando la concentración del fármaco."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Riesgo de sangrado intestinal."
                    },
                    {
                        "nombreInteraccion": "Mango",
                        "mecanismo": "Inhibición de CYP1A1, CYP1A2, CYP3A1, CYP2C6 y CYP2E1, potenciando la toxicidad del fármaco."
                    },
                    {
                        "nombreInteraccion": "Repollo, brócoli, coliflor",
                        "mecanismo": "Inductor de CYP1A2, disminución de la concentración del fármaco."
                    },
                    {
                        "nombreInteraccion": "Carnes asadas a la brasa",
                        "mecanismo": "Inductor de CYP1A2, disminución de la concentración del fármaco."
                    },
                    {
                        "nombreInteraccion": "Omega-3",
                        "mecanismo": "Potenciación del efecto antiinflamatorio. Posible administración adjunta."
                    }
                ]
            },
            {
                "id": 82,
                "grupo": "Analgésicos y sistema musculoesquelético",
                "tipo": "AINES",
                "nombreGenerico": "Metamizol",
                "nombresComerciales": [
                    "Turbet",
                    "metalgial"
                ],
                "presentacion": "cápsula dura 575mg, comprimido 1000mg, gotas oral en solución 500mg/ml, solución inyectable 500mg/ml",
                "mecanismoAccion": "Pirazolona analgésica no acídica, no narcótica, con efectos analgésicos, antipiréticos y espasmolíticos.",
                "usos": [
                    "Dolor",
                    "fibres graves y resistentes"
                ],
                "embarazo": "Evitar",
                "lactancia": "Compatibilidad limitada",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Reacciones anafilácticas leves: disena, síntomas gastrointestinales, hipotensión, color rojo en orina, arritmias cardiacas",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a su metabolito activo a través de las enzimas del citocromo P450. Precaución en pacientes con insuficiencia hepática grave, se requiere ajustes de dosis y mayor supervisión.",
                "mecanismoRenal": "Aproximadamente el 90% del medicamento y sus metabolitos se excretan por vía renal en las primeras 24 horas tras su administración. Precaución en pacientes con insuficiencia renal por aumento en el riesgo de acumulación y toxicidad.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Potencia los efectos y aumenta el riesgo de efectos adversos"
                    },
                    {
                        "nombreInteraccion": "Arándanos, albaricoque, berros, soja, brócoli, pomelo",
                        "mecanismo": "Inhibición del CYP3A4, aumento de la concentración plasmática del fármaco. Espaciar la toma de estos alimentos"
                    }
                ]
            },
            {
                "id": 83,
                "grupo": "Analgésicos y sistema musculoesquelético",
                "tipo": "AINES",
                "nombreGenerico": "Diclofenaco",
                "nombresComerciales": [
                    "Acrofenac",
                    "astren",
                    "berifen",
                    "caraflam",
                    "clofen",
                    "desinflam",
                    "disflam",
                    "dolordrops",
                    "flamydol",
                    "flenac",
                    "flexen",
                    "flogam",
                    "hit",
                    "lertus",
                    "turbogesic",
                    "volfenac",
                    "voltaren"
                ],
                "presentacion": "comprimido recubierto/duración prolongada 50mg, 100mg, 75mg, 25mg, solución inyectable 75mg/3ml, supositorio 100mg, 50mg, 12.5mg, suspensión oral 1,8%, 9mg/5ml",
                "mecanismoAccion": "Inhibe la biosíntesis de prostaglandinas.",
                "usos": [
                    "Artritis reumatoide",
                    "artrosis",
                    "espondiloartritis",
                    "tratamiento sintomático del ataque agudo de gota",
                    "del dolor asociado a cólico renal",
                    "dolor lumbar",
                    "dolores postraumáticos"
                ],
                "embarazo": "Con precaucion (categoría C): primer y segundo trimestre. Categoría D tercer trimestre.",
                "lactancia": "Compatible",
                "administracion": "con alimentos",
                "reaccionesAdversas": "Cefalea, mareo, vértigo, diarreas, dispepsia, dolor abdominal, flatulencia, anorexia, erupción, colitis isquémica, dolor",
                "mecanismoHepatico": "Se metaboliza en el hígado a través de las enzimas del citocromo P450, principalmente por la CYP2C9 a metabolitos inactivos. El diclofenaco se ha asociado con un mayor riesgo de toxicidad hepática, incluyendo daño hepático grave en algunos casos raros. Precaución en pacientes con insuficiencia hepática, considerar un ajuste de dosis o un monitoreo estrecho.",
                "mecanismoRenal": "Aproximadamente el 65% de los metabolitos se elimina por vía renal, mientras que el 35% restante se excreta en las heces. Precaución en pacientes con insuficiencia renal grave, su uso debe ser monitoreado por acumulación del fármaco en el cuerpo.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos ricos en fibra",
                        "mecanismo": "Disminucion de la absorcion. Espaciar su toma."
                    },
                    {
                        "nombreInteraccion": "Soja",
                        "mecanismo": "Inhibición de CYP1A2 y CYP2C9. Aumento de la concentración plasmática del fármaco."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Riesgo de sangrado intestinal."
                    },
                    {
                        "nombreInteraccion": "Repollo, brócoli, coliflor",
                        "mecanismo": "Inductor de CYP1A2, disminución de la concentración del fármaco."
                    },
                    {
                        "nombreInteraccion": "Carnes asadas a la brasa",
                        "mecanismo": "Inductor de CYP1A2, disminución de la concentración del fármaco."
                    },
                    {
                        "nombreInteraccion": "Suplementos de hierro",
                        "mecanismo": "El fármaco puede reducir la absorción de hierro y, en algunos casos, agravar las molestias gastrointestinales."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en potasioo",
                        "mecanismo": "El diclofenaco puede afectar los niveles de potasio en sangre (hiperpotasemia). Especialmente en pacientes con insuficiencia renal."
                    },
                    {
                        "nombreInteraccion": "Omega-3",
                        "mecanismo": "Potenciación del efecto antiinflamatorio. Posible administración adjunta."
                    }
                ]
            },
            {
                "id": 84,
                "grupo": "Ansiolóticos",
                "tipo": "Benzodiazepinas",
                "nombreGenerico": "Diazepam",
                "nombresComerciales": [
                    "Consilium",
                    "dipaz",
                    "ortopsique",
                    "valium"
                ],
                "presentacion": "Comprimido 10mg, 5mg, jarabe 2mg/5ml, solución inyectable 10mg/2ml",
                "mecanismoAccion": "Facilita la unión del GABA a su receptor y aumenta su actividad",
                "usos": [
                    "Supresión sintomática de ansiedad",
                    "agitación",
                    "tensión psíquica por estados psiconeuróticos y trastornos situacionales transitorios"
                ],
                "embarazo": "Evitar (categoria D)",
                "lactancia": "compatibilidad probable",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Somnolencia, confusión, fatiga, debilidad muscular, amnesia, depresión, depresión respiratoria",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a través del sistema enzimático del citocromo P450, especialmente las isoenzimas CYP3A4 y CYP2C19 donde se transforma en metabolitos activos. Precaución en pacientes con insuficiencia hepática, lo que puede llevar a una acumulación de la droga y sus metabolitos.",
                "mecanismoRenal": "Los metabolitos se excretan por los riñones en la orina. la insuficiencia renal grave puede reducir la depuración de los metabolitos del diazepam, especialmente el desmetildiazepam, que tiene una vida media más larga. Esto puede aumentar el riesgo de toxicidad.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Potenciación del efecto depresor sobre el SNC."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibe CYP450, aumento en la concentración del fármaco."
                    },
                    {
                        "nombreInteraccion": "Cafeína",
                        "mecanismo": "Retraso del efecto ansiolítico."
                    },
                    {
                        "nombreInteraccion": "Vitamina C",
                        "mecanismo": "Altas dosis de ácido ascórbico puede potencialmente reducir la eficacia los efectos sedativos del fármaco."
                    },
                    {
                        "nombreInteraccion": "Suplementos de hierbas",
                        "mecanismo": "Algunas hierbas como la valeriana, pasiflora, manzanilla o lavanda pueden potenciar los efectos sedantes del fármaco."
                    },
                    {
                        "nombreInteraccion": "Tabaco",
                        "mecanismo": "Menores niveles plasmático del fármaco."
                    }
                ]
            },
            {
                "id": 85,
                "grupo": "Ansiolóticos",
                "tipo": "Benzodiazepinas",
                "nombreGenerico": "Lorazepam",
                "nombresComerciales": [
                    "Ativan"
                ],
                "presentacion": "Comprimido 1mgg, 2mg",
                "mecanismoAccion": "Ansiolítico que actúa incrementando la actividad del ácido gamma-aminobutírico (GABA), al facilitar su unión con el receptor GABAérgico.",
                "usos": [
                    "Tratamiento a corto plazo de todos los estados de ansiedad y tensión asociados o no a trastornos funcionales u orgánicos",
                    "alteraciones del comportamiento psíquico",
                    "insomnio",
                    "neurosis"
                ],
                "embarazo": "Evitar (categoria D)",
                "lactancia": "Compatible",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Sedación, reducción del estado de alerta, fatiga, cefalea, somnoliencia, depresión, diplopía, debilidad muscular, ataxia",
                "mecanismoHepatico": "Se metaboliza en el hígado, principalmente a través de conjugación con ácido glucurónico. Precaución en pacientes con insuficiencia hepática grave donde puede reducirse la eliminación del fármaco, se recomienda ajuste de dosis.",
                "mecanismoRenal": "Aproximadamente el 75% de la dosis administrada se elimina en forma de metabolitos inactivos. Precaución en pacientes con insuficiencia renal donde la eliminación de los metabolitos puede estar alterada, se puede necesitar un ajuste de dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Potenciación del efecto depresor sobre el SNC."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibe CYP450, aumento en la concentración del fármaco."
                    },
                    {
                        "nombreInteraccion": "Cafeína",
                        "mecanismo": "Retraso del efecto ansiolítico."
                    },
                    {
                        "nombreInteraccion": "Suplementos de magnesio y calcio",
                        "mecanismo": "Los suplementos que contienen magnesio o calcio pueden intererir con la absorción del medicamento y potencialmente disminuir su efectividad."
                    },
                    {
                        "nombreInteraccion": "Suplementos de hierbas",
                        "mecanismo": "Algunas hierbas como la valeriana, pasiflora, manzanilla o lavanda pueden potenciar los efectos sedantes del fármaco."
                    },
                    {
                        "nombreInteraccion": "Tabaco",
                        "mecanismo": "Menores niveles plasmático del fármaco."
                    }
                ]
            },
            {
                "id": 86,
                "grupo": "Ansiolóticos",
                "tipo": "Benzodiazepinas",
                "nombreGenerico": "Alprazolam",
                "nombresComerciales": [
                    "Abaxon",
                    "acrosue",
                    "adax",
                    "alzam",
                    "ansiolit",
                    "biofree",
                    "librazolam",
                    "tranquinal",
                    "xanax"
                ],
                "presentacion": "Comprimido de liberación prolongada 0,5mg, 1mg, 2mg, 0,25mg,",
                "mecanismoAccion": "Se cree que ejerce su efecto por unión a los receptores estero-específicos localizados en SCN.",
                "usos": [
                    "Ansiedad generalizada y ansiedad asociada a depresión",
                    "trastornos por angustia con o sin agrofobia",
                    "pacientes geriátricos"
                ],
                "embarazo": "Evitar (categoria D)",
                "lactancia": "Compatibilidad probable (bastante seguro )",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Depresión, sedación, somnolencia, mareo, cefalea, estreñimiento, boca seca, fatiga, irritabilidad",
                "mecanismoHepatico": "Se metaboliza en el hígado a través del sistema enzimático del CYP3A4 a sus metabolitos inactivos. Precaución en pacientes con insuficiencia hepática donde puede aumentar el riesgo de efectos adversos.",
                "mecanismoRenal": "Se excreta principalmente en la orina como metabolitos inactivos. La insuficiencia renal afecta la unión del alprazolam a las proteínas plasmáticas, aumentando la fracción libre y reduciendo el aclaramiento libre del fármaco.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Potenciación del efecto depresor sobre el SNC."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibe CYP450, aumento en la concentración del fármaco."
                    },
                    {
                        "nombreInteraccion": "Cafeína",
                        "mecanismo": "Retraso del efecto ansiolítico."
                    },
                    {
                        "nombreInteraccion": "Tabaco",
                        "mecanismo": "Menores niveles plasmático del fármaco."
                    }
                ]
            },
            {
                "id": 87,
                "grupo": "Ansiolóticos",
                "tipo": "Benzodiazepinas",
                "nombreGenerico": "Clorazepato",
                "nombresComerciales": [
                    "Tranxene"
                ],
                "presentacion": "Cápsula dura 10mg, 5mg",
                "mecanismoAccion": "\"Agonista específico sobre el receptor central que forma parte del complejo \"\"receptores macromoleculares GABA-OMEGA\"\" que modulan la apertura del canal clorado.\"",
                "usos": [
                    "Estados de agitación psicomotriz",
                    "confusión o agresividad",
                    "alcoholismo"
                ],
                "embarazo": "Evitar (categoria D)",
                "lactancia": "Compatibilidad probable (bastante seguro )",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Respuesta bradipsíquica, depresión, amnesia anterógrada, mareos, hipotonía muscular, fatiga, desarrollo de dependencia.",
                "mecanismoHepatico": "Es un profármaco que se metaboliza en el hígado donde se convierte en su metabolito activo. La conversión al metabolito activo se realiza mediante hidrólisis en el tracto gastrointestinal y el hígado. Precaución en pacientes con insuficiencia hepática grave, ya que puede haber acumulación del fármaco.",
                "mecanismoRenal": "El farmaco y su metabolito se elimina a traves de la orina. Precaución en pacientes con la función renal deteriorada, puede haber una reducción de la excreción y aumentar el riesgo de efectos tóxicos.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Potenciación del efecto depresor sobre el SNC."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Inhibe CYP450, aumento en la concentración del fármaco."
                    },
                    {
                        "nombreInteraccion": "Cafeína",
                        "mecanismo": "Retraso del efecto ansiolítico."
                    },
                    {
                        "nombreInteraccion": "Tabaco",
                        "mecanismo": "Menores niveles plasmático del fármaco."
                    }
                ]
            },
            {
                "id": 88,
                "grupo": "Antiparkinsonianos",
                "tipo": "Antiparkinsonianos",
                "nombreGenerico": "Rasagilina",
                "nombresComerciales": [
                    "Ragitar"
                ],
                "presentacion": "Comprimidos 0,5mg, 1mg",
                "mecanismoAccion": "\"IMAO-B selectivo e irreversible, aumenta las concentraciones de dopamina en el cuerpo estriado.\"",
                "usos": [
                    "Enfermedad idiopática de Parkinson en monoterapia o terapia coadyuvante con levodopa al final de las fluctuaciones de la dosis."
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "compatibilidad limitada (poco seguro)",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Influenza, depresión, alucinaciones, angina de pecho, flatulencias, dolor musculoesquelético, fiebre, malestar",
                "mecanismoHepatico": "Se metaboliza en el hígado principalmente a través de la enzima CYP1A2 del citocromo P450 a metabolitos inactivos. Está contraindicada en casos de insuficiencia hepática grave y debe usarse con precaución en pacientes con insuficiencia hepática leve a moderada.",
                "mecanismoRenal": "Se excreta principalmente en forma de metabolitos, y solo una pequeña parte del fármaco sin cambios se elimina en la orina. Cerca del 62% de la dosis se excreta en la orina y el 7% en heces. En pacientes con insuficiencia renal grave, se debe evaluar el uso del medicamento con precaución.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Potenciación del sïndrome serotoninérgico."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en tiramina",
                        "mecanismo": "\"Aumento de las concentraciones de las aminas exógenas en el organismo y bloque de la MA0, pudiendo desencadenar reacciones adversas conocidas como \"\"reacción al queso\"\"\""
                    },
                    {
                        "nombreInteraccion": "Plantago Ovata",
                        "mecanismo": "Mejoran la absorción del fármaco, mejorando el perfil cinético y estabilizando las concentraciones séricas."
                    }
                ]
            },
            {
                "id": 89,
                "grupo": "Antiparkinsonianos",
                "tipo": "Antiparkinsonianos",
                "nombreGenerico": "Levodopa",
                "nombresComerciales": [
                    "Sinemet",
                    "parcopa",
                    "stalevo",
                    "doporio",
                    "sinemet",
                    "duodopa"
                ],
                "presentacion": "Comprimidos 250mg de levodpa y 25mg de carbidopa, 100mg y 25mg.",
                "mecanismoAccion": "Aumentar los niveles de dopamina en el cerebro",
                "usos": [
                    "Enfermedad de Parkinson"
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "Compatibilidad probable (bastante seguro )",
                "administracion": "sin alimentos",
                "reaccionesAdversas": "Anemia, pérdida de peso, aumento de peso, aumento del nivel de aa, deficiencia de vitamina B6, B12, ansiedad, depresión, hipertensión, disnea, vómitos, náuseas, flatulencia",
                "mecanismoHepatico": "No se metaboliza en el hígado, sin embargo, se recomienda en pacientes con insuficiencia hepática un monitoreo constante.",
                "mecanismoRenal": "Los metabolitos se eliminan principalmente a través de la orina, pero el fármaco como tal no se metaboliza significativamente en los riñones.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Potenciación del sïndrome serotoninérgico."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en tiramina",
                        "mecanismo": "\"Aumento de las concentraciones de las aminas exógenas en el organismo y bloque de la MA0, pudiendo desencadenar reacciones adversas conocidas como \"\"reacción al queso\"\"\""
                    },
                    {
                        "nombreInteraccion": "Plantago Ovata",
                        "mecanismo": "Mejoran la absorción del fármaco, mejorando el perfil cinético y estabilizando las concentraciones séricas."
                    },
                    {
                        "nombreInteraccion": "Proteína",
                        "mecanismo": "El consumo de alimentos altos en proteína y el fármaco compiten por los transportadores de ciertos aminoácidos, lo que reduce la absorción y la cantidad del fármaco que llega al cerebro."
                    },
                    {
                        "nombreInteraccion": "Hierro",
                        "mecanismo": "Las sales de hierro pueden formar quelatos con el fármaco, reduciendo su biodisponibilidad."
                    },
                    {
                        "nombreInteraccion": "Vitamina B6",
                        "mecanismo": "La vitamina B6 en altas dosis pueden reducir los niveles del fármaco disponibles para llegar al SNC."
                    }
                ]
            },
            {
                "id": 90,
                "grupo": "Antiparkinsonianos",
                "tipo": "Antiparkinsonianos",
                "nombreGenerico": "Carbidopa",
                "nombresComerciales": [
                    "Doporio",
                    "duodopa",
                    "sinemet"
                ],
                "presentacion": "Comprimido (levodopa + carbidopa) 100mg +25mg, 250mg +25mg, 200mg + 50mg",
                "mecanismoAccion": "Inhibe la descarboxilación periférica de la levodopa, acción que da lugar a mayor concentración plasmática y que prolonga significativamente su vida media",
                "usos": [
                    "Enfermedad de Parkinson. Parkinsonismo posencefálico y arteriosclerótico."
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "Compatibilidad probable (bastante seguro )",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Náusea, vómito, estreñimiento, ansiedad, confusión, nerviosismo, cambios en el estado de ánimo, depresión mental, pesadillas, pulso irregular.",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a sus metabolitos. Precaución en pacientes con enfermedad hepática, se puede necesitar un ajuste de dosis.",
                "mecanismoRenal": "Se excreta en gran medida sin cambios por los riñones. Precaución en pacientes con enfermedad renal, se puede necesitar un ajuste de dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Potenciación del sïndrome serotoninérgico."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en tiramina",
                        "mecanismo": "\"Aumento de las concentraciones de las aminas exógenas en el organismo y bloque de la MA0, pudiendo desencadenar reacciones adversas conocidas como \"\"reacción al queso\"\"\""
                    },
                    {
                        "nombreInteraccion": "Plantago Ovata",
                        "mecanismo": "Mejoran la absorción del fármaco, mejorando el perfil cinético y estabilizando las concentraciones séricas."
                    },
                    {
                        "nombreInteraccion": "Proteína",
                        "mecanismo": "El consumo de alimentos altos en proteína y el fármaco compiten por los transportadores de ciertos aminoácidos, lo que reduce la absorción y la cantidad del fármaco que llega al cerebro."
                    },
                    {
                        "nombreInteraccion": "Hierro",
                        "mecanismo": "Las sales de hierro pueden formar quelatos con el fármaco, reduciendo su biodisponibilidad."
                    }
                ]
            },
            {
                "id": 91,
                "grupo": "Antiparkinsonianos",
                "tipo": "Antiparkinsonianos",
                "nombreGenerico": "Selegilina",
                "nombresComerciales": [
                    "Comenter",
                    "selegil"
                ],
                "presentacion": "Comprimido 5mg",
                "mecanismoAccion": "Inhibe selectivamente en el cerebro la MAO-B, responsable de la degradación de dopamina.",
                "usos": [
                    "Enfermedad de Parkinson idiopático. Como monoterapia en estadios iniciales de la enf. de Parkinson",
                    "o como coadyuvante de la levodopa. Trastorno depresivo mayor."
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "compatibilidad limitada (poco seguro)",
                "administracion": "con o sin alimentos. Sin alimentos (sublingual)",
                "reaccionesAdversas": "\"Mareo, cefalea, movimientos anormales (como discinesia), vértigo, náuseas, bradicardia, enzimas hepáticas levemente elevadas, confusión, alucinaciones.\"",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a través de las enzimas del citocromo P450, especialmente las isoenzimas CYP2B6, CYP2C19 y CYP2D6. En pacientes con insuficiencia hepática puede haber acumulación de la droga y sus metabolitos activos.",
                "mecanismoRenal": "Los metabolitos se eliminan principalmente a través de la orina. Precaución en pacientes con insuficiencia renal, se debe monitorear y ajustar las dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Potenciación del sïndrome serotoninérgico."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en tiramina",
                        "mecanismo": "\"Aumento de las concentraciones de las aminas exógenas en el organismo y bloque de la MA0, pudiendo desencadenar reacciones adversas conocidas como \"\"reacción al queso\"\"\""
                    },
                    {
                        "nombreInteraccion": "Plantago Ovata",
                        "mecanismo": "Mejoran la absorción del fármaco, mejorando el perfil cinético y estabilizando las concentraciones séricas."
                    },
                    {
                        "nombreInteraccion": "Gingseng",
                        "mecanismo": "Puede alterar la farmacocinética del fármaco afectando su biodisponibilidad oral."
                    },
                    {
                        "nombreInteraccion": "Suplementos de triptófano",
                        "mecanismo": "En combinación con el fármaco puede aumentar el riesgo de síndrome serotoninérgico."
                    }
                ]
            },
            {
                "id": 92,
                "grupo": "Antihistamínicos",
                "tipo": "Antihistamínicos",
                "nombreGenerico": "Difenhidramina",
                "nombresComerciales": [
                    "Sedosan"
                ],
                "presentacion": "Comprimido 50mg, jarabe 12,5mg/5ml",
                "mecanismoAccion": "Antihistamínico, anticolinérgico y con efecto antitusivo discreto.",
                "usos": [
                    "Tratamiento de síntomas asociados a alergias por polen",
                    "animales",
                    "polvo u otros agentes. Tratamiento a corto plazo del insomnio."
                ],
                "embarazo": "Compatible (categoria B)",
                "lactancia": "Compatibilidad probable (bastante seguro )",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "\"Aturdimiento, somnolencia, anorexia, náuseas, vómitos, diarrea, estreñimiento, sequedad de boca, nariz y garganta, dificultad urinaria, visión borrosa, hipotensión. Uso prolongado: disminución de flujo salivar (caries y molestias bucales).\"",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a través de la enzima CYP2D6. La extracción hepática de primer paso de difenhidramina es significativa, con estudios en ovejas que indican una tasa de extracción hepática de aproximadamente el 94%. Precaución en pacientes con insuficiencia hepática, puede existir acumulación del fármaco.",
                "mecanismoRenal": "La excreción renal del fármaco y sus metabolitos es relativamente limitada. La depuración renal de la difenhidramina en sí es baja y el metabolito principal no se metaboliza significativamente en humanos.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Aumento de los efectos del fármaco sobre el SNC."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Disminución de la biodisponibilidad del fármaco por inhibición de la absorción intestinal con OATP."
                    },
                    {
                        "nombreInteraccion": "Zumo de manzana",
                        "mecanismo": "Inhibición del transportador OATP2B1."
                    }
                ]
            },
            {
                "id": 93,
                "grupo": "Antihistamínicos",
                "tipo": "Antihistamínicos",
                "nombreGenerico": "Dexclorfeniramina",
                "nombresComerciales": [
                    "Polaramine",
                    "histamin",
                    "dexlerg",
                    "alermine",
                    "polarax"
                ],
                "presentacion": "Comprimido 2 mg, 6 mg, crema dermatológica 10 mg/g, jarabe 0,4 mg/ml, 2 mg/ 5 ml, gotas 2,8 mg/ml.",
                "mecanismoAccion": "Antihistamínico, compite con la histamina por los receptores de células efectoras.",
                "usos": [
                    "Rinitis alérgicca",
                    "rinitis vasomotora",
                    "conjuntivitis alérgica. Tratamiento de reacción anafiláctica junto con adrenalina y otras medidas."
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "Compatibilidad probable (bastante seguro )",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Somnolencia",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado a través del sistema enzimático del CYP450, específicamente por las enzimas CYP2D6 y CYP3A4, produciendo metabolitos menos activos. Precaución en pacientes con insuficiencia hepática, puede ser necesario un ajuste de dosis o evitar su uso.",
                "mecanismoRenal": "El fármaco y sus metabolitos se elimina a traves de la orina. Precaución en pacientes con la función renal deteriorada, pueden requerir ajustes de dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Aumento de los efectos del fármaco sobre el SNC."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Disminución de la biodisponibilidad del fármaco por inhibición de la absorción intestinal con OATP."
                    },
                    {
                        "nombreInteraccion": "Zumo de manzana",
                        "mecanismo": "Inhibición del transportador OATP2B1."
                    }
                ]
            },
            {
                "id": 94,
                "grupo": "Antihistamínicos",
                "tipo": "Antihistamínicos",
                "nombreGenerico": "Fexofenadina",
                "nombresComerciales": [
                    "Alerfedine",
                    "alexia",
                    "allegra",
                    "ronlast",
                    "xafen"
                ],
                "presentacion": "Comprimido recubierto con película 108mg, 120mg, 60mg, suspensión oral 6mg/ml, 30mg/5ml",
                "mecanismoAccion": "Metabolito activo de terfenadina, antihistamínico H1 no sedante.",
                "usos": [
                    "Síntomas asociados a rinitis alérgica estacional y urticaria idiopática crónica."
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "Compatible",
                "administracion": "sin alimentos",
                "reaccionesAdversas": "\"Cefalea, somnolencia, mareos, náuseas, visión borrosa.\"",
                "mecanismoHepatico": "No se metaboliza extensamente en el hígado. Su forma activa se absorbe principalmente en el tracto gastrointestinal y se excreta sin cambios en la orina y las heces. La captación hepática de fexofenadina está mediada en gran medida por polipéptidos transportadores de aniones orgánicos (OATP).",
                "mecanismoRenal": "Cerca del 11% de la dosis administrada se excreta por la orina. La farmacocinética de fexofenadina puede verse afectada por insuficiencia renal, lo que lleva a un aumento de los niveles plasmáticos y una vida media de eliminación prolongada en pacientes con función renal reducida.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Aumento de los efectos del fármaco sobre el SNC."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Disminución de la biodisponibilidad del fármaco por inhibición de la absorción intestinal con OATP."
                    },
                    {
                        "nombreInteraccion": "Zumo de manzana",
                        "mecanismo": "Inhibición del transportador OATP2B1. Disminución de la biodisponibilidad y eficacia del fármaco."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en grasas",
                        "mecanismo": "Pueden afectar la biodisponibilidad del fámaco, ya que su absorción se ve comprometida."
                    }
                ]
            },
            {
                "id": 95,
                "grupo": "Antihistamínicos",
                "tipo": "Antihistamínicos",
                "nombreGenerico": "Loratadina",
                "nombresComerciales": [
                    "Alenous",
                    "alerfast",
                    "alergin",
                    "antil",
                    "claricort",
                    "clarityne",
                    "efectine",
                    "frenaler",
                    "histaloran",
                    "hysticlar",
                    "larotin",
                    "liberec",
                    "loradin",
                    "talorat",
                    "tricel",
                    "vilamax"
                ],
                "presentacion": "Comprimido 10mg, jarabe 0,1%, 1mg/1ml, suspensión oral 6mg/ml, solución oral 1mg/ml, gotas otrales en solución 1mg/ml",
                "mecanismoAccion": "Antihistamínico tricíclico con actividad selectiva sobre receptores H1 periféricos.",
                "usos": [
                    "Alivio sintomático y temporal de procesos alérgicos por polen",
                    "animales domésticos",
                    "polvo u otros agentes. Tratamiento sintomático de rinitis alérgica y urticaria idiopática crónica."
                ],
                "embarazo": "Compatible (categoria B)",
                "lactancia": "Compatible",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "\"Somnolencia, cefalea, aumento de apetito, insomnio. aumento de peso en niños.\"",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado. Este proceso es mediado por el sistema enzimático del citocromo P450. Precaución en pacientes con insuficiencia hepática, puede haber acumulacio4n del fármaco. Se debe considerar una reducción de la dosis.",
                "mecanismoRenal": "Aproximadamente el 41% del radiocarbono derivado de la loratadina se excreta en la orina y el 43% en las heces. Precaución en pacientes con insuficiencia renal grave donde puede haber acumulación del medicamento. Se recomienda ajustar la dosis.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede aumentar lad concentraciones plasmáticas del fármaco al interferir con su metabolismo al inhibir las enzimas CYP3A4."
                    },
                    {
                        "nombreInteraccion": "Alimentos ricos en grasas",
                        "mecanismo": "Pueden aumentar la absorción del fármaco, lo que incrementa sus niveles en el cuerpo."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Puede reducir la eficacia del fármaco al inducir las enzimas del citocromo P450."
                    }
                ]
            },
            {
                "id": 96,
                "grupo": "Inhibidores de la acetilcolinesterasa",
                "tipo": "Inhibidores de la acetilcolinesterasa",
                "nombreGenerico": "Donepezilo",
                "nombresComerciales": [
                    "Alzit",
                    "donecil",
                    "doneclair",
                    "eranz"
                ],
                "presentacion": "Comprimido recubierto con pelicula 10mg, 5mg",
                "mecanismoAccion": "Inhibidor específico y reversible de acetilcolinesterasa, colinesterasa predominante en el cerebro.",
                "usos": [
                    "Tratamiento sintomático de enfermedad de Alzheimer leve a moderadamente grave."
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "Evitar",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "Diarrea, calambres musculares, fatiga, dolor, náuseas, vómitos, insomnio, síncope, mareos, molestias abdominales, incontinencia urinaria, erupción, prurito, dolor de cabeza, anorexia, resfriado común, alucinaciones, agitación, conducta agresiva, sueños anormales y pesadillas, accidentes.",
                "mecanismoHepatico": "Se metaboliza en el hígado principalmente a través de las enzimas del sistema del citocromo P450, en particular las isoenzimas CYP2D6 y CYP3A4. La insuficiencia hepática, como ocurre en pacientes con cirrosis alcohólica estable, produce una disminución del 20% en el aclaramiento. Se recomienda ajustar la dosis.",
                "mecanismoRenal": "Aproximadamente el 57% de la dosis administrada se recupera en la orina y alrededor del 17% de la dosis se excreta como fármaco inalterado.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede incrementar los efectos del fármaco como la somnolencia, mareos o la dificultad para concentrarse."
                    }
                ]
            },
            {
                "id": 97,
                "grupo": "Inhibidores de la acetilcolinesterasa",
                "tipo": "Inhibidores de la acetilcolinesterasa",
                "nombreGenerico": "Galantamina",
                "nombresComerciales": [
                    "Reminyl"
                ],
                "presentacion": "Cápsula de liberación prolongada 16mg, 8mg",
                "mecanismoAccion": "Inhibidor selectivo, competitivo y reversible de acetilcolinesterasa. Además estimula la acción intrínseca de acetilcolina sobre los receptores nicotínicos.",
                "usos": [
                    "Tratamiento sintomático de demencia tipo Alzheimer leve o moderadamente grave."
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "compatibilidad limitada (poco seguro)",
                "administracion": "con alimentos",
                "reaccionesAdversas": "Disminución del apetito, alucinaciones, depresión, síncope, mareo, temblor, cefalea, somnolencia, letargo, bradicardia, HTA, vómito, náusea, dolor abdominal",
                "mecanismoHepatico": "Se metaboliza principalmente en el hígado por la enzima CYP2D6. Precaución en pacientes con insuficiencia hepática (leve a moderada), la dosis debe ajustarse.",
                "mecanismoRenal": "Aproximadamente el 20% de la dosis administrada se excreta sin cambios en la orina dentro de las 24 horas, con una tasa de depuración renal de aproximadamente 65 ml/min. Precaución en pacientes con insuficiencia renal moderada a grave, podría haber concentraciones plasmáticas elevadas y un mayor riesgo de efectos adversos.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede incrementar los efectos del fármaco como la somnolencia, mareos o la dificultad para concentrarse."
                    }
                ]
            },
            {
                "id": 98,
                "grupo": "Inhibidores de la acetilcolinesterasa",
                "tipo": "Inhibidores de la acetilcolinesterasa",
                "nombreGenerico": "Rivastigmina",
                "nombresComerciales": [
                    "Demelora",
                    "exelon",
                    "trivacin"
                ],
                "presentacion": "Parche transdérmico 4,6mg/24h, 9,5mg/25h, cápsula dura 1,5mg, 3mg, 4,5mg, 6mg",
                "mecanismoAccion": "Facilita la neurotransmisión colinérgica por ralentización de la degradación de acetilcolina liberada por neuronas colinérgicas funcionalmente intactas.",
                "usos": [
                    "Tratamiento sintomático de demencia de la enfermedad Alzheimer leve a moderadamente grave. Tratamiento sintomático de la demencia leve a moderadamente grave con enfermedad de Parkinson idiopática (solo formas orales)."
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "compatibilidad limitada (poco seguro)",
                "administracion": "con alimentos",
                "reaccionesAdversas": "Anorexia, confusión, ansiedad, náuseas, dolor abdominal, dispepsia, malestar, disminución del apetito, insomnio, somnolencia, pérdida de peso, bradicardia",
                "mecanismoHepatico": "Se metaboliza en el hígado, principalmente a través de la enzima butirilcolinesterasa. En pacientes con insuficiencia hepática leve a moderada, se recomienda ajustar la dosis debido a una posible reducción en la eliminación del fármaco.",
                "mecanismoRenal": "Se excreta en la orina como metabolitos inactivos. Por lo tanto, en pacientes con insuficiencia renal, es importante considerar la posible acumulación de metabolitos, lo que podría aumentar el riesgo de efectos adversos.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos ricos en fibra",
                        "mecanismo": "Pueden ralentizar la absorción del medicamento."
                    },
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede incrementar el riesgo de efectos secundarios del fármaco."
                    }
                ]
            },
            {
                "id": 99,
                "grupo": "Antagonistas del receptor NMDA",
                "tipo": "Antagonistas del receptor NMDA",
                "nombreGenerico": "Ketamina",
                "nombresComerciales": [
                    "Ketamin",
                    "ketanir"
                ],
                "presentacion": "Solución inyectable 500mg/10ml",
                "mecanismoAccion": "Deprime selectivamente el sistema tálamo-neocortical antes de bloquear significativamente los sistemas límbico y reticular activador.",
                "usos": [
                    "Como anestésico en intervenciones diagnósticas y quirúrgicas que no requieran relajación muscular. Inducción de anestesia anterior a la administración de otros agentes anestésicos generales. Complemento de otros agentes anestésicos de menor potencia como el óxido nitroso."
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "Compatibilidad probable (bastante seguro )",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "\"Alucinaciones, sueños anormales, pesadillas, confusión, agitación, comportamiento anormal, nistagmus, hipertonía, movimientos clónicos tónicos, diplopía, aumento de la tensión arterial, aumento de la frecuencia cardiaca.\"",
                "mecanismoHepatico": "Se metaboliza en el hígado principalmente a través de la CYP3A4, CYP2B6 y otras enzimas del citocromo P450. La ketamina puede acumularse en pacientes con función hepática deteriorada llevando a un aumento en el riesgo de efectos adversos. Se recomienda reducir la dosis.",
                "mecanismoRenal": "Aproximadamente 90% de la ketamina y sus metabolitos se excretan por los riñones, aunque una pequeña cantidad puede eliminarse en las heces. En pacientes con insuficiencia renal puede aumentar el riesgo de toxicidad.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede potenciar los efectos sedantes o psicodélicos del fármaco."
                    },
                    {
                        "nombreInteraccion": "Ácido fólico y vitamina B12",
                        "mecanismo": "El farmaco puede alterar el metabolismo del ácido fòlico y vitamina B12."
                    }
                ]
            },
            {
                "id": 100,
                "grupo": "Antagonistas del receptor NMDA",
                "tipo": "Antagonistas del receptor NMDA",
                "nombreGenerico": "Memantina",
                "nombresComerciales": [
                    "Acepter",
                    "admenta",
                    "akatinol",
                    "esmirtal",
                    "eutebrol",
                    "lindex",
                    "memikare",
                    "mimetix",
                    "modualz",
                    "neuroplus"
                ],
                "presentacion": "Comprimido recubierto 10mg, 5mg, 20mg, de liberación prolongada 14mg, 28mg, 7mg, solución oral 10mg/ml",
                "mecanismoAccion": "Antagonista no competitivo de receptores NMDA",
                "usos": [
                    "\"Enfermedad de Alzheimer de moderada a grave.\""
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "compatibilidad limitada (poco seguro)",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "\"Dolor de cabeza, somnolencia, estreñimiento, vértigo, alteración del equilibrio, HTA, disnea, hipersensibilidad, pruebas de la función hepática elevada.\"",
                "mecanismoHepatico": "Se metaboliza minimamente en el hígado por las enzimas del citocromo P450, en particular la C YP2D6.",
                "mecanismoRenal": "Su eliminación es principalmente renal, siendo excretada de manera no modificada. En pacientes con insuficiencia renal se incrementa el riesgo de efectos secundarios. Se recomienda ajustar la dosis en función de la tasa de filtración glomerular (TFG).",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alimentos ricos en sodio",
                        "mecanismo": "El fármaco puede relacionarse con el aumento de los niveles de sodio en el cuerpo, lo que puede ser un factor a considerar si el pacientes necesita una restricción de sodio en su dieta."
                    },
                    {
                        "nombreInteraccion": "Suplementos que alteran el pH",
                        "mecanismo": "Pueden interferir con la excreción del fármaco al alterar el pH urinario, lo que podría resultar en niveles más altos de la droga en el cuerpo."
                    }
                ]
            },
            {
                "id": 101,
                "grupo": "Antagonistas del receptor NMDA",
                "tipo": "Antagonistas del receptor NMDA",
                "nombreGenerico": "Dextrometorfano",
                "nombresComerciales": [
                    "Acrotussin",
                    "dextrometorfen",
                    "eucalibrea",
                    "neumonoid",
                    "nogrip",
                    "notusin",
                    "pectobronc",
                    "phenetaps",
                    "resfrin",
                    "stoptos",
                    "singripal",
                    "sudaflex",
                    "tosinfant",
                    "tussis om",
                    "vaporex"
                ],
                "presentacion": "Jarabe 15mg/5ml, 10mg/5ml, 7,5mg/5ml, 100mg/5ml,  líquido oral 3mg/ml, granulado para solución oral 20mg+500mg+10mg+4mg",
                "mecanismoAccion": "Deprime el centro medular de la tos al disminuir la producción de taquicininas. Ligera acción sedante, sin acción narcótica ni analgésica.",
                "usos": [
                    "\"Tratamiento sintomático de formas improductivas de tos (irritativa",
                    "nerviosa).\""
                ],
                "embarazo": "Con precaucion (categoría C)",
                "lactancia": "Compatible",
                "administracion": "con o sin alimentos",
                "reaccionesAdversas": "\"Mareos, nauseas, vómitos, molestias gastrointestinales, fatiga.\"",
                "mecanismoHepatico": "Se metaboliza en el hígado, principalmente por las enzimas CYP2D6, que lo convierten en su metabolito activo. Precaución en pacientes con insuficiencia hepática.",
                "mecanismoRenal": "El fármaco y sus metabolitos se excretan en la orina. En pacientes con insuficiencia renal, el dextrometorfano puede acumularse, lo que puede incrementar el riesgo de efectos adversos.",
                "interacciones": [
                    {
                        "nombreInteraccion": "Alcohol",
                        "mecanismo": "Puede potenciar los efectos depresores del SNC del fármaco."
                    },
                    {
                        "nombreInteraccion": "Vitamina C",
                        "mecanismo": "Niveles elevados de vitamina C pueden modificar la farmacocinética del fármaco disminuyendo su eficacia."
                    },
                    {
                        "nombreInteraccion": "Hierba de San Juan",
                        "mecanismo": "Pueden modificar la eficacia del fármaco al afectar su metabolismo."
                    },
                    {
                        "nombreInteraccion": "Pomelo",
                        "mecanismo": "Puede influenciar la farmacocinética del fármaco al inhibir el CYP3A4."
                    }
                ]
            }
        ];

        return allDrugs;
    }

}