interface RefeicoesProps {
    horario: string;
    nome: string;
    alimentos: string[];
}

export interface Data { // como recebo o retorno?
    nome: string;
    sexo: string;
    idade: number;
    altura: number;
    peso: number;
    objetivo: string;
    refeicoes: RefeicoesProps[];
    suplementos: string[];
}