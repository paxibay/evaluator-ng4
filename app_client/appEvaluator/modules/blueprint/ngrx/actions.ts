import { OpaqueToken, Injectable }  from "@angular/core";
import { Action }       from '@ngrx/store';

import { BlueprintModel }    from "./model";

export const ActionTypes = {
    INITIALIZE: 'INITIALIZE',
    CHANGE_SCOPE: 'CHANGE_SCOPE',
    LOAD_PRODUCTS: 'LOAD_PRODUCTS',
    VERIFY_OPTION: 'VERIFY_OPTION'
};

export class InitializeAction implements Action {
    type = ActionTypes.INITIALIZE;

    constructor(public payload: BlueprintModel) { }
}

export class ChangeScopeAction implements Action {
    type = ActionTypes.CHANGE_SCOPE;

    constructor(public payload: BlueprintModel) { }
}

export class LoadProductsAction implements Action {
    type = ActionTypes.LOAD_PRODUCTS;

    constructor(public payload: BlueprintModel) { }
}

export class VerifyOptionAction implements Action {
    type = ActionTypes.VERIFY_OPTION;

    constructor(public payload: BlueprintModel) { }
}

export type Actions =
    InitializeAction |
    LoadProductsAction |
    ChangeScopeAction |
    VerifyOptionAction


//=========================

export enum MODES {
    CREATE, EDIT
}
export class SharedState {
    constructor(public mode: MODES, public id?: number, public pid?: number) { }
}

export const SHARED_STATE = new OpaqueToken("shared_state");


@Injectable()
export class BlueprintActions {
    static ADD_PROJECT = 'Add Project';
    static REMOVE_PROJECT = 'Remove Project';

    ChangeCurrency(payload: string): Action {
        return {
            type: BlueprintActions.ADD_PROJECT,
            payload: payload
        }
    }

    LoadCurrencyRates(payload: string): Action {
        return {
            type: BlueprintActions.REMOVE_PROJECT,
            payload: payload
        }
    }
}

//==============================
