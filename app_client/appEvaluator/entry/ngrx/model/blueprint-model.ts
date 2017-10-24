import * as appModel from "./app-model";

export interface IProduct {
    id?: number;
    name?: string;
    category?: string;
    output?: number;
    price?: number;
}

export interface IRadioOption {
    id: number;
    checked: boolean;
    description: string;
}

export class Settings {
    sphere?: {
        evaluationCriterion?: Array<IRadioOption>,
        evaluationSystem?: Array<IRadioOption>
    };

    duration?: {
        period?: number,
        startingYear?: number,
        startupYear?: number,
        normalYear?: number,
        reinvest?: boolean
    };
}

export class Sphere {
    evaluationCriterion?: Array<IRadioOption>;
    evaluationSystem?: Array<IRadioOption>;
}

export class Duration {
    period?: number = 20;
    startingYear?: number;
    startupYear?: number;
    normalYear?: number;
    reinvest?: boolean;
}

export class Product implements IProduct {
    public id?: number;
    public category?: string;
    public output?: number;
    public price?: number;
    constructor(public name?: string) { }
}

export class Pricing { }

export class Properties { }

export class BlueprintModel {
    public hasLoaded?: boolean = false;
    public scope?: number = 1
    public evaluationCriterionId?: number = 0;
    public evaluationSystemId?: number = 0;
    public valueObject?: {
        sphere: Sphere,
        duration: Duration
    };
    public entity?: {
        products: Array<Product>,
        sphere: { },
        duration: { }
    };
}


export const BlueprintLables = {
    settings: {
        sphere_evaluationCriterion: 'Evaluation Criterion',
        sphere_financialEvaluation: 'Financial Evaluation',
        sphere_nationalEconomicEvaluation: 'National Economic Evaluation',
        sphere_evaluationSystem: 'Evaluation System',
        sphere_newProject: 'New Project',
        sphere_reorganization: 'Reorganization',
        sphere_cooperation: 'Cooperation',

        duration_scope: 'Scope',
        duration_startingYear: 'Starting Year',
        duration_startupYear: 'Startup Year',
        duration_normalYear: 'Normal Year',
        duration_reinvest: 'Reinvest',
    },
    planning: {
        scope: 'Scope',
        name: 'Product Name',
        output: 'Output',
        price: 'Price'
    },
    pricing: {
        CHANGE_PERIOD: 'CHANGE_PERIOD'
    },
    properties: {
        CHANGE_PERIOD: 'CHANGE_PERIOD'
    }
};


/** appEvaluator/modules/blueprint/ngrx/blueprint.model.ts **/
//export interface CurrentSearch {
//    name: string;
//    location?: {
//        latitude: number,
//        longitude: number
//    },
//    radius: number
//}