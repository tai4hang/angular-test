import { Injectable } from '@angular/core';
import { Service0Service } from './service0.service';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }

  getService1Message() {
    console.log("call backend service1 to get data");
  }

}
