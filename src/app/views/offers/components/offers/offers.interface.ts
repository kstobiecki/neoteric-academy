import * as moment from 'moment';
import _date = moment.unitOfTime._date;

export interface OffersInterface {
  _id: string;
  author: string;
  jobTitle: string;
  companyName: string;
  city: string;
  technology: string;
  salary: {min: number, max: number};
  expLvl: string;
  imagePath: string;
  lat: number;
  lng: number;
  details: string;
  requirements: string;
  skills: {name: string, lvl: number}[];
  markerAnimation: string;
  date;

}
