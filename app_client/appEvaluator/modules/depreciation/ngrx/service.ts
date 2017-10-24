import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { DepreciationModel } from "./model";
import { RestRepo } from "../../../repo/repository-rest";

@Injectable()
export class DepreciationService {

    constructor(private repo: RestRepo) { }

    get Depreciation(): Observable<DepreciationModel> {
        return this.repo.Depreciation;
    }


}
