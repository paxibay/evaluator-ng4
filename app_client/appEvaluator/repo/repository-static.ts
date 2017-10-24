import { Injectable } from "@angular/core";
import { Product, BlueprintModel } from "./repo.model";
import { Observable } from "rxjs/Observable";
import { RestDataSource } from "./datasource-rest";

@Injectable()
export class StaticModel {
  private products: Product[] = new Array<Product>();
  private blueprint: BlueprintModel = new BlueprintModel();
  private period: number = 0;

  private locator = (p: Product, id: number) => p.id == id;

  constructor(private dataSource: RestDataSource) {
      //this.dataSource.getData().subscribe(data => this.products = data);
      this.dataSource.blueprintData()
          .subscribe(data => {
              this.blueprint = data[0];
              this.period = data[0].planning.period;
          }           
      );
  }
  // http://localhost:3200/api/locations/56c8da7fe789ee2c4000cd91

  get Period() {
      return this.period;
  }
  getProducts(): Product[] {
    return this.products;
  }

  getBlueprint(): BlueprintModel {
      return this.blueprint;
  }

  getProduct(id: number): Product {
    return this.products.find(p => this.locator(p, id));
  }

  getNextProductId(id: number): number {
    let index = this.products.findIndex(p => this.locator(p, id));
    if (index > -1) {
      return this.products[this.products.length > index + 2
        ? index + 1 : 0].id;
    } else {
      return id || 0;
    }
  }
  getPreviousProductid(id: number): number {
    let index = this.products.findIndex(p => this.locator(p, id));
    if (index > -1) {
      return this.products[index > 0
        ? index - 1 : this.products.length - 1].id;
    } else {
      return id || 0;
    }
  }

  //saveProduct(product: Product) {
  //  if (product.id == 0 || product.id == null) {
  //    this.dataSource.saveProduct(product)
  //      .subscribe(p => this.products.push(p));
  //  } else {
  //    this.dataSource.updateProduct(product).subscribe(p => {
  //      let index = this.products
  //        .findIndex(item => this.locator(item, p.id));
  //      this.products.splice(index, 1, p);
  //    });
  //  }
  //}

  //saveBlueprint() {
  //    this.dataSource.updateBlueprint(this.blueprint).subscribe(b => {
  //        this.blueprint = b;
  //        this.period = b.planning.period;
  //    });
  //}

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(() => {
      let index = this.products.findIndex(p => this.locator(p, id));
      if (index > -1) {
        this.products.splice(index, 1);
      }
    });
  }
}
