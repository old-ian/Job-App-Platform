import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JofferService {

  constructor() { }

    getData(){
      return [
 
     
    {
      id: 1, 
      position: "Back-End Web developer",
      salary: 18000, 
      qualifications: ["Skillful", "Leadership", "Has creativeness"],
      descriptions: "Lorem Ipsum",
      date : 'June 04, 2020',
      status : true,
      applicants: 2
      }

      ]
    }
}
