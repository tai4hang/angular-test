import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service0Service {

  constructor() { }

  getService0Message() {
    console.log('call backend service0 to get data');
  }
}
