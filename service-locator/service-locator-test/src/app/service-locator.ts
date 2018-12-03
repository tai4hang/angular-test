import { Injector, Injectable } from "@angular/core";
import { Service0Service } from "./service0.service";
import { Service1Service } from "./service1.service";

@Injectable({ providedIn: 'root'})
export class ServiceLocator {

  constructor(public injector: Injector) {}

  getService0(): Service0Service {
      return this.injector.get(Service0Service);
  }

  getService1(): Service1Service {
      return this.injector.get(Service1Service);
  }
}
