export class Offer {
    id: number;
    position: string;
    salary: string;
    company: string;
    place: string;

    constructor( id: number, position: string, salary: string, company: string, place: string){
        this.id = id;
        this.position = position;
        this.salary = salary;
        this.company = company;
        this.place = place;
    }
}