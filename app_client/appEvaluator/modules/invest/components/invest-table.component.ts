import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StaticModel } from "../../../repo/repository-static";
import { Product} from "../../../repo/repo.model";

@Component({
    selector: "invest-table",
    templateUrl: "invest-table.component.html"
})
export class InvestTableComponent {
    constructor(private model: StaticModel) { }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }

    //editProduct(key: number) {
    //    this.state.id = key;
    //    this.state.mode = MODES.EDIT;
    //}

    //createProduct() {
    //    this.state.id = undefined;
    //    this.state.mode = MODES.CREATE;
    //}
}
