import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as update from 'immutability-helper';

import * as fundsAction from './actions';
import { FundsModel } from "./model";

export interface State {
    fundsState: FundsModel
};

const funds = new FundsModel();
funds.entity = { name: "entity cannot be empty" };

const initialState: State = {
    fundsState: funds
};

export function reducer(state = initialState, action: fundsAction.Actions): State {
    switch (action.type) {
        case fundsAction.ActionTypes.INITIALIZE: {
            return state;
        }

        case fundsAction.ActionTypes.LOAD_FUNDS: {
            const newState = Object.assign({}, state, {
                fundsState: Object.assign({}, action.payload, { hasLoaded: true })
            });

            return newState;
        }
        default:
            return state;
    }

};

export function getFundsState(state$: Observable<State>) {
    return state$.select(s => s.fundsState);
}

export function getFundsEntityState(state$: Observable<State>) {
    return state$.select(s => s.fundsState.entity);
}

export function getFundsValueObjectState(state$: Observable<State>) {
    return state$.select(s => s.fundsState.valueObject);
}