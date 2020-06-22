import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  getTitle(){
    return "wishing";
  }
}
