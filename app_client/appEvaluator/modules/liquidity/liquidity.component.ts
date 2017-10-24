import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { State, Store } from "@ngrx/store";
import * as actions from "./ngrx/actions"
import { LiquidityModel} from "./ngrx/model";
import * as fromRoot from '../../entry/entry.reducer';

@Component({
  selector: "liquidity",
  templateUrl: "liquidity.component.html"
})
export class LiquidityComponent {
    public liquidityState: Observable<LiquidityModel>;

    task: string = "settings";
    private tasks: string[];

    constructor(private _store: Store<fromRoot.State>) {
        this.liquidityState = this._store.let(fromRoot.liquidityState);

        this.tasks = new Array<string>(
            "Settings",
            "Evaluate"
        );
    }

    ngOnInit() {
        this.liquidityState.subscribe(state => {
            if (state.hasLoaded == false) {
                this._store.dispatch(new actions.InitializeAction({}));
            }
        });
    }

    getTask(): string[] {
        return this.tasks;
    }

    onChange(e) {
        this.task = e.target.name;
    }
    
}
