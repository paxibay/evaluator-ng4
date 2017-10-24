import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { ApplicationModel } from "./model";
import { RestRepo } from "../../repo/repository-rest";

@Injectable()
export class ApplicationService {

    constructor(private repo: RestRepo) { }

    get Application(): Observable<ApplicationModel> {
        return this.repo.Application;
    }
}
