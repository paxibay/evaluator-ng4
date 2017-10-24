import {Component} from '@angular/core';

@Component({
  selector: 'evaluator-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
    public selectedModule = null;
    public modules: Array<any> = [
        { key: "/",             value: "Dashboard" },
        { key: "/blueprint",    value: "Blueprint" },
        { key: "/revenue",      value: "Revenue" },
        { key: "/cost",         value: "Cost" },
        { key: "/liquidity",    value: "Liquidity" },
        { key: "/invest",       value: "Invest" },
        { key: "/funds",        value: "Funds" },
        { key: "/depreciation", value: "Depreciation" },
        { key: "/ngxredux",     value: "Ngx Redux" }
    ];

    onChangeModule(newModule?: string) {
        this.selectedModule = newModule;
    }
}
