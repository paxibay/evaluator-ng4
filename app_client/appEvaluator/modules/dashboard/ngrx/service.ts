import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { DashboardModel } from "./model";
import { RestRepo } from "../../../repo/repository-rest";

@Injectable()
export class DashboardService {

    constructor(private repo: RestRepo) { }

    get Dashboard(): Observable<DashboardModel> {
        return this.repo.Dashboard;
    }


}
