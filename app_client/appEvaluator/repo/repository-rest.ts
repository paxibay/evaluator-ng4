import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import {
    ApplicationModel,
    BlueprintModel,
    RevenueModel,
    CostModel,
    DashboardModel,
    DepreciationModel,
    FundsModel,
    InvestModel,
    LiquidityModel,
    Product
} from "./repo.model";
import { RestDataSource } from "./datasource-rest";

@Injectable()
export class RestRepo {
    private application: Observable<ApplicationModel>;
    private blueprint: Observable<BlueprintModel>;
    private revenue: Observable<RevenueModel>;
    private cost: Observable<CostModel>;

    private dashboard: Observable<DashboardModel>;
    private depreciation: Observable<DepreciationModel>;
    private funds: Observable<FundsModel>;
    private invest: Observable<InvestModel>;
    private liquidity: Observable<LiquidityModel>;

    private scope: number;
    private settings: any;
    private products: Product[];
    private pricing: any;
    private peoperties: any;

    // http://localhost:3200/api/locations/56c8da7fe789ee2c4000cd91
    constructor(private dataSource: RestDataSource) {
        this.application = this.dataSource.applicationData();
        this.blueprint = this.dataSource.blueprintData();
        this.revenue = this.dataSource.revenueData();
        this.cost = this.dataSource.costData();
        this.dashboard = this.dataSource.dashboardData();
        this.depreciation = this.dataSource.depreciationData();
        this.funds = this.dataSource.fundsData();
        this.invest = this.dataSource.investData();
        this.liquidity = this.dataSource.liquidityData();

        this.blueprint
            .subscribe(data => {
                this.scope = data[0].scope;
                this.settings = data[0].settings;
                this.products = data[0].projects;
                this.pricing = data[0].pricing;
                this.peoperties = data[0].peoperties;
            });
    }

    get Application(): Observable<ApplicationModel> {
        return this.application;
    }
    get Blueprint(): Observable<BlueprintModel> {
        return this.blueprint;
    }
    get Revenue(): Observable<RevenueModel> {
        return this.revenue;
    }
    get Cost(): Observable<CostModel> {
        return this.cost;
    }
    get Dashboard(): Observable<DashboardModel> {
        return this.dashboard;
    }
    get Depreciation(): Observable<DepreciationModel> {
        return this.depreciation;
    }
    get Funds(): Observable<FundsModel> {
        return this.funds;
    }
    get Invest(): Observable<InvestModel> {
        return this.invest;
    }
    get Liquidity(): Observable<LiquidityModel> {
        return this.liquidity;
    }

    get Scope() {
        return this.scope;
    }

    getSettings(): any {
        return this.settings;
    }

    getProducts(): Product[] {
        return this.products;
    }

    getPricing(): any {
        return this.pricing;
    }

    getPeoperties(): any {
        return this.peoperties;
    }
}
