import { Injectable, Inject, OpaqueToken } from "@angular/core";
import { Http, Request, RequestMethod, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ApplicationModel, Product, BlueprintModel, RevenueModel, CostModel, DashboardModel, DepreciationModel, FundsModel, InvestModel, LiquidityModel } from "./repo.model";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/delay";

export const REST_URL = new OpaqueToken("rest_url");

@Injectable()
export class RestDataSource {

    constructor(private http: Http,
        @Inject(REST_URL) private url: string) { }

    applicationData(): Observable<ApplicationModel> {
        return this.sendRequest(RequestMethod.Get, this.url + "/application");
    }
    
    blueprintData(): Observable<BlueprintModel> {
        return this.sendRequest(RequestMethod.Get, this.url + "/blueprint");
    }

    revenueData(): Observable<RevenueModel> {
        return this.sendRequest(RequestMethod.Get, this.url + "/revenue");
    }

    costData(): Observable<CostModel> {
        return this.sendRequest(RequestMethod.Get, this.url + "/cost");
    }

    dashboardData(): Observable<DashboardModel> {
        return this.sendRequest(RequestMethod.Get, this.url + "/dashboard");
    }

    depreciationData(): Observable<DepreciationModel> {
        return this.sendRequest(RequestMethod.Get, this.url + "/depreciation");
    }

    fundsData(): Observable<FundsModel> {
        return this.sendRequest(RequestMethod.Get, this.url + "/funds");
    }

    investData(): Observable<InvestModel> {
        return this.sendRequest(RequestMethod.Get, this.url + "/invest");
    }

    liquidityData(): Observable<LiquidityModel> {
        return this.sendRequest(RequestMethod.Get, this.url + "/liquidity");
    }

    //saveProduct(product: Product): Observable<Product> {
    //    return this.sendRequest(RequestMethod.Post, this.url, product);
    //}

    //updateProduct(product: Product): Observable<Product> {
    //    return this.sendRequest(RequestMethod.Put,
    //        `${this.url}/${product.id}`, product);
    //}

    updateBlueprint(blueprint: BlueprintModel): Observable<BlueprintModel> {
        return this.sendRequest(RequestMethod.Put, `${this.url + "/blueprint/1"}`, blueprint);
    }

    deleteProduct(id: number): Observable<Product> {
        return this.sendRequest(RequestMethod.Delete, `${this.url}/${id}`);
    }

    private sendRequest(verb: RequestMethod, url: string, body?: any): Observable<any> {
        let headers = new Headers();
        headers.set("Access-Key", "<secret>");
        headers.set("Application-Names", ["exampleApp", "proAngular"]);

        return this.http.request(new Request({
            method: verb,
            url: url,
            body: body,
            headers: headers
        }))
            .delay(200)
            .map(response => response.json())
            .catch((error: Response) => Observable.throw(
                `Network Error: ${error.statusText} (${error.status})`));
    }
}
