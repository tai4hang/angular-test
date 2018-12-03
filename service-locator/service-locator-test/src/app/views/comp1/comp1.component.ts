import { Component, OnInit, Injector } from '@angular/core';
import { Comp0Component } from '../comp0/comp0.component';
import { ServiceLocator } from 'src/app/service-locator';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component extends Comp0Component implements OnInit {

  constructor(public serviceLocator: ServiceLocator) { super(serviceLocator); }

  ngOnInit() {
  }

  doTestComp1() {
    this.serviceLocator.getService0().getService0Message();
    this.serviceLocator.getService1().getService1Message();
  }

}
