import { OpaqueToken, Injectable } from "@angular/core";
import { Action } from '@ngrx/store';

import { CostModel } from "./model";


export const ActionTypes = {
    INITIALIZE: 'INITIALIZE',
    LOAD_COST: 'LOAD_COST',
};

export class InitializeAction implements Action {
    type = ActionTypes.INITIALIZE;

    constructor(public payload: CostModel) { }
}

export class LoadCostAction implements Action {
    type = ActionTypes.LOAD_COST;

    constructor(public payload: CostModel) { }
}

export type Actions =
    InitializeAction |
    LoadCostAction 
