import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";
import * as fromRoot from '../../../entry/entry.reducer';
import * as actions from "../ngrx/actions"

@Component({
    selector: "cost-settings",
    templateUrl: "cost-settings.component.html"
})
export class CostSettingsComponent {

    public entityState: Observable<any>;
    public valueObjectState: Observable<any>;

    constructor(private _store: Store<fromRoot.State>) {
        this.entityState = this._store.let(fromRoot.costEntityState);
        this.valueObjectState = this._store.let(fromRoot.costValueObjectState);
    }

    getProjects() {
        return Array("Tax Mode", "Percent", "FixedCost", "DynamicCost");
    }
}
