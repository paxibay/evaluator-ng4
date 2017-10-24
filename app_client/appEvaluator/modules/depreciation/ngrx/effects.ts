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

import { DepreciationService } from "./service";

import { Product, BlueprintModel } from "./model";
import * as actions from './actions';

@Injectable()
export class DepreciationEffects {

    constructor(
        private _actions: Actions,
        private service: DepreciationService,
    ) { }


    @Effect() loadDepreciation$ = this._actions
        .ofType(actions.ActionTypes.INITIALIZE)
        .switchMap(() => 
            this.service.Depreciation
                .map(depreciation => ({
                    type: actions.ActionTypes.LOAD_DEPRECIATION,
                    payload: depreciation
                }))
                .catch(() => Observable.of({ type: actions.ActionTypes.INITIALIZE }))
        );

}

