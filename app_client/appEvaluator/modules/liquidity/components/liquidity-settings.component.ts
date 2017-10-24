import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";

import { BlueprintModel, Settings } from "../ngrx/model";
import * as fromRoot from '../../../entry/entry.reducer';
import * as actions from "../ngrx/actions"

@Component({
    selector: "liquidity-settings",
    templateUrl: "liquidity-settings.component.html",
})
export class LiquiditySettingsComponent {
    public entityState: Observable<any>;
    public valueObjectState: Observable<any>;

    constructor(private _store: Store<fromRoot.State>) {
        this.entityState = this._store.let(fromRoot.liquidityEntityState);
        this.valueObjectState = this._store.let(fromRoot.liquidityValueObjectState);
    }

    taxMode: string = "composite";

    getProjects() {
        return Array("Project01", "Project02");
    }

    getMode(): string {
        let mode = this.taxMode == "composite" ? "composite" : "separate";
        return mode;
    }  
}
