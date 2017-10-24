import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { CostService } from "./service";

import { Product, BlueprintModel } from "./model";
import * as actions from './actions';

@Injectable()
export class CostEffects {

    constructor(
        private _actions: Actions,
        private service: CostService,
    ) { }


    @Effect() loadCost$ = this._actions
        .ofType(actions.ActionTypes.INITIALIZE)
        .switchMap(() => 
            this.service.Cost
                .map(cost => ({
                    type: actions.ActionTypes.LOAD_COST,
                    payload: cost
                }))
                .catch(() => Observable.of({ type: actions.ActionTypes.INITIALIZE }))
        );

}

