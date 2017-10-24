import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { LiquidityModel } from "./model";
import { RestRepo } from "../../../repo/repository-rest";

@Injectable()
export class LiquidityService {

    constructor(private repo: RestRepo) { }

    get Liquidity(): Observable<LiquidityModel> {
        return this.repo.Liquidity;
    }


}
