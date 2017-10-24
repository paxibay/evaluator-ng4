import { OpaqueToken, Injectable } from "@angular/core";
import { Action } from '@ngrx/store';

import { InvestModel } from "./model";


export const ActionTypes = {
    INITIALIZE: 'INITIALIZE',
    LOAD_INVEST: 'LOAD_INVEST',
};

export class InitializeAction implements Action {
    type = ActionTypes.INITIALIZE;

    constructor(public payload: InvestModel) { }
}

export class LoadInvestAction implements Action {
    type = ActionTypes.LOAD_INVEST;

    constructor(public payload: InvestModel) { }
}

export type Actions =
    InitializeAction |
    LoadInvestAction