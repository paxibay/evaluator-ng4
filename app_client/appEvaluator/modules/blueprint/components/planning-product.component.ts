import { Component, Inject, Input, OnChanges, SimpleChange, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../ngrx/model";

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

interface IChanges { [key: string]: SimpleChange };

@Component({
    selector: "planning-product",
    templateUrl: "planning-product.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanningProductComponent implements OnChanges {
    model = 1;
    @Input() product: Product;

    productName: FormControl = new FormControl('');
    productOutput: FormControl = new FormControl('');
    productPrice: FormControl = new FormControl('');
    
    constructor() {
        //this.searchInput.valueChanges
        //    .debounceTime(500)
        //    .subscribe(stock => this.getStockQuoteFromServer(stock));
    }

    ngOnChanges(changes: IChanges) {
        //console.log(JSON.stringify(changes, null, 2));
    }

    getStockPrice(event) {
        console.log(event.target.value);
    }

    getStockQuoteFromServer(stock: string) {
        console.log(stock);
    }

}

