import { OpaqueToken, Injectable } from "@angular/core";
import { Action } from '@ngrx/store';

import { DepreciationModel } from "./model";

export const ActionTypes = {
    INITIALIZE: 'INITIALIZE',
    LOAD_DEPRECIATION: 'LOAD_DEPRECIATION',
};

export class InitializeAction implements Action {
    type = ActionTypes.INITIALIZE;

    constructor(public payload: DepreciationModel) { }
}

export class LoadDepreciationAction implements Action {
    type = ActionTypes.LOAD_DEPRECIATION;

    constructor(public payload: DepreciationModel) { }
}

export type Actions =
    InitializeAction |
    LoadDepreciationAction
