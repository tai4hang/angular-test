import { Component, OnInit, Injector } from '@angular/core';
import { Service0Service } from 'src/app/service0.service';
import { Service1Service } from 'src/app/service1.service';
import { ServiceLocator } from 'src/app/service-locator';

@Component({
  selector: 'app-comp0',
  templateUrl: './comp0.component.html',
  styleUrls: ['./comp0.component.css']
})
export class Comp0Component implements OnInit {

  constructor(public serviceLocator: ServiceLocator) { }

  ngOnInit() {
  }

  doTestComp0() {
    this.serviceLocator.getService0().getService0Message();
    this.serviceLocator.getService1().getService1Message();
  }

}
