export interface User {
  email: string;
  name: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface Offer {
  jobTitle: string;
  companyName: string;
  city: string;
  technology: string;
  expLvl: string;
  salary: {min: number, max: number};
  imagePath: string;
  lat: number;
  lng: number;
  details: string;
  requirements: string;
  skills: {name: string, lvl: number}[];
}

export interface ParamsInterface {
  city: string;
  technology: string;
  expLvl: string;
  salaryMin: string;
}
