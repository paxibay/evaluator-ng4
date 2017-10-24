import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as update from 'immutability-helper';

import * as costAction from './actions';
import { CostModel } from "./model";

export interface State {
    costState: CostModel
};

const initialState: State = {
    costState: new CostModel()
};

export function reducer(state = initialState, action: costAction.Actions): State {
    switch (action.type) {
        case costAction.ActionTypes.INITIALIZE: {
            return state;
        }

        case costAction.ActionTypes.LOAD_COST: {
            const newState = Object.assign({}, state, {
                costState: Object.assign({}, action.payload, { hasLoaded: true })
            });

            return newState;
        }
        default:
            return state;
    }

};

export function getCostState(state$: Observable<State>) {
    return state$.select(s => s.costState);
}


export function getCostEntityState(state$: Observable<State>) {
    return state$.select(s => s.costState.entity);
}

export function getCostValueObjectState(state$: Observable<State>) {
    return state$.select(s => s.costState.valueObject);
}