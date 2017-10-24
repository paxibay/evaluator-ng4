import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { FundsModel } from "./model";
import { RestRepo } from "../../../repo/repository-rest";

@Injectable()
export class FundsService {

    constructor(private repo: RestRepo) { }

    get Funds(): Observable<FundsModel> {
        return this.repo.Funds;
    }


}
