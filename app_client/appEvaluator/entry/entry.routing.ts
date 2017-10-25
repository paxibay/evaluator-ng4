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
//import { FundsFeaturesComponent }     from "../modules/funds/components/funds-features.component";
//import { TemplateFormsComponent }     from "../modules/funds/components/common/template-forms.component";
//import { ReactiveFormsComponent }     from "../modules/funds/components/common/reactive-forms.component";
//import { AngularMaterialComponent }   from "../modules/funds/components/common/angular-material.component";

import { DashboardComponent }         from "../modules/dashboard/dashboard.component";
import { LiquidityComponent }         from "../modules/liquidity/liquidity.component";
import { LiquiditySettingsComponent } from "../modules/liquidity/components/liquidity-settings.component";
import { LiquidityEvaluateComponent } from "../modules/liquidity/components/liquidity-evaluate.component";

import { DepreciationComponent }      from "../modules/depreciation/depreciation.component";

import { NgxComponent }               from "../modules/ngx-redux/ngx.component";
import { NotFoundComponent }          from "./components/notFound.component";

import { DashboardFirstGuard }        from "./components/dashboardFirst.guard";  

const blueprintChildRoutes: Routes = [
    {
        path: "",
        children: [
            { path: "settings", component: BlueprintSettingsComponent, canActivate: [DashboardFirstGuard] },
            { path: "planning", component: PlanningComponent, canActivate: [DashboardFirstGuard] },
            { path: "pricing", component: PricingComponent, canActivate: [DashboardFirstGuard] },
            { path: "properties", component: PropertiesComponent, canActivate: [DashboardFirstGuard] },
            { path: "", component: BlueprintSettingsComponent, canActivate: [DashboardFirstGuard] }
        ]
    }
];

const revenueChildRoutes: Routes = [
    {
        path: "",
        children: [
            { path: "settings", component: RevenueSettingsComponent, canActivate: [DashboardFirstGuard] },
            { path: "taxes", component: RevenueTaxesComponent, canActivate: [DashboardFirstGuard] },
            { path: "", component: RevenueSettingsComponent, canActivate: [DashboardFirstGuard] }
        ]
    }
];

const costChildRoutes: Routes = [
    {
        path: "",
        children: [
            { path: "settings", component: CostSettingsComponent, canActivate: [DashboardFirstGuard] },
            { path: "operating", component: CostOperatingComponent, canActivate: [DashboardFirstGuard] },
            { path: "evaluate", component: CostEvaluateComponent, canActivate: [DashboardFirstGuard] },
            { path: "", component: CostSettingsComponent, canActivate: [DashboardFirstGuard] }
        ]
    }
];

const investChildRoutes: Routes = [
    {
        path: "",
        children: [
            { path: "settings", component: InvestSettingsComponent, canActivate: [DashboardFirstGuard] },
            { path: "investment", component: InvestInvestmentComponent, canActivate: [DashboardFirstGuard] },
            { path: "", component: InvestSettingsComponent, canActivate: [DashboardFirstGuard] }
        ]
    }
];

const fundsChildRoutes: Routes = [
    {
        path: "",
        children: [
            { path: "settings", component: FundsSettingsComponent, canActivate: [DashboardFirstGuard] },
            { path: "loan", component: FundsLoanComponent, canActivate: [DashboardFirstGuard] },
            //{ path: "features", component: FundsFeaturesComponent, canActivate: [DashboardFirstGuard] },
            //{ path: "templateforms", component: TemplateFormsComponent, canActivate: [DashboardFirstGuard] },
            //{ path: "reactiveforms", component: ReactiveFormsComponent, canActivate: [DashboardFirstGuard] },
            //{ path: "material", component: AngularMaterialComponent, canActivate: [DashboardFirstGuard] },
            { path: "", component: FundsSettingsComponent, canActivate: [DashboardFirstGuard] }
        ]
    } 
]; 


const liquidityChildRoutes: Routes = [
    {
        path: "",
        children: [
          { path: "evaluate", component: LiquidityEvaluateComponent, canActivate: [DashboardFirstGuard] },
          { path: "settings", component: LiquiditySettingsComponent, canActivate: [DashboardFirstGuard] },
          { path: "", component: LiquidityEvaluateComponent, canActivate: [DashboardFirstGuard] }
        ]
    }
];

const routes: Routes = [
    { path: "blueprint",        component: BlueprintComponent,  children: blueprintChildRoutes, canActivate: [DashboardFirstGuard] },
    { path: "blueprint/:task",  component: BlueprintComponent,  canActivate: [DashboardFirstGuard] },
    { path: "revenue",          component: RevenueComponent,    children: revenueChildRoutes, canActivate: [DashboardFirstGuard] },
    { path: "revenue/:task",    component: RevenueComponent,    canActivate: [DashboardFirstGuard] },
    { path: "cost",             component: CostComponent,       children: costChildRoutes, canActivate: [DashboardFirstGuard] },
    { path: "cost/:task",       component: CostComponent,       canActivate: [DashboardFirstGuard] },
    { path: "liquidity",        component: LiquidityComponent,  children: liquidityChildRoutes, canActivate: [DashboardFirstGuard] },
    { path: "liquidity/:task",  component: LiquidityComponent,  canActivate: [DashboardFirstGuard] },
    { path: "invest",           component: InvestComponent,     children: investChildRoutes, canActivate: [DashboardFirstGuard] },
    { path: "invest/:task",     component: InvestComponent,     canActivate: [DashboardFirstGuard] },
    { path: "funds",            component: FundsComponent,      children: fundsChildRoutes, canActivate: [DashboardFirstGuard] },
    { path: "funds/:task",      component: FundsComponent,      canActivate: [DashboardFirstGuard] },
    { path: "depreciation",     component: DepreciationComponent, canActivate: [DashboardFirstGuard] },
    { path: "ngxredux",         component: NgxComponent,        canActivate: [DashboardFirstGuard] },
    { path: "",                 component: DashboardComponent },
    { path: "**",               component: NotFoundComponent }
]

