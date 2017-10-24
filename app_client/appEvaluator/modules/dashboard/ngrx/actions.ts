import { OpaqueToken, Injectable } from "@angular/core";
import { Action } from '@ngrx/store';

import { DashboardModel } from "./model";

export const ActionTypes = {
    INITIALIZE: 'INITIALIZE',
    LOAD_DASHBOARD: 'LOAD_DASHBOARD',
};

export class InitializeAction implements Action {
    type = ActionTypes.INITIALIZE;

    constructor(public payload: DashboardModel) { }
}

export class LoadDashboardAction implements Action {
    type = ActionTypes.LOAD_DASHBOARD;

    constructor(public payload: DashboardModel) { }
}

export type Actions =
    InitializeAction |
    LoadDashboardAction
