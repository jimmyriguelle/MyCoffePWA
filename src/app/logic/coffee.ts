import {PlaceLocation} from './place-location';
import {TastingRating} from './tasting-rating';

export class Coffee {
  // Properties
  type: string;
  rating: number;
  notes: string;
  tastingRating: TastingRating;
  // tslint:disable-next-line:variable-name
  _id: string;

  constructor(public name: string = '',
              public place: string = '',
              public location: PlaceLocation = null) {
    this.location = new PlaceLocation();
    this.tastingRating = new TastingRating();
  }
}
