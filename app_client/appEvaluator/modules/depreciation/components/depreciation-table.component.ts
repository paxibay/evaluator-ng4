import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StaticModel } from "../../../repo/repository-static";

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";
import * as fromRoot from '../../../entry/entry.reducer';
import * as actions from "../ngrx/actions"

@Component({
    selector: "depreciation-table",
    templateUrl: "depreciation-table.component.html"
})
export class DepreciationTableComponent {

    public entityState: Observable<any>;
    public valueObjectState: Observable<any>;

    constructor(private model: StaticModel, private _store: Store<fromRoot.State>) {
        this.entityState = this._store.let(fromRoot.depreciationEntityState);
        this.valueObjectState = this._store.let(fromRoot.depreciationValueObjectState);
    }

    getProduct(key: number): any {
        return this.model.getProduct(key);
    }

    getProducts(): any {
        return this.model.getProducts();
    }

    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }

    //editProduct(key: number) {
    //    this.state.id = key;
    //    this.state.mode = MODES.EDIT;
    //}

    //createProduct() {
    //    this.state.id = undefined;
    //    this.state.mode = MODES.CREATE;
    //}
}
