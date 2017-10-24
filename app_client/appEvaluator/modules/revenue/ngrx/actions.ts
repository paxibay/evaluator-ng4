import { OpaqueToken, Injectable } from "@angular/core";
import { Action } from '@ngrx/store';

import { RevenueModel } from "./model";

export const ActionTypes = {
    INITIALIZE: 'INITIALIZE',
    LOAD_REVENUE: 'LOAD_REVENUE',
};

export class InitializeAction implements Action {
    type = ActionTypes.INITIALIZE;

    constructor(public payload: RevenueModel) { }
}

export class LoadRevenueAction implements Action {
    type = ActionTypes.LOAD_REVENUE;

    constructor(public payload: RevenueModel) { }
}

export type Actions =
    InitializeAction |
    LoadRevenueAction
