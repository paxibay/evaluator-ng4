import { OpaqueToken, Injectable } from "@angular/core";
import { Action } from '@ngrx/store';

import { LiquidityModel } from "./model";

export const ActionTypes = {
    INITIALIZE: 'INITIALIZE',
    LOAD_LIQUIDITY: 'LOAD_LIQUIDITY',
};

export class InitializeAction implements Action {
    type = ActionTypes.INITIALIZE;

    constructor(public payload: LiquidityModel) { }
}

export class LoadLiquidityAction implements Action {
    type = ActionTypes.LOAD_LIQUIDITY;

    constructor(public payload: LiquidityModel) { }
}

export type Actions =
    InitializeAction |
    LoadLiquidityAction