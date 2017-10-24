import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as update from 'immutability-helper';

import * as investAction from './actions';
import { InvestModel } from "./model";

export interface State {
    investState: InvestModel
};

const invest = new InvestModel();
invest.entity = { name: "entity cannot be empty" };

const initialState: State = {
    investState: invest
};

export function reducer(state = initialState, action: investAction.Actions): State {
    switch (action.type) {
        case investAction.ActionTypes.INITIALIZE: {
            return state;
        }
        case investAction.ActionTypes.LOAD_INVEST: {
            const newState = Object.assign({}, state, {
                investState: Object.assign({}, action.payload, { hasLoaded: true })
            });

            return newState;
        }
        default:
            return state;
    }

};

export function getInvestState(state$: Observable<State>) {
    return state$.select(s => s.investState);
}

export function getInvestEntityState(state$: Observable<State>) {
    return state$.select(s => s.investState.entity);
}

export function getInvestValueObjectState(state$: Observable<State>) {
    return state$.select(s => s.investState.valueObject);
}