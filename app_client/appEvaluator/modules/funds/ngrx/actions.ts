import { OpaqueToken, Injectable } from "@angular/core";
import { Action } from '@ngrx/store';

import { FundsModel } from "./model";

export const ActionTypes = {
    INITIALIZE: 'INITIALIZE',
    LOAD_FUNDS: 'LOAD_FUNDS',
};

export class InitializeAction implements Action {
    type = ActionTypes.INITIALIZE;

    constructor(public payload: FundsModel) { }
}

export class LoadFundsAction implements Action {
    type = ActionTypes.LOAD_FUNDS;

    constructor(public payload: FundsModel) { }
}

export type Actions =
    InitializeAction |
    LoadFundsAction
