import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { CostModel } from "./model";
import { RestRepo } from "../../../repo/repository-rest";

@Injectable()
export class CostService {

    constructor(private repo: RestRepo) { }

    get Cost(): Observable<CostModel> {
        return this.repo.Cost;
    }


}
