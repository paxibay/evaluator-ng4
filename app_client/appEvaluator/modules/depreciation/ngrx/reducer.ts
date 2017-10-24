import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as update from 'immutability-helper';

import * as depreciationAction from './actions';
import { DepreciationModel } from "./model";

export interface State {
    depreciationState: DepreciationModel
};

const depreciation = new DepreciationModel();
depreciation.entity = { name: "entity cannot be empty" };

const initialState: State = {
    depreciationState: depreciation
};

export function reducer(state = initialState, action: depreciationAction.Actions): State {
    switch (action.type) {
        case depreciationAction.ActionTypes.INITIALIZE: {
            return state;
        }

        case depreciationAction.ActionTypes.LOAD_DEPRECIATION: {
            const newState = Object.assign({}, state, {
                depreciationState: Object.assign({}, action.payload, { hasLoaded: true })
            });

            return newState;
        }
        default:
            return state;
    }

};

export function getDepreciationState(state$: Observable<State>) {
    return state$.select(s => s.depreciationState);
}

export function getDepreciationEntityState(state$: Observable<State>) {
    return state$.select(s => s.depreciationState.entity);
}

export function getDepreciationValueObjectState(state$: Observable<State>) {
    return state$.select(s => s.depreciationState.valueObject);
}