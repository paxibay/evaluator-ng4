import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { InvestModel } from "./model";
import { RestRepo } from "../../../repo/repository-rest";

@Injectable()
export class InvestService {

    constructor(private repo: RestRepo) { }

    get Invest(): Observable<InvestModel> {
        return this.repo.Invest;
    }


}
