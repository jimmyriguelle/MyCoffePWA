import {PlaceLocation} from './place-location';
import {TastingRating} from './tasting-rating';

export class Coffee {
  // Properties
  type: string;
  rating: number;
  notes: string;
  tastingRating: TastingRating;

  constructor(public name: string = '',
              public place: string = '',
              public location: PlaceLocation = null) {

  }
}
