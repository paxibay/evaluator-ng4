import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";
import * as fromRoot from '../../../entry/entry.reducer';
import * as actions from "../ngrx/actions"

@Component({
    selector: "invest-settings",
    templateUrl: "invest-settings.component.html"
})
export class InvestSettingsComponent {

    public entityState: Observable<any>;
    public valueObjectState: Observable<any>;

    constructor(private _store: Store<fromRoot.State>) {
        this.entityState = this._store.let(fromRoot.investEntityState);
        this.valueObjectState = this._store.let(fromRoot.investValueObjectState);
    }

    getProjects() {
        return Array("Project01", "Project02");
    }
}
