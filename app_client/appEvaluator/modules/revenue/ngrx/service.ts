import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { RevenueModel } from "./model";
import { RestRepo } from "../../../repo/repository-rest";

@Injectable()
export class RevenueService {

    constructor(private repo: RestRepo) { }

    get Revenue(): Observable<RevenueModel> {
        return this.repo.Revenue;
    }


}
