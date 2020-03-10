import { Component, OnInit } from '@angular/core';
import {Coffee} from '../logic/coffee';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {
  coffee: Coffee;
  types = ['Espresso', 'Ristretto', 'Americano', 'Cappuccino', 'Frappe'];

  constructor() { }

  ngOnInit() {
    this.coffee = new Coffee();
  }

}
