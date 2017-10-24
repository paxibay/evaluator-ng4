import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from "rxjs/Observable";
import { State, Store } from "@ngrx/store";

import * as fromRoot from '../../../entry/entry.reducer';
import * as actions from "../ngrx/actions"
import {BlueprintModel, RevenueModel, Product } from "../ngrx/model";

@Component({
    selector: "revenue-settings",
    templateUrl: "revenue-settings.component.html"
})
export class RevenueSettingsComponent {
    //public revenueState: Observable<RevenueModel>;
    public products: Observable<any>;
    public revenueEntityState: Observable<any>;
    public revenueProjectRevenueState: Observable<any>;

    constructor(private _store: Store<fromRoot.State>) {
        //this.revenueState = this._store.let(fromRoot.revenueState);
        this.products = this._store.let(fromRoot.blueprintProductsState);
        this.revenueEntityState = this._store.let(fromRoot.revenueEntityState);
        this.revenueProjectRevenueState = this._store.let(fromRoot.revenueProjectRevenueState);

    }

    ngOnInit() {
        //console.log("revenue ngOnInit");
        //const scope = this.blueprint.scope;
        //const products = this.blueprint.products;

        
    }

    //loadRevenue() {
    //    console.log("loadRevenue");
    //    this._store.dispatch(new actions.InitializeAction({
    //        // LoadRevenueAction
    //    }));
    //}

   
}
