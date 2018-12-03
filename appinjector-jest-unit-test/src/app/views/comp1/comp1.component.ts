import { Component, OnInit, Injector } from '@angular/core';
import { Comp0Component } from '../comp0/comp0.component';
import { AppInjector } from 'src/app/app-injector.service';
import { Service0Service } from 'src/app/service0.service';
import { Service1Service } from 'src/app/service1.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component extends Comp0Component implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  doTestComp1() {
    AppInjector.getInjector().get(Service0Service).getService0Message();
    AppInjector.getInjector().get(Service1Service).getService1Message();
  }

}
