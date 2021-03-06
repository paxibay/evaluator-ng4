﻿import 'rxjs/add/operator/catch';
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

import { RevenueService } from "./service";

import { Product, BlueprintModel } from "./model";
import * as actions from './actions';

@Injectable()
export class RevenueEffects {

    constructor(
        private _actions: Actions,
        private service: RevenueService,
    ) { }

    @Effect() loadRevenue$ = this._actions
        .ofType(actions.ActionTypes.INITIALIZE)
        .switchMap(() => 
            this.service.Revenue
                .map(revenue => ({
                    type: actions.ActionTypes.LOAD_REVENUE,
                    payload: revenue
                }))
                .catch(() => Observable.of({ type: actions.ActionTypes.INITIALIZE }))
        );

}

