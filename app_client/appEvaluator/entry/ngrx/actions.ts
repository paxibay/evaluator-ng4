import { OpaqueToken, Injectable }  from "@angular/core";
import { Action }       from '@ngrx/store';

import { ApplicationModel }    from "./model";

export const ActionTypes = {
    INITIALIZE: 'INITIALIZE',
    LOAD_APPMODEL: 'LOAD_APPMODEL',
    CHANGE_SCOPE: 'CHANGE_SCOPE'
};

export class InitializeAction implements Action {
    type = ActionTypes.INITIALIZE;

    constructor(public payload: ApplicationModel) { }
}

export class LoadAppmodelAction implements Action {
    type = ActionTypes.LOAD_APPMODEL;

    constructor(public payload: ApplicationModel) { }
}

export class ChangeScopeAction implements Action {
    type = ActionTypes.CHANGE_SCOPE;

    constructor(public payload: ApplicationModel) { }
}


export type Actions =
    InitializeAction |
    LoadAppmodelAction |
    ChangeScopeAction
