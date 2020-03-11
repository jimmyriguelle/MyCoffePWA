import { Injectable } from '@angular/core';
import {PlaceLocation} from './logic/place-location';
import {Coffee} from './logic/coffee';
import * as Http from 'http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  getList(callback) {
    // TODO: Change it with a real Web Service
    // const list = [
    //   new Coffee('Double Espresso', 'Sunny Cafe', new PlaceLocation('123 Market St', 'San Francisco')),
    //   new Coffee('Caramel Americano', 'Starcoffee', new PlaceLocation('Gran Via 34', 'Madrid'))
    // ];
    // callback(list);

  }

  save(coffee, callback) {
    // TODO: Change it with a real Web Service
    callback(true);
  }
}

