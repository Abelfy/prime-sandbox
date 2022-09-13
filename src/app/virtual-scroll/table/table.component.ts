import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Car } from '../types/types';
import { VirtualScrollService } from '../virtual-scroll.service';

@Component({
  selector: 'ps-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  cars: Car[];

    virtualCars: Car[];

    cols: any[];

    event: LazyLoadEvent;
    loading: boolean = false;

    constructor(private vsService: VirtualScrollService) {}

    ngOnInit() {
        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];

        this.cars = Array.from({length: 10000}).map(() => this.vsService.generateCar());
        this.virtualCars = Array.from({length: 10000});
    }

    loadCarsLazy(event: LazyLoadEvent) {
      this.event = event;
      this.loading = true;
        //simulate remote connection with a timeout 
        setTimeout(() => {
            //load data of required page
            
            let loadedCars = this.cars.slice(event.first, (event.first + event.rows));

            //populate page of virtual cars
            Array.prototype.splice.apply(this.virtualCars, [...[event.first, event.rows], ...loadedCars]);
            
            //trigger change detection
            this.virtualCars = [...this.virtualCars];
            this.loading = false;
        }, Math.random() * 1000 + 250);
    }
}
