import { Routes, RouterModule }       from "@angular/router";

import { BlueprintComponent }         from "../modules/blueprint/blueprint.component";
import { BlueprintSettingsComponent } from "../modules/blueprint/components/blueprint-settings.component";
import { PlanningComponent }          from "../modules/blueprint/components/planning.component";
import { PricingComponent }           from "../modules/blueprint/components/pricing.component";
import { PropertiesComponent }        from "../modules/blueprint/components/properties.component";

import { RevenueComponent }           from "../modules/revenue/revenue.component";
import { RevenueSettingsComponent }   from "../modules/revenue/components/revenue-settings.component";
import { RevenueTaxesComponent }      from "../modules/revenue/components/revenue-taxes.component";

import { CostComponent }              from "../modules/cost/cost.component";
import { CostSettingsComponent }      from "../modules/cost/components/cost-settings.component";
import { CostOperatingComponent }     from "../modules/cost/components/cost-operating.component";
import { CostEvaluateComponent }      from "../modules/cost/components/cost-evaluate.component";

import { InvestComponent }            from "../modules/invest/invest.component";
import { InvestSettingsComponent }    from "../modules/invest/components/invest-settings.component";
import { InvestInvestmentComponent }  from "../modules/invest/components/invest-investment.component";

import { FundsComponent }             from "../modules/funds/funds.component";
import { FundsSettingsComponent }     from "../modules/funds/components/funds-settings.component";
import { FundsLoanComponent }         from "../modules/funds/components/funds-loan.component";

import { DashboardComponent }         from "../modules/dashboard/dashboard.component";
import { LiquidityComponent }         from "../modules/liquidity/liquidity.component";
import { LiquiditySettingsComponent } from "../modules/liquidity/components/liquidity-settings.component";
import { LiquidityEvaluateComponent } from "../modules/liquidity/components/liquidity-evaluate.component";

import { DepreciationComponent }      from "../modules/depreciation/depreciation.component";

import { NgxComponent }               from "../modules/ngx-redux/ngx.component";
import { NotFoundComponent }          from "./components/notFound.component";

const blueprintChildRoutes: Routes = [
  {
    path: "",
    children: [
        { path: "settings", component: BlueprintSettingsComponent },
        { path: "planning", component: PlanningComponent },
        { path: "pricing", component: PricingComponent },
        { path: "properties", component: PropertiesComponent },
        { path: "", component: BlueprintSettingsComponent }
    ]
  }
];

const revenueChildRoutes: Routes = [
    {
        path: "",
        children: [
            { path: "settings", component: RevenueSettingsComponent },
            { path: "taxes", component: RevenueTaxesComponent },
            { path: "", component: RevenueSettingsComponent }
        ]
    }
];

const costChildRoutes: Routes = [
    {
        path: "",
        children: [
            { path: "settings", component: CostSettingsComponent },
            { path: "operating", component: CostOperatingComponent },
            { path: "evaluate", component: CostEvaluateComponent },
            { path: "", component: CostSettingsComponent }
        ]
    }
];

const investChildRoutes: Routes = [
    {
        path: "",
        children: [
            { path: "settings", component: InvestSettingsComponent },
            { path: "investment", component: InvestInvestmentComponent },
            { path: "", component: InvestSettingsComponent }
        ]
    }
];

const fundsChildRoutes: Routes = [
    {
        path: "",
        children: [
            { path: "settings", component: FundsSettingsComponent },
            { path: "loan", component: FundsLoanComponent },
            { path: "", component: FundsSettingsComponent }
        ]
    }
];

const liquidityChildRoutes: Routes = [
    {
        path: "",
        children: [
            { path: "settings", component: LiquiditySettingsComponent },
            { path: "evaluate", component: LiquidityEvaluateComponent },
            { path: "", component: LiquiditySettingsComponent }
        ]
    }
];

const routes: Routes = [
  { path: "blueprint", component: BlueprintComponent, children: blueprintChildRoutes },
  { path: "blueprint/:task", component: BlueprintComponent },
  { path: "revenue", component: RevenueComponent, children: revenueChildRoutes },
  { path: "revenue/:task", component: RevenueComponent },
  { path: "cost", component: CostComponent, children: costChildRoutes},
  { path: "cost/:task", component: CostComponent },
  { path: "liquidity", component: LiquidityComponent, children: liquidityChildRoutes },
  { path: "liquidity/:task", component: LiquidityComponent },
  { path: "invest", component: InvestComponent, children: investChildRoutes },
  { path: "invest/:task", component: InvestComponent },
  { path: "funds", component: FundsComponent, children: fundsChildRoutes },
  { path: "funds/:task", component: FundsComponent },
  { path: "depreciation", component: DepreciationComponent },
  { path: "ngxredux", component: NgxComponent },
  { path: "", component: DashboardComponent },
  { path: "**", component: NotFoundComponent }
]

export const Routing = RouterModule.forRoot(routes);
