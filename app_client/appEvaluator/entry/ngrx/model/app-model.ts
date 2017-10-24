export interface IOption {
    id: number;
    selected: boolean;
    description: string;
}

export interface IApplication {
    scope?: number;
    industry?: string;
    name?: string;
    duration?: {
        period?: number,
        startingYear?: number,
        startupYear?: number,
        normalYear?: number,
        reinvest?: boolean
    };
}

export class ApplicationModel implements IApplication {
    hasLoaded?: boolean = false;
    scope?: number = 1;
    industry?: string;
    name?: string;
    duration?: {
        period?: number,
        startingYear?: number,
        startupYear?: number,
        normalYear?: number,
        reinvest?: boolean
    };
}
