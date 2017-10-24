import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as update from 'immutability-helper';

import * as blueprintAction from './actions';
import { BlueprintModel, Product } from "./model";

export interface State {
    blueprintState: BlueprintModel
};

const initialState: State = {
    blueprintState: new BlueprintModel()
};

export function reducer(state = initialState, action: blueprintAction.Actions): State {
    switch (action.type) {
        case blueprintAction.ActionTypes.INITIALIZE: {
            return state;
        }
        case blueprintAction.ActionTypes.CHANGE_SCOPE: {
            const previousStateScope = state.blueprintState.scope;
            const currentPayloadScope = action.payload.scope;

            // no chage just return
            if (state.blueprintState.scope == currentPayloadScope) {
                return state;
            }

            // adding project
            if (state.blueprintState.scope < currentPayloadScope) {
                const scope = action.payload.scope;
                const newProduct = new Product("Pro0" + scope);

                const newState = update(state, {
                    blueprintState: {
                        scope: { $set: currentPayloadScope },
                        entity: { products: { $push: [newProduct] }}
                    }
                });
                return newState;
            }

            // remove project
            const newState = update(state, {
                blueprintState: {
                    scope: { $set: currentPayloadScope },
                    entity: { products: { $splice: [[currentPayloadScope, 1]] }} 
                }
            });
            return newState;
        }

        case blueprintAction.ActionTypes.LOAD_PRODUCTS: {
            const newState = Object.assign({}, state, {
                blueprintState: Object.assign({}, action.payload,
                    { hasLoaded: true },
                    { evaluationCriterionId: state.blueprintState.evaluationCriterionId },
                    { evaluationSystemId: state.blueprintState.evaluationSystemId }
                )
            });

            return newState;
        }

        case blueprintAction.ActionTypes.VERIFY_OPTION: {

            let evaluationCriterionId = 0;
            let evaluationSystemId = 0;

            if (action.payload.evaluationCriterionId == - 1) {
                evaluationCriterionId = state.blueprintState.evaluationCriterionId;
                evaluationSystemId = action.payload.evaluationSystemId - 1;
            }
            else if (action.payload.evaluationSystemId == - 1) {
                evaluationCriterionId = action.payload.evaluationCriterionId - 1;
                evaluationSystemId = state.blueprintState.evaluationSystemId;
            }

            const newState = update(state, {
                blueprintState: {
                    evaluationCriterionId: { $set: evaluationCriterionId },
                    evaluationSystemId: { $set: evaluationSystemId },
                }
            });
            return newState;
        }
        default:
            return state;
    }

};

export function getBlueprintState(state$: Observable<State>) {
    return state$.select(s => s.blueprintState);
}

export function getProductsState(state$: Observable<State>) {
    return state$.select(s => s.blueprintState.entity.products);
}

export function getEvaluationCriterionOptionState(state$: Observable<State>) {
    return state$.select(s => s.blueprintState.evaluationCriterionId);
}

export function getEvaluationSystemState(state$: Observable<State>) {
    return state$.select(s => s.blueprintState.evaluationSystemId);
}

export function getValueObjectState(state$: Observable<State>) {
    return state$.select(s => s.blueprintState.valueObject);
}

export function getEntityState(state$: Observable<State>) {
    return state$.select(s => s.blueprintState.entity);
}


 