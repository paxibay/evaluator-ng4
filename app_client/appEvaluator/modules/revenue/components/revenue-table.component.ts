import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product} from "../../../repo/repo.model";

@Component({
    selector: "revenue-table",
    templateUrl: "revenue-table.component.html"
})
export class RevenueTableComponent {

    //constructor(private model: StaticModel) { }

    //getProduct(key: number): Product {
    //    return this.model.getProduct(key);
    //}

    //getProducts(): Product[] {
    //    return this.model.getProducts();
    //}

    //deleteProduct(key: number) {
    //    this.model.deleteProduct(key);
    //}

    //editProduct(key: number) {
    //    this.state.id = key;
    //    this.state.mode = MODES.EDIT;
    //}

    //createProduct() {
    //    this.state.id = undefined;
    //    this.state.mode = MODES.CREATE;
    //}
}
