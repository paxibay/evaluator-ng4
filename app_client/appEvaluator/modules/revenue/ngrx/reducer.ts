import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as update from 'immutability-helper';

import * as revenueAction from './actions';
import { RevenueModel } from "./model";

export interface State {
    revenueState: RevenueModel
};

const initialState: State = {
    revenueState: new RevenueModel()
};

export function reducer(state = initialState, action: revenueAction.Actions): State {
    switch (action.type) {
        case revenueAction.ActionTypes.INITIALIZE: {
            return state;
        }
        case revenueAction.ActionTypes.LOAD_REVENUE: {
            const newState = Object.assign({}, state, {
                revenueState: Object.assign({}, action.payload, { hasLoaded: true })
            });

            return newState
        }
        default:
            return state;
    }

};

export function getRevenueState(state$: Observable<State>) {
    return state$.select(s => s.revenueState);
}

export function getEntityState(state$: Observable<State>) {
    return state$.select(s => s.revenueState.entity);
}

export function getProjectRevenueState(state$: Observable<State>) {
    return state$.select(s => s.revenueState.entity.projectRevenue);
}


