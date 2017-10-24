import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Product, BlueprintModel } from "./model";
import { RestRepo } from "../../../repo/repository-rest";

@Injectable()
export class BlueprintService {

    constructor(private repo: RestRepo) { }

    get Scope() {
        return this.repo.Scope;
    }

    get Blueprint(): Observable<BlueprintModel> {
        return this.repo.Blueprint;
    }

    getSettings(): any {
        return this.repo.getSettings();
    }

    getProducts(): Product[] {
        return this.repo.getProducts();
    }

    getPricing(): any {
        return this.repo.getPricing();
    }

    getPeoperties(): any {
        return this.repo.getPeoperties();
    }
}