export const Routing = RouterModule.forRoot(routes);

//import { Routes, RouterModule }       from "@angular/router";

//import { BlueprintComponent }         from "../modules/blueprint/blueprint.component";
//import { BlueprintSettingsComponent } from "../modules/blueprint/components/blueprint-settings.component";
//import { PlanningComponent }          from "../modules/blueprint/components/planning.component";
//import { PricingComponent }           from "../modules/blueprint/components/pricing.component";
//import { PropertiesComponent }        from "../modules/blueprint/components/properties.component";

//import { RevenueComponent }           from "../modules/revenue/revenue.component";
//import { RevenueSettingsComponent }   from "../modules/revenue/components/revenue-settings.component";
//import { RevenueTaxesComponent }      from "../modules/revenue/components/revenue-taxes.component";

//import { CostComponent }              from "../modules/cost/cost.component";
//import { CostSettingsComponent }      from "../modules/cost/components/cost-settings.component";
//import { CostOperatingComponent }     from "../modules/cost/components/cost-operating.component";
//import { CostEvaluateComponent }      from "../modules/cost/components/cost-evaluate.component";

//import { InvestComponent }            from "../modules/invest/invest.component";
//import { InvestSettingsComponent }    from "../modules/invest/components/invest-settings.component";
//import { InvestInvestmentComponent }  from "../modules/invest/components/invest-investment.component";

//import { FundsComponent }             from "../modules/funds/funds.component";
//import { FundsSettingsComponent }     from "../modules/funds/components/funds-settings.component";
//import { FundsLoanComponent }         from "../modules/funds/components/funds-loan.component";

//import { DashboardComponent }         from "../modules/dashboard/dashboard.component";
//import { LiquidityComponent }         from "../modules/liquidity/liquidity.component";
//import { LiquiditySettingsComponent } from "../modules/liquidity/components/liquidity-settings.component";
//import { LiquidityEvaluateComponent } from "../modules/liquidity/components/liquidity-evaluate.component";

//import { DepreciationComponent }      from "../modules/depreciation/depreciation.component";

//import { NgxComponent }               from "../modules/ngx-redux/ngx.component";
//import { NotFoundComponent }          from "./components/notFound.component";

//const blueprintChildRoutes: Routes = [
//  {
//    path: "",
//    children: [
//        { path: "settings", component: BlueprintSettingsComponent },
//        { path: "planning", component: PlanningComponent },
//        { path: "pricing", component: PricingComponent },
//        { path: "properties", component: PropertiesComponent },
//        { path: "", component: BlueprintSettingsComponent }
//    ]
//  }
//];

//const revenueChildRoutes: Routes = [
//    {
//        path: "",
//        children: [
//            { path: "settings", component: RevenueSettingsComponent },
//            { path: "taxes", component: RevenueTaxesComponent },
//            { path: "", component: RevenueSettingsComponent }
//        ]
//    }
//];

//const costChildRoutes: Routes = [
//    {
//        path: "",
//        children: [
//            { path: "settings", component: CostSettingsComponent },
//            { path: "operating", component: CostOperatingComponent },
//            { path: "evaluate", component: CostEvaluateComponent },
//            { path: "", component: CostSettingsComponent }
//        ]
//    }
//];

//const investChildRoutes: Routes = [
//    {
//        path: "",
//        children: [
//            { path: "settings", component: InvestSettingsComponent },
//            { path: "investment", component: InvestInvestmentComponent },
//            { path: "", component: InvestSettingsComponent }
//        ]
//    }
//];

//const fundsChildRoutes: Routes = [
//    {
//        path: "",
//        children: [
//            { path: "settings", component: FundsSettingsComponent },
//            { path: "loan", component: FundsLoanComponent },
//            { path: "", component: FundsSettingsComponent }
//        ]
//    }
//];

//const liquidityChildRoutes: Routes = [
//    {
//        path: "",
//        children: [
//            { path: "settings", component: LiquiditySettingsComponent },
//            { path: "evaluate", component: LiquidityEvaluateComponent },
//            { path: "", component: LiquiditySettingsComponent }
//        ]
//    }
//];

//const routes: Routes = [
//  { path: "blueprint", component: BlueprintComponent, children: blueprintChildRoutes },
//  { path: "blueprint/:task", component: BlueprintComponent },
//  { path: "revenue", component: RevenueComponent, children: revenueChildRoutes },
//  { path: "revenue/:task", component: RevenueComponent },
//  { path: "cost", component: CostComponent, children: costChildRoutes},
//  { path: "cost/:task", component: CostComponent },
//  { path: "liquidity", component: LiquidityComponent, children: liquidityChildRoutes },
//  { path: "liquidity/:task", component: LiquidityComponent },
//  { path: "invest", component: InvestComponent, children: investChildRoutes },
//  { path: "invest/:task", component: InvestComponent },
//  { path: "funds", component: FundsComponent, children: fundsChildRoutes },
//  { path: "funds/:task", component: FundsComponent },
//  { path: "depreciation", component: DepreciationComponent },
//  { path: "ngxredux", component: NgxComponent },
//  { path: "", component: DashboardComponent },
//  { path: "**", component: NotFoundComponent }
//]

//export const Routing = RouterModule.forRoot(routes);
