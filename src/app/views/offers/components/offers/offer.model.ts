export class Offer {
    id: number;
    position: string;
    salary: string;
    company: string;

    constructor( id: number, position: string, salary: string, company: string){
        this.id = id;
        this.position = position;
        this.salary = salary;
        this.company = company;
    }
}